import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectTests = state => state.tests || initialState;

const makeSelectTests = () =>
  createSelector(
    selectTests,
    testsState => testsState.tests,
  );

const makeSelectTestsRunning = () =>
  createSelector(
    selectTests,
    testsState => testsState.selectedTest,
  );

export { makeSelectTestsRunning };
