/*
 * EditorReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { NUM_ISSUES, SELECTED_ISSUE, LOAD_ISSUES, ISSUES } from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  numIssues: 0,
  selectedIssueURL: '',
  issues: [],
};

/* eslint-disable default-case, no-param-reassign */
const issuesReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case NUM_ISSUES:
        draft.numIssues = action.numIssues;
        break;
      case SELECTED_ISSUE:
        draft.selectedIssueURL = action.selectedIssueURL;
        break;
      case LOAD_ISSUES:
        draft.loading = true;
        break;
      case ISSUES:
        draft.issues = action.issues;
        draft.loading = false;
        break;
    }
  });

export default issuesReducer;
