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
    yield git.makeDirectory(directoryName);

    yield git.clone({
      directoryName,
      repoUrl,
      depth: 10,
    });

    const files = yield git.readDirectory(directoryName, true);
    console.log(files);
    yield put(setFiles(files));
    const allFiles = yield git.readRecursiveDirectory(directoryName);
    yield put(setFiles(allFiles));
  } catch (err) {
    console.log(err);
    yield put(setFetchingFilesError(err));
  }
}

export default function* saga() {
  const { repoURL } = yield take(LOAD_FILES_REQUEST);
  yield fork(getRepoFiles, repoURL);
}
