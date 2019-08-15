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
  CHANGE_REPO_URL,
  UPDATE_CODE_MIRROR_STATE,
  LOAD_REPO_REQUEST,
  LOAD_REPO_SUCCESS,
  ALL_TESTS_PASSING,
  NUM_TESTS,
  NUM_TESTS_PASSING,
  NUM_TESTS_FAILING,
  RUNNING_TESTS,
  NUM_ISSUES,
  SELECTED_ISSUE,
  LOAD_ISSUES,
  ISSUES,
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
  issues: [],
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_REPO_URL:
        draft.repoURL = action.url;
        break;
      case UPDATE_CODE_MIRROR_STATE:
        draft.codeMirrorState = action.codeMirrorState;
        break;
      case ALL_TESTS_PASSING:
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
      case LOAD_REPO_REQUEST:
        draft.fetchingRepoContents = action.fetchingRepoContents;
        break;
      case LOAD_ISSUES:
        draft.fetchingRepoIssues = action.fetchingRepoIssues;
        break;
      case LOAD_REPO_SUCCESS:
        draft.repoContents = action.repoContents;
        break;
      case ISSUES:
        draft.issues = action.issues;
        break;
    }
  });

export default homeReducer;
