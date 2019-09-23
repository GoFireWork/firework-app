import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { IssuesContainer } from './styles';
import { PreviewHeader } from '../Tests/styles';

import { selectIssue } from './actions';

import reducer, {
  getIssues,
  getIssuesError,
  getIssuesLoading,
  getSelectedIssueID,
  getSelectedIssueIndex,
} from './reducer';
import saga from './saga';
import IssuesList from './components/IssuesList/List';

const key = 'issues';

export function Issues(props) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  return (
    <div>
      <IssuesContainer>
        <PreviewHeader>{props.issues.length} issues</PreviewHeader>
        <IssuesList {...props} />
      </IssuesContainer>
    </div>
  );
}

Issues.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  issues: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  selectedIssueID: PropTypes.number,
  selectedIndex: PropTypes.number,
  selectIssue: PropTypes.func,
};

const mapStateToProps = state => ({
  loading: getIssuesLoading(state),
  error: getIssuesError(state),
  issues: getIssues(state),
  selectedIssueID: getSelectedIssueID(state),
  selectedIndex: getSelectedIssueIndex(state),
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
