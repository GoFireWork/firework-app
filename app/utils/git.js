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

export function readDirectory(directoryName) {
  const fs = init();
  return fs.readdir(directoryName);
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
