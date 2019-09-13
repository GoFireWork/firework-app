/**
 * Gets Github user's information
 */

import { call, put, all, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { setUserDetails, setFetchingUserError } from './actions';
import { LOAD_USER_REQUEST } from './constants';

function* ProfileWatcherSaga() {
  yield takeLatest(LOAD_USER_REQUEST, getUserDetails);
}

function* getUserDetails() {
  const token = localStorage.getItem('token');
  if (token) {
    const repoURL = `https://api.github.com/user`;
    const options = {
      headers: {
        Authorization: `bearer ${token}`,
      },
    };
    try {
      const repo = yield call(request, repoURL, options);
      yield put(setUserDetails(repo));
    } catch (err) {
      yield put(setFetchingUserError(err));
    }
  }
}

export default function* saga() {
  yield all([getUserDetails(), ProfileWatcherSaga()]);
}
