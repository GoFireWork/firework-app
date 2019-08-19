import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import LoadingIndicator from 'components/LoadingIndicator';
import TestListItem from 'containers/Tests/components/TestListItem';

function TestsList(props) {
  const { loading, error, issues, selectedIssueID, selectIssue } = props;
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <TestListItem item="Something went wrong, please try again!" />
    );
    return <List component={ErrorComponent} />;
  }

  if (issues !== false) {
    return (
      <List
        selectedIssueID={selectedIssueID}
        selectIssue={selectIssue}
        items={issues}
        component={IssueListItem}
      />
    );
  }

  return null;
}

TestsList.propTypes = {
  // loading: PropTypes.bool,
  // error: PropTypes.any,
  // issues: PropTypes.array,
  // selectedIssueID: PropTypes.string,
  // selectIssue: PropTypes.func,
};

export default TestsList;
