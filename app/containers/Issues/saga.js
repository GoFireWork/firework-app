import { call, put } from 'redux-saga/effects';
import request from 'utils/request';
import { setIssues, setFetchingIssuesError } from './actions';

export default function* getRepoIssues() {
  const repoURL = `https://api.github.com/repos/GoFireWork/firework-app/issues`;

  const { token } = window.store.getState().user;
  try {
    const options = {
      credentials: 'same-origin',
      headers: { Authorization: `token ${token}` },
    };
    const issues = yield call(request, repoURL, options);
    yield put(setIssues(issues));
  } catch (err) {
    yield put(setFetchingIssuesError(err));
  }
}
