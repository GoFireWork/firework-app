/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  ALL_TESTS_PASS,
  CHANGE_REPO_URL,
  CHANGE_USERNAME,
  CODE_MIRROR_STATE,
  FETCHING_REPO_CONTENTS,
  NUM_ISSUES,
  NUM_TESTS,
  NUM_TESTS_FAILING,
  REPO_CONTENTS,
  REPO_ISSUES,
  RUNNING_TESTS,
  SELECTED_ISSUE,
} from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {string} username The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_USERNAME
 */
export const changeUsername = username => ({
  type: CHANGE_USERNAME,
  username,
});

export const changeRepoURL = repoURL => ({
  type: CHANGE_REPO_URL,
  repoURL,
});

export const changeCodeMirrorState = codeMirrorState => ({
  type: CODE_MIRROR_STATE,
  codeMirrorState,
});

export const setAllTestsPass = allTestsPass => ({
  type: ALL_TESTS_PASS,
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
  type: FETCHING_REPO_CONTENTS,
  fetchingRepoContents,
});

export const setFetchingRepoIssues = fetchingRepoIssues => ({
  type: FETCHING_REPO_CONTENTS,
  fetchingRepoIssues,
});

export const setRepoContents = repoContents => ({
  type: REPO_CONTENTS,
  repoContents,
});

export const setRepoIssues = repoIssues => ({
  type: REPO_ISSUES,
  repoIssues,
});
