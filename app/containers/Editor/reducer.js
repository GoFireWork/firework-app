import produce from 'immer';
import {
  CURRENT_FILE,
  CURRENT_FILE_REQUEST,
  CURRENT_FILE_ERROR,
  UPDATE_CURRENT_FILE_CONTENTS,
  OPEN_SEARCH_COMPONENT,
} from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  content: '',
  path: '',
  name: '',
  search: false,
};

/* eslint-disable default-case, no-param-reassign */
const reducer = (state = initialState, action) =>
  produce(state, draft => {
    console.log(action);
    switch (action.type) {
      case CURRENT_FILE_ERROR:
        draft.error = action.error;
        break;
      case CURRENT_FILE_REQUEST:
        draft.loading = true;
        break;
      case CURRENT_FILE:
        draft.loading = false;
        draft.content = action.content;
        draft.path = action.path;
        draft.name = action.name;
        break;
      case UPDATE_CURRENT_FILE_CONTENTS:
        draft.content = action.content;
        break;
      case OPEN_SEARCH_COMPONENT:
        console.log('in reducer');
        draft.search = action.value;
        break;
    }
  });

export default reducer;
