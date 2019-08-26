import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import H3 from 'components/H3';
import TestsStyles from './styles';

import {
  makeSelectTestsResults,
  makeSelectTestsResultsForSelectedIssue,
  makeSelectTestsRunning,
} from './selectors';

import TestsList from './components/TestsList/TestsList';
import TestsMetaData from './components/TestsCounts';
import { runTests } from './actions';

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
  tests: PropTypes.array,
  testsResults: PropTypes.array,
  setTestsResults: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  testsResults: makeSelectTestsResults(),
  running: makeSelectTestsRunning(),
  testsResultsForIssue: makeSelectTestsResultsForSelectedIssue(),
});

export const mapDispatchToProps = dispatch => ({
  selectIssue: dispatch(runTests()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Tests);
