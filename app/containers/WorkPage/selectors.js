/**
 * Editor selectors
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

const makeSelectGitHubRepoIssues = () =>
  createSelector(
    selectHome,
    homeState => homeState.repo.issues,
  );

export {
  selectHome,
  makeSelectGitHubRepoIssues,
  makeSelectGitHubRepoURL,
  makeSelectUsername,
};
