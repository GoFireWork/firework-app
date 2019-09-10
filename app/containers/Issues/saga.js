import { call, put } from 'redux-saga/effects';
import request from 'utils/request';
import { setIssues, setFetchingIssuesError } from './actions';

export default function* getRepoIssues() {
  const repoURL = `https://api.github.com/repos/Fireworktech/testing-app/issues`;

  try {
    const options = {
      credentials: 'same-origin',
      username: 'JohnAllen',
    };
    const issues = yield call(request, repoURL, options);
    yield put(setIssues(issues));
  } catch (err) {
    yield put(setFetchingIssuesError(err));
  }
}
