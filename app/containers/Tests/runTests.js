import { run } from 'jest-lite';
import { updateTestResults } from './actions';

export const runTests = async selectedIssueID => {
  // const issueNum = 481828735;
  if (selectedIssueID) {
    import(/* webpackMode: "eager" */ `./tests/tests`)
      .then(async tests => {
        console.log(`Running tests for ${selectedIssueID}`);
        const results = await run();
        updateTestResults(results);
      })
      .catch(error => console.log(error));
  }
};
