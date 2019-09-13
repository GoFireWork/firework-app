import { put, take, fork, takeEvery } from 'redux-saga/effects';
import * as git from 'utils/git';
import { currentFile, currentFileError } from './actions';
import { CURRENT_FILE_REQUEST } from './constants';

export function* openFetchFile(path, fileName) {
  try {
    const realpath = typeof path === 'object' ? path.path : path;
    const name = typeof path === 'object' ? path.name : fileName;
    const content = yield git.readFile(realpath);
    const file = currentFile({ content, path: realpath, name });
    yield put(file);
  } catch (err) {
    console.log(err);
    yield put(currentFileError(err));
  }
}

export default function* saga() {
  const { path, name } = yield take(CURRENT_FILE_REQUEST);
  yield fork(openFetchFile, path, name);
  yield takeEvery(CURRENT_FILE_REQUEST, openFetchFile);
}
