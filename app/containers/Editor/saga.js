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
export function* openFetchFile(path, fileName) {
  try {
    const realpath = typeof path === 'object' ? path.path : path;
    const name = typeof path === 'object' ? path.name : fileName;
    const content = yield git.readFile(realpath);
    console.log(realpath);
    const file = openFile({ content, path: realpath, name });
    yield put(file);
  } catch (err) {
    console.log(err);
    yield put(openFileError(err));
  }
}

export default function* saga() {
  const { path, name } = yield take(OPEN_FILE_REQUEST);
  yield fork(openFetchFile, path, name);
  yield takeEvery(OPEN_FILE_REQUEST, openFetchFile);
}
