/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 */

import {
  ALL_TESTS_PASSING,
  CHANGE_REPO_URL,
  LOAD_REPO_REQUEST,
  LOAD_REPO_ERROR,
  CODE_MIRROR_STATE,
  LOAD_ISSUES_REQUEST,
  ISSUES_LOADING_ERROR,
  NUM_ISSUES,
  NUM_TESTS,
  NUM_TESTS_FAILING,
  LOAD_REPO_SUCCESS,
  ISSUES,
  RUNNING_TESTS,
  SELECTED_ISSUE,
} from './constants';

export const changeRepoURL = repoURL => ({
  type: CHANGE_REPO_URL,
  repoURL,
});

export const changeCodeMirrorState = codeMirrorState => ({
  type: CODE_MIRROR_STATE,
  codeMirrorState,
});

export const setAllTestsPass = allTestsPass => ({
  type: ALL_TESTS_PASSING,
  allTestsPass,
});

export const setNumTests = numTests => ({
  type: NUM_TESTS,
  numTests,
});

export const setNumTestsPassing = numTestsPassing => ({
  type: CHANGE_REPO_URL,
  numTestsPassing,
});

export const setNumTestsFailing = numTestsFailing => ({
  type: NUM_TESTS_FAILING,
  numTestsFailing,
});

export const setNumIssues = numIssues => ({
  type: NUM_ISSUES,
  numIssues,
});

export const setRunningTests = runningTests => ({
  type: RUNNING_TESTS,
  runningTests,
});

export const setSelectedIssue = selectedIssue => ({
  type: SELECTED_ISSUE,
  selectedIssue,
});

export const setFetchingRepoContents = fetchingRepoContents => ({
  type: LOAD_REPO_REQUEST,
  fetchingRepoContents,
});

export const setFetchingRepoContentsError = loadRepoContentsError => ({
  type: LOAD_REPO_ERROR,
  loadRepoContentsError,
});

export const setFetchingRepoIssues = loadIssuesRequest => ({
  type: LOAD_ISSUES_REQUEST,
  loadIssuesRequest,
});

export const setFetchingIssuesError = issuesLoadingError => ({
  type: ISSUES_LOADING_ERROR,
  issuesLoadingError,
});

export const setRepoContents = repoContents => ({
  type: LOAD_REPO_SUCCESS,
  repoContents,
});

export const setIssues = repoIssues => ({
  type: ISSUES,
  repoIssues,
});
