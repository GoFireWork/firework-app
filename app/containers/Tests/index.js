import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import H3 from 'components/H3';
import TestsStyles from './styles';

import { runTests } from './actions';
import {
  makeSelectTestsResults,
  makeSelectTestsResultsForSelectedIssue,
  makeSelectTestsRunning,
} from './selectors';
import { makeSelectSelectedIssueID } from '../Issues/selectors';

import TestsList from './components/TestsList/TestsList';
import TestsMetaData from './components/TestsCounts';

export function Tests(props) {
  console.log(`${props.selectedIssueID}`);
  useEffect(() => {
    async function reRunTests() {
      await runTests();
    }
    reRunTests().then(() => console.log(`Tests done`));
  }, [props.selectedIssueID]);

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

const mapStateToProps = createStructuredSelector({
  selectedIssueID: makeSelectSelectedIssueID(),
  testsResults: makeSelectTestsResults(),
  running: makeSelectTestsRunning(),
  testsResultsForIssue: makeSelectTestsResultsForSelectedIssue(),
});

export const mapDispatchToProps = () => ({
  runTests,
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Tests);
