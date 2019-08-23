import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import LoadingIndicator from 'components/LoadingIndicator';
import TestListItem from 'containers/Tests/components/TestListItem';

function TestsList(props) {
  const { running, error, allTestsPassing, tests } = props;
  if (running) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <TestListItem item="Something went wrong, please try again!" />
    );
    return <List component={ErrorComponent} />;
  }

  if (tests !== false) {
    return <List items={tests} component={TestListItem} />;
  }

  return null;
}

TestsList.propTypes = {
  running: PropTypes.bool,
  error: PropTypes.any,
  tests: PropTypes.array,
  allTestsPassing: PropTypes.bool,
};

export default TestsList;
