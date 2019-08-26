import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import H3 from 'components/H3';
import TestsStyles from './styles';

import { getTestsError, getTestsResults, getTestsRunning } from './reducer';

import { getSelectedIssueID } from '../Issues/reducer';

import TestsList from './components/TestsList/TestsList';
import TestsMetaData from './components/TestsCounts';

export function Tests(props) {
  return (
    <article>
      <div>
        <TestsStyles>
          <H3>{props.testsResults.length} tests found</H3>
          <TestsMetaData {...props} />
          <TestsList {...props} />
        </TestsStyles>
      </div>
    </article>
  );
}

Tests.propTypes = {
  running: PropTypes.bool,
  runTests: PropTypes.func,
  selectedIssueID: PropTypes.number,
  tests: PropTypes.array,
  testsResults: PropTypes.array,
};

const mapStateToProps = state => ({
  running: getTestsRunning(state),
  error: getTestsError(state),
  selectedIssueID: getSelectedIssueID(state),
  testsResults: getTestsResults(state),
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
