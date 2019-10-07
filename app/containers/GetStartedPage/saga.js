/**
 * Create User
 */

import { call, put, all, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { setCreatedUser, setCreatedUserError } from './actions';
import { CREATE_USER_REQUEST } from './constants';

function* CreateUserWatcherSaga() {
  yield takeLatest(CREATE_USER_REQUEST, CreateUser);
}

function* CreateUser(obj) {
  const data = JSON.stringify(obj.data);
  const requestURL = `https://firework.localtunnel.me/api/user/create`;
  const headers = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: data,
  };
  try {
    const user = yield call(request, requestURL, headers);
    yield put(setCreatedUser(user));
  } catch (err) {
    yield put(setCreatedUserError(err));
  }
}

export default function* saga() {
  yield all([CreateUserWatcherSaga()]);
}
