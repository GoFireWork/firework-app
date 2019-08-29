import produce from 'immer';
import { RUN_TESTS, TESTS_RESULTS } from './constants';

export const initialState = {
  running: false,
  error: false,
  selectedTest: '',
  testsResults: [],
  failingTestsResults: [],
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

export const getTestsResults = state => state.tests.testsResults;
export const getTestsResultsForIssue = state => {
  const { selectedIssueID } = state.issues;
  if (selectedIssueID) {
    //  testPath is an array within each test of paths;
    //  don't want to count each test twice
    const testsForIssue = state.tests.testsResults.filter(
      testResult =>
        testResult.testPath.filter(
          path => path.indexOf(state.issues.selectedIssueID) > -1,
        ).length > 0,
    );
    return testsForIssue;
  }
  return [];
};

export const getFailingTestsResultsForIssue = state => {
  const { selectedIssueID } = state.issues;
  if (selectedIssueID) {
    //  testPath is an array within each test of paths;
    //  don't want to count each test twice
    const failingTestsForIssue = state.tests.testsResults.filter(
      testResult =>
        testResult.testPath.filter(
          path => path.indexOf(state.issues.selectedIssueID) > -1,
        ).length > 0 && testResult.status === 'fail',
    );
    return failingTestsForIssue;
  }
  return [];
};

export const getTestsRunning = state => state.tests.running;
export const getTestsError = state => state.tests.error;
