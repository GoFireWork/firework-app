import { call, put, select, takeLatest } from 'redux-saga/effects';
import { receiveUser, receiveUserError } from 'containers/User/actions';

import request from 'utils/request';
import { makeSelectGoogleId } from 'containers/User/selectors';
import { RECEIVE_GOOGLE_USER } from './constants';

export function* getUser() {
  const googleId = yield select(makeSelectGoogleId());

  try {
    const url = `https://firework.localtunnel.me/api/user/${googleId}`;
    const userSettings = yield call(request, url);
    yield put(receiveUser(userSettings));
  } catch (err) {
    yield put(receiveUserError(err));
  }
}

export default function* user() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(RECEIVE_GOOGLE_USER, getUser);
}
