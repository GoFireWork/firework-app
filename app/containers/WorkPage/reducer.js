import produce from 'immer';
import {
  CHANGE_REPO_URL,
  LOAD_REPO_ERROR,
  LOAD_REPO_REQUEST,
  LOAD_REPO_SUCCESS,
} from './constants';

// The initial state of the App
export const initialState = {
  username: '',
  repoURL: '',
  repoContents: '',
  error: false,
  haveRepo: false,
  loading: false,
};

const workpageReducer = (state = initialState, action) =>
  produce(state, draft => {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case CHANGE_REPO_URL:
        draft.repoURL = action.url;
        break;
      case LOAD_REPO_REQUEST:
        draft.loading = action.loading;
        break;
      case LOAD_REPO_SUCCESS:
        draft.repoContents = action.repoContents;
        break;
      case LOAD_REPO_ERROR:
        draft.error = action.error;
        break;
    }
  });

export default workpageReducer;
