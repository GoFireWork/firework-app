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
  const accessToken = localStorage.getItem('token');
  const name = localStorage.getItem('name');
  try {
    let files;
    yield git.makeDirectory(directoryName);
    if (localStorage.getItem(repoUrl)) {
      console.log(`Getting repo from localstorage`);
      files = JSON.parse(localStorage.getItem(repoUrl));
      yield put(setFiles(files));
    }
    yield git.clone({
      directoryName,
      repoUrl,
      depth: 10,
      Token: accessToken,
      userName: name,
    });
    files = yield git.listFiles(directoryName);
    localStorage.setItem(repoUrl, JSON.stringify(files));
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
