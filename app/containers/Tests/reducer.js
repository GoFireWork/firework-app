import produce from 'immer';
import { RUN_TESTS, TESTS_RESULTS } from './constants';

export const initialState = {
  running: false,
  error: false,
  selectedTest: '',
  numPassing: 0,
  numFailing: 0,
  testsResults: [],
};

/* eslint-disable default-case, no-param-reassign */
const testsReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case TESTS_RESULTS:
        draft.testsResults = action.testsResults;
        draft.running = false;
        break;
      case RUN_TESTS:
        draft.running = true;
        break;
    }
  });

export default testsReducer;
