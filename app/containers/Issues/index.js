import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import H3 from '../../components/H3';
// import { CenteredSection } from './Elements';
import Section from './Section';
// import messages from './messages';
import { setSelectedIssue } from './actions';
import {
  makeSelectIssues,
  makeSelectIssuesLoading,
  makeSelectIssuesError,
  makeSelectSelectedIssueURL,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import IssuesList from './components/IssuesList/List';

const key = 'issues';

export function Issues(props) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    // if (username && username.trim().length > 0) onSubmitForm();
  }, []);

  return (
    <article>
      <div>
        <Section>
          <H3 />
          <IssuesList {...props} />
        </Section>
      </div>
    </article>
  );
}

Issues.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  issues: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  selectedIssueURL: PropTypes.string,
  selectIssue: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectIssuesLoading(),
  error: makeSelectIssuesError(),
  issues: makeSelectIssues(),
  selectedIssueURL: makeSelectSelectedIssueURL(),
});

export const mapDispatchToProps = dispatch => ({
  selectIssue: selectedIssueURL => dispatch(setSelectedIssue(selectedIssueURL)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Issues);
