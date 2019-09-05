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
  console.log('recursive');
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
    corsProxy: 'https://cors.isomorphic-git.org',
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
