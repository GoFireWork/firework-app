import produce from 'immer';
import {
  LOAD_FILES,
  LOAD_FILES_REQUEST,
  FILES_LOADING_ERROR,
  GIT_DIR_SETTING_ERROR,
} from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  files: {},
};

/* eslint-disable default-case, no-param-reassign */
const filesReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FILES_LOADING_ERROR:
      case GIT_DIR_SETTING_ERROR:
        draft.error = action.error;
        break;
      case LOAD_FILES_REQUEST:
        draft.loading = true;
        break;
      case LOAD_FILES:
        draft.loading = false;
        draft.files = action.files;
        break;
    }
  });

export default filesReducer;
