import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import LoadingIndicator from 'components/LoadingIndicator';
import TestListItem from 'containers/Tests/components/TestListItem';

function FailingTestsList(props) {
  const { running, error, failingTestsResults } = props;
  if (running) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <TestListItem item="Something went wrong, please try again!" />
    );
    return <List component={ErrorComponent} />;
  }

  if (failingTestsResults.length) {
    return <List items={failingTestsResults} component={TestListItem} />;
  }

  return null;
}

FailingTestsList.propTypes = {
  running: PropTypes.bool,
  error: PropTypes.any,
  failingTestsResults: PropTypes.array,
};

export default FailingTestsList;
