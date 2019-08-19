import produce from 'immer';
import { SELECTED_ISSUE_ID, RUN_TESTS } from './constants';

// The initial state of the App
export const initialState = {
  running: false,
  error: false,
  selectedTest: '',
  selectedIssueID: 0,
};

/* eslint-disable default-case, no-param-reassign */
const testsReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SELECTED_ISSUE_ID:
        draft.selectedIssueID = action.selectedIssueID;
        break;
      case RUN_TESTS:
        draft.running = true;
        break;
    }
  });

export default testsReducer;
