import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import H3 from '../../components/H3';
import Section from './Section';
import { selectIssue } from './actions';
import {
  makeSelectIssues,
  makeSelectIssuesLoading,
  makeSelectIssuesError,
  makeSelectSelectedIssueID,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import IssuesList from './components/IssuesList/List';

const key = 'issues';

export function Issues(props) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  return (
    <article>
      <div>
        <Section>
          <H3>{props.issues.length} issues</H3>
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
  selectedIssueID: PropTypes.number,
  selectIssue: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectIssuesLoading(),
  error: makeSelectIssuesError(),
  issues: makeSelectIssues(),
  selectedIssueID: makeSelectSelectedIssueID(),
});

export const mapDispatchToProps = dispatch => ({
  selectIssue: selectedIssueID => {
    dispatch(selectIssue(selectedIssueID));
  },
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Issues);
