/**
 * Gets the repositories of the user from Github
 */

import { put, take, fork } from 'redux-saga/effects';
import * as git from 'utils/git';
import { setFiles, setFetchingFilesError } from './actions';
import { LOAD_FILES_REQUEST } from './constants';

/**
 * Get Github repo files
 */
export function* getRepoFiles(repoUrl) {
  const directoryName = `/${repoUrl.split('/').pop()}`;
  try {
    let files;
    yield git.makeDirectory(directoryName);
    console.time('localStorage.getItem(repoUrl)');
    if (localStorage.getItem(repoUrl)) {
      console.log(`repo exists`);
      console.time('JSON Parse');
      files = JSON.parse(localStorage.getItem(repoUrl));
      console.timeEnd('JSON Parse');
      yield put(setFiles(files));
    }
    console.timeEnd('localStorage.getItem(repoUrl)');
    console.time('clone');
    yield git.clone({
      directoryName,
      repoUrl,
      depth: 10,
    });
    console.timeEnd('clone');
    console.time('list');
    files = yield git.listFiles(directoryName);
    localStorage.setItem(repoUrl, JSON.stringify(files));
    console.timeEnd('list');
    yield put(setFiles(files));
  } catch (err) {
    console.log(err);
    yield put(setFetchingFilesError(err));
  }
}

export default function* saga() {
  const { repoURL } = yield take(LOAD_FILES_REQUEST);
  yield fork(getRepoFiles, repoURL);
}
