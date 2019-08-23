import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectTests = state => state.tests || initialState;

const makeSelectAllTests = () =>
  createSelector(
    selectTests,
    testsState => testsState.tests,
  );

const makeSelectNumTests = () =>
  createSelector(
    selectTests,
    testsState => testsState.numTests,
  );

export { makeSelectAllTests, makeSelectNumTests };
