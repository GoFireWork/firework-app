import * as React from 'react';
import PropTypes from 'prop-types';

import { TestDetails, FailedTests, PassedTests, TotalTests } from './styles';

export const TestsOutcomes = ({ numFailing, numPassing, numTotal }) => (
  <TestDetails>
    {numFailing !== 0 && <FailedTests>{numFailing} failed</FailedTests>}
    {numPassing !== 0 && <PassedTests>{numPassing} passed</PassedTests>}
    {numTotal !== 0 && <TotalTests>{numTotal} total</TotalTests>}
  </TestDetails>
);

TestsOutcomes.propTypes = {
  numFailing: PropTypes.number,
  numPassing: PropTypes.number,
  numTotal: PropTypes.number,
};

export default TestsOutcomes;
