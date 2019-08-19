import produce from 'immer';
import { SELECTED_ISSUE_ID, LOAD_ISSUES, ISSUES } from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  numIssues: 0,
  selectedIssueID: 0,
  issues: [],
};

/* eslint-disable default-case, no-param-reassign */
const issuesReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SELECTED_ISSUE_ID:
        draft.selectedIssueID = action.selectedIssueID;
        break;
      case LOAD_ISSUES:
        draft.loading = true;
        break;
      case ISSUES:
        draft.issues = action.issues;
        draft.numIssues = action.issues.length;
        draft.loading = false;
        break;
    }
  });

export default issuesReducer;
