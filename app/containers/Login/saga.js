/**
 * Gets Github user's information
 */

import { call, put, fork } from 'redux-saga/effects';
import request from 'utils/request';
import {
  setUserDetails,
  setFetchingUser,
  setFetchingUserError,
} from './actions';

function* getUserDetails() {
  // get  Access Token
  const token = localStorage.getItem('token');
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

export default function* saga() {
  yield put(setFetchingUser());
  yield fork(getUserDetails);
}
