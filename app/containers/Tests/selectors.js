import { createSelector } from 'reselect';
import _ from 'lodash/core';

import { initialState } from './reducer';
import { makeSelectSelectedIssueID } from '../Issues/selectors';

const selectTests = state => state.tests || initialState;

const makeSelectTestsResults = () =>
  createSelector(
    selectTests,
    testsState => testsState.testsResults,
  );

const makeSelectTestsRunning = () =>
  createSelector(
    selectTests,
    testsState => testsState.running,
  );

const makeSelectTestsResultsForSelectedIssue = createSelector(
  [makeSelectTestsResults, makeSelectSelectedIssueID],
  (testsResults, selectedIssueID) => {
    if (selectedIssueID > 0) {
      // eslint-disable-next-line consistent-return
      return _.filter(testsResults, testResult => {
        if (testResult.testPath.indexOf()) {
          return testResult;
        }
      });
    }
    return makeSelectTestsResults();
  },
);

export {
  makeSelectTestsResults,
  makeSelectTestsResultsForSelectedIssue,
  makeSelectTestsRunning,
};
