import './tests/sum.test';

export const runTests = selectedIssueID => {
  console.log(`Running tests for ${selectedIssueID}`);
  window.mocha.fgrep(selectedIssueID.toString());
  console.log(
    `Found ${window.mocha.files.length} tests for issue ${selectedIssueID}`,
  );
  window.mocha.run();
};
