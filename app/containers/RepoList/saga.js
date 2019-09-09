/**
 * Gets the repositories of the user from Github
 */

import { call, put, fork } from 'redux-saga/effects';
import request from 'utils/request';
import {
  setRepositories,
  setFetchingRepoContentsError,
  setFetchingRepositories,
} from './action';

/**
 * Get Github repositories List
 */
function* getRepoList() {
  // get  Access Token
  const token = localStorage.getItem('token');
  const repoURL = `https://api.github.com/user/repos`;
  const options = {
    headers: {
      Authorization: `bearer ${token}`,
    },
  };
  try {
    const repo = yield call(request, repoURL, options);
    yield put(setRepositories(repo));
  } catch (err) {
    yield put(setFetchingRepoContentsError(err));
  }
}

export default function* saga() {
  yield put(setFetchingRepositories());
  yield fork(getRepoList);
}
