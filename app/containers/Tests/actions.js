import { TESTS_RESULTS } from './constants';

export const setTestsResults = testsResults => ({
  type: TESTS_RESULTS,
  testsResults,
});
