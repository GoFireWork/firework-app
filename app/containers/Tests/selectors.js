/*
import { createSelector } from 'reselect';
import _ from 'lodash/core';

import configureStore from '../../configureStore';
const store = configureStore();

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

// const makeSelectTestsResultsForSelectedIssue = () =>
//   createSelector(
//     [makeSelectSelectedIssueID(), makeSelectTestsResults()],
//     (selectedIssueID, testsResults) => {
//       switch (selectedIssueID) {
//         case selectedIssueID > 0:
//           // eslint-disable-next-line consistent-return
//           return _.filter(testsResults, testResult => {
//             if (testResult.testPath.indexOf()) {
//               return testResult;
//             }
//           });
//         default:
//           return store.getState().tests.testsResults;
//       }
//     },
//   );

export {
  makeSelectTestsResults,
  makeSelectTestsResultsForSelectedIssue,
  makeSelectTestsRunning,
};
*/
