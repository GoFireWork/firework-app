import {
  CHANGE_REPO_URL,
  LOAD_REPO_REQUEST,
  LOAD_REPO_ERROR,
  LOAD_REPO_SUCCESS,
  LOAD_REPO_SELECTED,
} from './constants';

export const changeRepoURL = repoURL => ({
  type: CHANGE_REPO_URL,
  repoURL,
});

export const setFetchingRepositories = fetchingRepoContents => ({
  type: LOAD_REPO_REQUEST,
  fetchingRepoContents,
});

export const setFetchingRepoContentsError = loadRepoContentsError => ({
  type: LOAD_REPO_ERROR,
  loadRepoContentsError,
});

export const setRepositories = repoList => ({
  type: LOAD_REPO_SUCCESS,
  repoList,
});

export const setSelectedRepositries = repo => ({
  type: LOAD_REPO_SELECTED,
  repo,
});
