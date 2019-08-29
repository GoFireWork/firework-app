import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import {
  FailedTests,
  PassedTests,
  TestDetails,
  TotalTests,
} from '../TestsSummary/styles';
import Wrapper from '../TestListItem/Wrapper';

export default function TestsCounts(props) {
  const { testsResults } = props;
  const passing = _.filter(
    testsResults,
    testResult => testResult.status === 'pass',
  );
  const failing = _.filter(
    testsResults,
    testResult => testResult.status === 'fail',
  );

  const numTotal = testsResults.length;
  const numPassing = passing.length;
  const numFailing = failing.length;

  return (
    <article>
      <Wrapper>
        {/*<TestDetails>*/}
        {numFailing !== 0 && <FailedTests>{numFailing} failed</FailedTests>}
        {numPassing !== 0 && <PassedTests>{numPassing} passed</PassedTests>}
        {numTotal !== 0 && <TotalTests>{numTotal} total</TotalTests>}
        {/*</TestDetails>*/}
      </Wrapper>
    </article>
  );
}

TestsCounts.propTypes = {
  testsResults: PropTypes.array,
};
