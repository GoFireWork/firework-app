import { run } from 'jest-lite';
import { TESTS_RESULTS } from './constants';

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
  console.log(`${results.length} total tests found`);
  return results;
};
