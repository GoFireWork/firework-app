import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import LoadingIndicator from 'components/LoadingIndicator';
import TestResultListItem from '../TestResultListItem';
import Wrapper from '../../../../components/List/Wrapper';
import Ul from '../../../../components/List/Ul';

function TestsResults(props) {
  const { running, error, testsResults } = props;
  if (running) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <TestResultListItem item="Something went wrong, please try again!" />
    );
    return <List component={ErrorComponent} />;
  }

  if (testsResults.length) {
    return (
      <Wrapper>
        <Ul>
          {testsResults.map(testResult => (
            <TestResultListItem
              key={testResult.testPath}
              testResult={testResult}
            />
          ))}
        </Ul>
      </Wrapper>
    );
  }

  return null;
}

TestsResults.propTypes = {
  running: PropTypes.bool,
  error: PropTypes.any,
  testsResults: PropTypes.array,
};

export default TestsResults;
