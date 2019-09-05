import React from 'react';
import PropTypes from 'prop-types';

import { TestResult } from './TestResult';
import Wrapper from './Wrapper';
import { stripIssueIDFromTestPath } from '../../utils';

function TestResultListItem(props) {
  const testPaths = props.testResult.testPath;
  const finalTestPath = stripIssueIDFromTestPath(
    testPaths[testPaths.length - 1],
  );

  return (
    <Wrapper>
      <TestResult {...props}>{finalTestPath}</TestResult>
    </Wrapper>
  );
}

TestResultListItem.propTypes = {
  message: PropTypes.string,
  testResult: PropTypes.any,
};

export default TestResultListItem;
