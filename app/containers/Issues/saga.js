/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { LOAD_ISSUES } from 'containers/WorkPage/constants';
import { setIssues, setFetchingIssuesError } from './actions';

// import { makeSelectUsername } from 'containers/WorkPage/selectors';

/**
 * Github repos request/response handler
 */
// export function* getRepos() {
//   Select username from store
// const username = yield select(makeSelectUsername());
// const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;
//
// try {
//   Call our request helper (see 'utils/request')
// const repos = yield call(request, requestURL);
// yield put(reposLoaded(repos, username));
// } catch (err) {
//   yield put(repoLoadingError(err));
// }
// }

/**
 * Get Github repo contents
 */
// export function* getRepoContents() {
//   // Select username from store
//   const username = yield select(makeSelectUsername());
//   const repoURL = `https://api.github.com/JohnAllen/remoto-test`;
//
//   try {
//     // Call our request helper (see 'utils/request')
//     const repos = yield call(request, requestURL);
//     yield put(reposLoaded(repos, username));
//   } catch (err) {
//     yield put(repoLoadingError(err));
//   }
// }

/**
 * Get Github repo issues
 */
export function* getRepoIssues() {
  const repoURL = `https://api.github.com/repos/JohnAllen/remoto-test/issues`;

  try {
    // Call our request helper (see 'utils/request')
    const issues = yield call(request, repoURL);
    yield put(setIssues(issues));
  } catch (err) {
    yield put(setFetchingIssuesError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_ISSUES, getRepoIssues);
}
