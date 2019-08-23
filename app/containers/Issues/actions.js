import {
  LOAD_ISSUES_REQUEST,
  ISSUES_LOADING_ERROR,
  ISSUES,
  SELECTED_ISSUE_ID,
} from './constants';
// import { setNumTestsForSelectedIssue } from '../Tests/actions';

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

export const selectIssue = selectedIssueID => dispatch => {
  dispatch(setSelectedIssue(selectedIssueID));

  //  TODO improve this once we have more tests
  // const numTests = results.suite.suites[0].tests.length;
  // dispatch(setNumTestsForSelectedIssue(numTests));
};
