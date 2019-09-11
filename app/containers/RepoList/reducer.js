import produce from 'immer';
import {
  CHANGE_REPO_URL,
  LOAD_REPO_ERROR,
  LOAD_REPO_REQUEST,
  LOAD_REPO_SUCCESS,
  LOAD_REPO_SELECTED,
} from './constants';

export const initialState = {
  username: '',
  repoURL: '',
  repoList: [],
  error: false,
  loading: false,
  selectedRepoUrl: '',
};
/* eslint-disable default-case, no-param-reassign */
const RepositoriesReducer = (state = initialState, action) =>
  /* eslint-disable no-param-reassign */
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_REPO_URL:
        draft.repoURL = action.url;
        break;
      case LOAD_REPO_REQUEST:
        draft.loading = true;
        break;
      case LOAD_REPO_SUCCESS:
        draft.repoList = action.repoList;
        draft.loading = false;
        break;
      case LOAD_REPO_ERROR:
        draft.error = action.error;
        break;
      case LOAD_REPO_SELECTED:
        draft.selectedRepoUrl = action.repo;
        break;
    }
  });

export default RepositoriesReducer;

export const getRepoList = state => state.repo.repoList;
export const getSelectedRepo = state => state.repo.selectedRepoUrl;
