import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import TestSummary from '../TestsSummary';

import { makeSelectTestsResultsForSelectedIssue } from '../../selectors';

export function TestsMetaData(props) {
  const { testsResults } = props;
  const fileTestSuccessCount = Object.keys(testsResults).filter(
    f => testsResults[f] === 'pass',
  ).length;
  const fileTestFailCount = Object.keys(testsResults).filter(
    f => testsResults[f] === 'fail',
  ).length;
  const totalTestCount = Object.keys(testsResults).length;

  return (
    <article>
      {/* <TestSummaryStyles> */}
      <TestSummary
        numFailing={fileTestFailCount}
        numPassing={fileTestSuccessCount}
        numTotal={totalTestCount}
      />
      {/* </TestSummaryStyles> */}
    </article>
  );
}

TestsMetaData.propTypes = {
  testsResults: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  testsResults: makeSelectTestsResultsForSelectedIssue(),
});

const withConnect = connect(
  mapStateToProps,
  null,
);

export default compose(
  withConnect,
  memo,
)(TestsMetaData);
