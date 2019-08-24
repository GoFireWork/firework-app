import { NUM_TESTS, SELECTED_ISSUE_ID } from './constants';

export const setNumTestsForSelectedIssue = selectedIssueID => ({
  type: SELECTED_ISSUE_ID,
  selectedIssueID,
});

export const setNumTestsForIssue = numTests => ({
  type: NUM_TESTS,
  numTests,
});

export const updateTestResults = results => dispatch => {
  console.log(results[0]);
};
