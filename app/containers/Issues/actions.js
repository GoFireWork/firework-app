import { run } from 'jest-lite';
import {
  LOAD_ISSUES_REQUEST,
  ISSUES_LOADING_ERROR,
  ISSUES,
  SELECTED_ISSUE_ID,
} from './constants';
import { setTestsResults } from '../Tests/actions';

export const setSelectedIssue = selectedIssueID => ({
  type: SELECTED_ISSUE_ID,
  selectedIssueID,
});

export const setFetchingIssues = loadIssuesRequest => ({
  type: LOAD_ISSUES_REQUEST,
  loadIssuesRequest,
});

export const setFetchingIssuesError = issuesLoadingError => ({
  type: ISSUES_LOADING_ERROR,
  issuesLoadingError,
});

export const setIssues = issues => ({
  type: ISSUES,
  issues,
});

function requireAll(r) {
  r.keys().forEach(r);
}

export const runTests = async () => {
  console.log(`Beginning runTests`);
  requireAll(require.context('../Tests/tests/expTests/', true, /\.js$/));
  const results = await run();
  console.log(`${results.length} tests found`);
  return results;
};

export const selectIssue = selectedIssueID => async dispatch => {
  dispatch(setSelectedIssue(selectedIssueID));
  const results = await runTests();
  dispatch(setTestsResults(results));
};
