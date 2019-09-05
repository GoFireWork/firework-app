import produce from 'immer';
import { OPEN_FILE, OPEN_FILE_REQUEST, OPEN_FILE_ERROR } from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  content: '',
};

/* eslint-disable default-case, no-param-reassign */
const reducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case OPEN_FILE_ERROR:
        draft.error = action.error;
        break;
      case OPEN_FILE_REQUEST:
        draft.loading = true;
        break;
      case OPEN_FILE:
        draft.loading = false;
        console.log(action);
        draft.content = action.content;
        break;
    }
  });

export default reducer;
