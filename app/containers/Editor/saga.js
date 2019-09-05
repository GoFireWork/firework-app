/**
 * Gets the repositories of the user from Github
 */

import { put, take, fork, takeEvery } from 'redux-saga/effects';
import * as git from 'utils/git';
import { openFile, openFileError } from './actions';
import { OPEN_FILE_REQUEST } from './constants';

/**
 * Get Github repo files
 */
export function* openFetchFile(path) {
  try {
    const realpath = typeof path === 'object' ? path.path : path;
    const content = yield git.readFile(realpath);
    yield put(openFile(content));
  } catch (err) {
    console.log(err);
    yield put(openFileError(err));
  }
}

export default function* saga() {
  const { path } = yield take(OPEN_FILE_REQUEST);
  yield fork(openFetchFile, path);
  yield takeEvery(OPEN_FILE_REQUEST, openFetchFile);
}
