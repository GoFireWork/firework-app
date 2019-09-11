import React from 'react';
import PropTypes from 'prop-types';

import { TestResult } from './TestResult';
import { stripIssueIDFromTestPath } from '../../utils';

function TestResultListItem(props) {
  const testPaths = props.testResult.testPath;
  const finalTestPath = stripIssueIDFromTestPath(
    testPaths[testPaths.length - 1],
  );

  return <TestResult {...props}>{finalTestPath}</TestResult>;
}

TestResultListItem.propTypes = {
  testResult: PropTypes.any,
};

export default TestResultListItem;
