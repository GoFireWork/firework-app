import React, { useContext, useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { run } from 'jest-lite';
import Section from './Section';
import { makeSelectNumTests, makeSelectAllTests } from './selectors';

import TestsList from './components/TestsList/TestsList';
import { SelectedIssueContext } from '../WorkPage/SelectedIssueContextWrapper';
import { updateTestResults } from './actions';

export function Tests(props) {
  const value = useContext(SelectedIssueContext);
  const { selectedIssueID } = value;
  useEffect(() => {
    if (selectedIssueID !== 0) {
      // eslint-disable-next-line no-inner-declarations,no-shadow
      async function runTestsForIssue(selectedIssueID) {
        // const issueNum = 481828735;
        if (selectedIssueID) {
          import(/* webpackMode: "eager" */ `./tests/tests`).then(async () => {
            console.log(`Running tests for ${selectedIssueID}`);
            const results = await run();
            updateTestResults(results);
          });
        }
      }
      runTestsForIssue(selectedIssueID);
    }
  }, Object.values(value));

  return (
    <article>
      <p>{props.numTests} tests found for selected issue</p>
      <div>
        <Section>
          <TestsList {...props} />
        </Section>
      </div>
    </article>
  );
}

Tests.propTypes = {
  running: PropTypes.bool,
  allTestsPassing: PropTypes.bool,
  tests: PropTypes.array,
  numTests: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
  // running: makeSelectTestsRunning(),
  // error: makeSelectIssuesError(),
  numTests: makeSelectNumTests(),
  tests: makeSelectAllTests(),
});

// export const mapDispatchToProps = dispatch => ({});

const withConnect = connect(
  mapStateToProps,
  // mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Tests);
