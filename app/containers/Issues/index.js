import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import H2 from 'components/H2';
// import ReposList from 'components/ReposList';
// import AtPrefix from './AtPrefix';
import { CenteredSection } from './Elements';
// import Form from './Form';
// import Input from './Input';
import Section from './Section';
import messages from './messages';
import { loadRepos } from '../App/actions';
import { se } from './actions';
import {
  makeSelectIssues,
  makeSelectIssuesLoadingError,
  makeSelectTestsLoadingError,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import CodeMirror from '../CodeMirror';

const key = 'editor';

export function WorkPage({ username, loading, error, issues }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    if (username && username.trim().length > 0) onSubmitForm();
  }, []);

  const issuesListProps = {
    loadingIssues,
    loadingIssuesError,
    issues,
    selectedIssueURL,
  };

  const testsListProps = {
    runningTests,
    allTestsPassing,
    tests,
    numTestsFailing,
    numTestsPassing,
  };

  return (
    <article>
      <Helmet>
        <title>Editor</title>
        <meta name="description" content="Code Editor" />
      </Helmet>
      <div>
        <CenteredSection>
          <CodeMirror />
        </CenteredSection>
        <Issues />
        {/* <Tests /> */}
      </div>
    </article>
  );
}

WorkPage.propTypes = {
  loadingIssues: PropTypes.bool,
  loadingIssuesError: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  issues: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  selectedIssueURL: PropTypes.string,
  selectIssue: PropTypes.func,
  runningTests: PropTypes.bool,
  allTestsPassing: PropTypes.bool,
  numTestsFailing: PropTypes.number,
  numTestsPassing: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
  issues: makeSelectIssues(),
  issuesLoadingError: makeSelectIssuesLoadingError(),
  testsLoadingError: makeSelectTestsLoadingError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeSelectedIssue: evt =>
      dispatch(changeSelectedIssue(evt.target.value)),
    // onSubmitForm: evt => {
    //   if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    //   dispatch(loadRepos());
    // },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(WorkPage);
