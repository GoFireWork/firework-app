import {
  CHANGE_REPO_URL,
  LOAD_REPO_REQUEST,
  LOAD_REPO_ERROR,
  LOAD_REPO_SUCCESS,
} from './constants';

export const changeRepoURL = repoURL => ({
  type: CHANGE_REPO_URL,
  repoURL,
});

export const setFetchingRepoContents = fetchingRepoContents => ({
  type: LOAD_REPO_REQUEST,
  fetchingRepoContents,
});

export const setFetchingRepoContentsError = loadRepoContentsError => ({
  type: LOAD_REPO_ERROR,
  loadRepoContentsError,
});

export const setRepoContents = repoContents => ({
  type: LOAD_REPO_SUCCESS,
  repoContents,
});
