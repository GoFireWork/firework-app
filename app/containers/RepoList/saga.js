/**
 * Gets the repositories of the user from Github
 */

import { call, put } from 'redux-saga/effects';
import request from 'utils/request';
import { setRepoContents, setFetchingRepoContentsError } from './action';

/**
 * Get Github repositories List
 */
export default function* getRepoList() {
  // get  user Name
  const user = localStorage.getItem('user');
  const repoURL = `https://api.github.com/users/${user}/repos`;
  try {
    const repo = yield call(request, repoURL);
    yield put(setRepoContents(repo));
  } catch (err) {
    yield put(setFetchingRepoContentsError(err));
  }
}
