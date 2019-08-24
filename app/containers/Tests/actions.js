import { NUM_TESTS, SELECTED_ISSUE_ID, TESTS_RESULTS } from './constants';

export const setNumTestsForSelectedIssue = selectedIssueID => ({
  type: SELECTED_ISSUE_ID,
  selectedIssueID,
});

export const setNumTestsForIssue = numTests => ({
  type: NUM_TESTS,
  numTests,
});

export const updateTestsResults = testsStatuses => ({
  type: TESTS_RESULTS,
  testsStatuses,
});
