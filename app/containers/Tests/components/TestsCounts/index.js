import React from 'react';
import PropTypes from 'prop-types';

import TestSummary from '../TestsSummary';

export default function TestsCounts(props) {
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

TestsCounts.propTypes = {
  testsResults: PropTypes.array,
};
