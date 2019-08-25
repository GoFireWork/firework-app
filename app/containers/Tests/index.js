import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import Section from './Section';
import {
  makeSelectTestsResults,
  makeSelectTestsResultsForSelectedIssue,
  makeSelectTestsRunning,
} from './selectors';

import TestsList from './components/TestsList/TestsList';
import { runTests } from './actions';

export function Tests(props) {
  return (
    <article>
      {/* <p>{props.numTests} tests found for selected issue</p> */}
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
