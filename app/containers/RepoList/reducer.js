import produce from 'immer';
import {
  CHANGE_REPO_URL,
  LOAD_REPO_ERROR,
  LOAD_REPO_REQUEST,
  LOAD_REPO_SUCCESS,
} from './constants';

export const initialState = {
  username: '',
  repoURL: '',
  repoList: '',
  error: false,
  haveRepo: false,
  loading: false,
};

const RepositorReducer = (state = initialState, action) =>
  /* eslint-disable no-param-reassign */
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_REPO_URL:
        draft.repoURL = action.url;
        break;
      case LOAD_REPO_REQUEST:
        draft.loading = action.loading;
        break;
      case LOAD_REPO_SUCCESS:
        draft.repoList = action.repoContents;
        break;
      case LOAD_REPO_ERROR:
        draft.error = action.error;
        break;
      default:
        return state;
    }
    return draft;
  });

export default RepositorReducer;
