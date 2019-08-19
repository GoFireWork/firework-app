/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { setIssues, setFetchingIssuesError } from './actions';

// import { makeSelectUsername } from 'containers/WorkPage/selectors';

/**
 * Get Github repo issues
 */
export default function* getRepoIssues() {
  const repoURL = `https://api.github.com/repos/JohnAllen/remoto-test/issues`;

  try {
    const options = {
      credentials: 'same-origin',
      username: 'JohnAllen',
      password: 'Git7465;',
    };
    const issues = yield call(request, repoURL, options);
    yield put(setIssues(issues));
  } catch (err) {
    yield put(setFetchingIssuesError(err));
  }
}
