/*
 * EditorReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  CHANGE_USERNAME,
  CHANGE_REPO_URL,
  CODE_MIRROR_STATE,
  ALL_TESTS_PASS,
  NUM_ISSUES,
  NUM_TESTS,
  NUM_TESTS_FAILING,
  NUM_TESTS_PASSING,
  RUNNING_TESTS,
  SELECTED_ISSUE,
  SELECTED_ISSUE_COMPENSATION,
  FETCHING_REPO_CONTENTS,
  FETCHING_REPO_ISSUES,
  REPO_CONTENTS,
  REPO_ISSUES,
} from './constants';

// The initial state of the App
export const initialState = {
  codeMirrorState: '',
  username: '',
  repoURL: '',
  allTestsPassing: false,
  numTests: 0,
  numTestsPassing: 0,
  numTestsFailing: 0,
  numIssues: 0,
  fetchingRepoIssues: false,
  selectedIssue: '',
  selectedIssueCompensation: 0,
  haveRepo: false,
  fetchingRepo: false,
  runningTests: false,
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_USERNAME:
        // Delete prefixed '@' from the github username
        draft.username = action.username.replace(/@/gi, '');
        break;
      case CHANGE_REPO_URL:
        draft.repoURL = action.url;
        break;
      case CODE_MIRROR_STATE:
        draft.codeMirrorState = action.codeMirrorState;
        break;
      case ALL_TESTS_PASS:
        draft.allTestsPassing = action.allTestsPassing;
        break;
      case NUM_TESTS:
        draft.numTests = action.numTests;
        break;
      case NUM_TESTS_PASSING:
        draft.numTestsPassing = action.numTestsPassing;
        break;
      case NUM_TESTS_FAILING:
        draft.numTestsFailing = action.numTestsFailing;
        break;
      case RUNNING_TESTS:
        draft.runningTests = action.runningTests;
        break;
      case NUM_ISSUES:
        draft.numIssues = action.numIssues;
        break;
      case SELECTED_ISSUE:
        draft.selectedIssue = action.issue;
        break;
      case SELECTED_ISSUE_COMPENSATION:
        draft.selectedIssueCompensation = action.compensation;
        break;
      case FETCHING_REPO_CONTENTS:
        draft.fetchingRepoContents = action.fetchingRepoContents;
        break;
      case FETCHING_REPO_ISSUES:
        draft.fetchingRepoIssues = action.fetchingRepoIssues;
        break;
      case REPO_CONTENTS:
        draft.repoContents = action.repoContents;
        break;
      case REPO_ISSUES:
        draft.repoIssues = action.repoIssues;
        break;
    }
  });

export default homeReducer;
