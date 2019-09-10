import * as git from 'isomorphic-git';
import FS from '@isomorphic-git/lightning-fs';

const name = 'remoto-app';

export default function init() {
  const fs = new FS(name);
  git.plugins.set('fs', fs);
  return fs.promises;
}

export async function makeDirectory(directoryName) {
  const fs = init();
  try {
    return await fs.mkdir(directoryName);
  } catch (error) {
    console.log(error);
    return true;
  }
}

/* eslint-disable no-await-in-loop */
export async function readRecursiveDirectory(
  directoryName,
  type = 'dir',
  filename = 'root',
) {
  const fs = init();
  let item;
  let subStat;
  const stat = await fs.lstat(directoryName);
  const root = {
    id: stat.ino,
    name: filename,
    path: directoryName,
    type: stat.type,
    leaf: stat.type !== 'dir',
  };

  if (type === 'dir') {
    root.children = [];
    const rootFiles = await fs.readdir(directoryName);
    for (let index = 0; index < rootFiles.length; index += 1) {
      item = rootFiles[index];
      subStat = await fs.lstat(`${directoryName}/${item}`);
      root.children.push(
        await readRecursiveDirectory(
          `${directoryName}/${item}`,
          subStat.type,
          item,
        ),
      );
    }
  }
  return root;
}

export async function readDirectory(
  directoryName,
  toggled = false,
  type = 'dir',
  filename = 'root',
) {
  const fs = init();
  let item;
  let subStat;
  let file;
  const stat = await fs.lstat(directoryName);
  const root = {
    id: stat.ino,
    name: filename,
    path: directoryName,
    type: stat.type,
    toggled,
    leaf: stat.type !== 'dir',
  };

  if (type === 'dir') {
    root.children = [];
    const rootFiles = await fs.readdir(directoryName);
    for (let index = 0; index < rootFiles.length; index += 1) {
      item = rootFiles[index];
      subStat = await fs.lstat(`${directoryName}/${item}`);
      file = {
        id: subStat.ino,
        name: item,
        path: `${directoryName}/${item}`,
        type: subStat.type,
      };
      if (subStat.type !== 'dir') {
        file.leaf = true;
      } else {
        file.children = [];
        file.loading = true;
      }
      root.children.push(file);
    }
  }
  return root;
}

export function clone({
  repoUrl,
  directoryName = '/',
  depth = 1,
  branch = 'master',
}) {
  return git.clone({
    dir: directoryName,
    corsProxy: 'http://cors.firework.technology:9999',
    url: repoUrl,
    ref: branch,
    singleBranch: true,
    depth,
  });
}

export async function readFile(path) {
  const fs = init();
  const content = await fs.readFile(path, 'utf8');
  return content;
}

function searchOrCreate(dir, idx, arr, path) {
  const key = dir[idx];
  let iterator;
  let type;

  if (dir.length === idx) return;

  const item = arr.filter(s => s.name === key)[0];

  if (!item) {
    type = dir.length === idx + 1 ? 'file' : 'folder';
    iterator = {
      id: Date.now(),
      path: `${path}/${dir.slice(0, idx).join('/')}/${key}`,
      type,
      name: key,
    };
    if (type === 'folder') {
      iterator.children = [];
    } else {
      iterator.leaf = true;
    }
    arr.push(iterator);
  }

  searchOrCreate(dir, idx + 1, item ? item.children : [], path);
}

function sortBy(a, b) {
  if (a.type === b.type) {
    return a.name > b.name;
  }
  return a.type > b.type ? -1 : 1;
}

function sortByTypeAndName(result) {
  result.sort(sortBy);
  result.forEach((item, index) => {
    if (item.children) {
      sortByTypeAndName(result[index].children);
    }
  });
  return result;
}

function setWeight(_result, rootIdx) {
  const result = _result.map((item, index) => ({
    ...item,
    id: Number(`${rootIdx}${index}`),
  }));
  result.forEach((item, index) => {
    if (item.children) {
      result[index].children = setWeight(item.children, item.id);
    }
  });
  return result;
}

export async function listFiles(path) {
  const files = await git.listFiles({ dir: path });
  let result = [];
  files.forEach(item => {
    searchOrCreate(item.split('/'), 0, result, path);
  });
  sortByTypeAndName(result);
  result = setWeight(result, 1);
  return {
    id: 1,
    name: 'root',
    path,
    type: 'folder',
    toggled: true,
    children: result,
  };
}
