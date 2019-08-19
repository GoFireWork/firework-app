/**
 * Issues selectors
 */
import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectIssues = state => state.issues || initialState;

const makeSelectIssues = () =>
  createSelector(
    selectIssues,
    issuesState => issuesState.issues,
  );

const makeSelectIssuesError = () =>
  createSelector(
    selectIssues,
    issuesState => issuesState.error,
  );

const makeSelectIssuesLoading = () =>
  createSelector(
    selectIssues,
    issuesState => issuesState.loading,
  );

const makeSelectSelectedIssueID = () =>
  createSelector(
    selectIssues,
    issuesState => issuesState.selectedIssueID,
  );

export {
  makeSelectIssues,
  makeSelectIssuesLoading,
  makeSelectIssuesError,
  makeSelectSelectedIssueID,
};
