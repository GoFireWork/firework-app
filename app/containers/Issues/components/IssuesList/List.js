import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import LoadingIndicator from 'components/LoadingIndicator';
import IssueListItem from 'containers/Issues/components/IssuesListItem';

function IssuesList(props) {
  const {
    loading,
    error,
    issues,
    selectedIssueID,
    selectIssue,
    selectedIndex,
  } = props;
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
        selectedIssueID={selectedIssueID}
        selectIssue={selectIssue}
        selectedIndex={selectedIndex}
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
  selectedIssueID: PropTypes.number,
  selectedIndex: PropTypes.number,
  selectIssue: PropTypes.func,
};

export default IssuesList;
