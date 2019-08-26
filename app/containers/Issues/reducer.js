import produce from 'immer';
import { SELECTED_ISSUE_ID, LOAD_ISSUES, ISSUES } from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
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
        draft.loading = false;
        break;
    }
  });

export default issuesReducer;

export const getSelectedIssueID = state => state.issues.selectedIssueID;
export const getIssuesLoading = state => state.issues.loading;
export const getIssuesError = state => state.issues.error;
export const getIssues = state => state.issues.issues;
