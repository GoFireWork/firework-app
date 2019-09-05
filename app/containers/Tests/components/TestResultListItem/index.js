import React from 'react';
import PropTypes from 'prop-types';

import { TestResult } from './TestResult';
import Wrapper from './Wrapper';
import { stripIssueIDFromTestPath } from '../../utils';

function TestResultListItem(props) {
  let message;
  if (props.testResult) {
    const testPaths = props.testResult.testPath;
    message = stripIssueIDFromTestPath(testPaths[testPaths.length - 1]);
  } else message = 'Error occurred while running tests';

  return (
    <Wrapper>
      <TestResult {...props}>{message}</TestResult>
    </Wrapper>
  );
}

TestResultListItem.propTypes = {
  message: PropTypes.string,
  testResult: PropTypes.any,
};

export default TestResultListItem;
