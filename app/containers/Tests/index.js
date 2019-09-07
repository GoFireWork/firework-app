import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { TestsContainer, PreviewHeader } from './styles';

import {
  getTestsError,
  getFailingTestsResultsForIssue,
  getTestsResultsForIssue,
  getTestsRunning,
} from './reducer';

import { getSelectedIssueID } from '../Issues/reducer';

import TestsResults from './components/TestsResults';
import TestsCounts from './components/TestsCounts';

export function Tests(props) {
  const { selectedIssueID, testsResults } = props;
  return (
    <TestsContainer>
      <PreviewHeader>
        {selectedIssueID
          ? `${testsResults.length} tests found for selected issue`
          : 'Select An Issue to Run Tests'}
      </PreviewHeader>
      <TestsCounts {...props} />
      <TestsResults {...props} />
    </TestsContainer>
  );
}

Tests.propTypes = {
  running: PropTypes.bool,
  runTests: PropTypes.func,
  selectedIssueID: PropTypes.number,
  tests: PropTypes.array,
  testsResults: PropTypes.array,
  failingTests: PropTypes.array,
};

const mapStateToProps = state => ({
  running: getTestsRunning(state),
  error: getTestsError(state),
  selectedIssueID: getSelectedIssueID(state),
  testsResults: getTestsResultsForIssue(state),
  failingTestsResults: getFailingTestsResultsForIssue(state),
});

// export const mapDispatchToProps = () => ({});

const withConnect = connect(
  mapStateToProps,
  null,
);

export default compose(
  withConnect,
  memo,
)(Tests);
