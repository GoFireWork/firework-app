import {
  LOAD_ISSUES_REQUEST,
  ISSUES_LOADING_ERROR,
  ISSUES,
  SELECTED_ISSUE_ID,
} from './constants';

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
};
