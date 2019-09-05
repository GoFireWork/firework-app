/*
import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectIssues = state => state.issues || initialState;

const makeSelectIssues = () =>
  createSelector(
    selectIssues,
    issues => issues.issues,
  );

const makeSelectIssuesError = () =>
  createSelector(
    selectIssues,
    issues => issues.error,
  );

const makeSelectIssuesLoading = () =>
  createSelector(
    selectIssues,
    issues => issues.loading,
  );

const makeSelectSelectedIssueID = () =>
  createSelector(
    selectIssues,
    issues => issues.selectedIssueID,
  );

export {
  makeSelectIssues,
  makeSelectIssuesLoading,
  makeSelectIssuesError,
  makeSelectSelectedIssueID,
};
*/
