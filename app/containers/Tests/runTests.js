import { run } from 'jest-lite';
import { updateTestResults } from './actions';

function requireAll(r) {
  r.keys().forEach(r);
}

// export const runTests = async () => {
//   requireAll(require.context('./tests/expTests/', true, /\.js$/));
//   const results = await run();
//   console.log(`${results}`);
//   return results;
// };
