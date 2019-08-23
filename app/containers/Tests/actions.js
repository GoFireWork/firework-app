import { NUM_TESTS, SELECTED_ISSUE_ID } from './constants';

export const setNumTestsForSelectedIssue = selectedIssueID => ({
  type: SELECTED_ISSUE_ID,
  selectedIssueID,
});

export const setNumTestsForIssue = numTests => ({
  type: NUM_TESTS,
  numTests,
});

// export const selectIssue = selectedIssueID => dispatch => {
//   dispatch(setSelectedIssue(selectedIssueID));
//
//   dispatch(setNumTestsForSelectedIssue(numSuites.length));
// };

export const updateTestResults = results => dispatch => {
  console.log(results[0]);
};
