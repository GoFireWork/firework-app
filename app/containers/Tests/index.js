import React, { useContext, useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

// import { useInjectReducer } from 'utils/injectReducer';
// import { useInjectSaga } from 'utils/injectSaga';
// import H3 from '../../components/H3';
// import { CenteredSection } from './Elements';
import Section from './Section';
import { makeSelectTestsRunning } from './selectors';

// import reducer from './reducer';
import saga from './saga';
import { runTests } from './runTests';
import TestsList from './components/TestsList/List';
import { SelectedIssueContext } from '../WorkPage/SelectedIssueContextWrapper';

const key = 'tests';

export function Tests() {
  // useInjectReducer({ key, reducer });
  // useInjectSaga({ key, saga });
  const value = useContext(SelectedIssueContext);
  const { selectedIssueID } = value;
  useEffect(() => {
    if (selectedIssueID !== 0) runTests(selectedIssueID);
  }, Object.values(value));

  return (
    <article>
      <div id="mocha">
        <Section>{/*<TestsList {...props} />*/}</Section>
      </div>
    </article>
  );
}

Tests.propTypes = {
  // loading: PropTypes.bool,
  // error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  // issues: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  // selectIssue: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  // running: makeSelectTestsRunning(),
  // error: makeSelectIssuesError(),
  // issues: makeSelectIssues(),
  // selectedIssueID: makeSelectSelectedIssueID(),
});

export const mapDispatchToProps = dispatch => ({});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Tests);
