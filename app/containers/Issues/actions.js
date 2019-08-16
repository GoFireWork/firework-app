import {
  LOAD_ISSUES_REQUEST,
  ISSUES_LOADING_ERROR,
  ISSUES,
  NUM_ISSUES,
  SELECTED_ISSUE,
} from './constants';

export const setNumIssues = numIssues => ({
  type: NUM_ISSUES,
  numIssues,
});

export const setSelectedIssue = selectedIssueURL => ({
  type: SELECTED_ISSUE,
  selectedIssueURL,
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
