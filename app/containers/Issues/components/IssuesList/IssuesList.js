import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import LoadingIndicator from 'components/LoadingIndicator';
import IssueListItem from 'containers/Issues/components/IssuesListItem';

function IssuesList({ loading, error, issues, selectedIssueURL }) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <IssueListItem item="Something went wrong, please try again!" />
    );
    return <List component={ErrorComponent} />;
  }

  if (issues !== false) {
    return (
      <List
        selectedIssueURL={selectedIssueURL}
        items={issues}
        component={IssueListItem}
      />
    );
  }

  return null;
}

IssuesList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  issues: PropTypes.array,
  selectedIssueURL: PropTypes.string,
};

export default IssuesList;
