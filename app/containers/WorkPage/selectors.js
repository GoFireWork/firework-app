/**
 * WorkPage selectors
 */
import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const makeSelectUsername = () =>
  createSelector(
    selectHome,
    homeState => homeState.username,
  );

const makeSelectGitHubRepoURL = () =>
  createSelector(
    selectHome,
    homeState => homeState.repo.url,
  );

const makeSelectIssues = () =>
  createSelector(
    selectHome,
    homeState => homeState.issues,
  );

const makeSelectIssuesLoadingError = () =>
  createSelector(
    selectHome,
    homeState => homeState.issuesLoadingError,
  );

const makeSelectTestsLoadingError = () =>
  createSelector(
    selectHome,
    homeState => homeState.testsLoadingError,
  );

export {
  selectHome,
  makeSelectGitHubRepoURL,
  makeSelectUsername,
  makeSelectIssuesLoadingError,
  makeSelectIssues,
  makeSelectTestsLoadingError,
};
