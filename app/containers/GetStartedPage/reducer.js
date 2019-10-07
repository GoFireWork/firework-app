import produce from 'immer';
import { CREATE_USER_SUCCESS, CREATE_USER_FAIL } from './constants';

// The initial state of the App
export const initialState = {
  domain: '',
  error: '',
};

/* eslint-disable default-case, no-param-reassign */
const reducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CREATE_USER_SUCCESS:
        draft.domain = action.user.domain;
        break;
      case CREATE_USER_FAIL:
        draft.error = action.error;
        break;
    }
  });

export default reducer;
