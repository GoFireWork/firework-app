import { run } from 'jest-lite';
import { TESTS_RESULTS } from './constants';

import configureStore from '../../configureStore';
const store = configureStore();

export const setTestsResults = testsResults => ({
  type: TESTS_RESULTS,
  testsResults,
});

function requireAll(r) {
  r.keys().forEach(r);
}

export const runTests = async () => {
  console.log(`Running tests`);
  requireAll(require.context('./tests/expTests/', true, /\.js$/));
  const results = await run();
  console.log(`${results.length} tests found`);
  store.dispatch(setTestsResults(results));
};
