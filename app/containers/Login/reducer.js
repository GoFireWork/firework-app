import produce from 'immer';
import { LOGIN_SUCCESS, LOGIN_FAILS } from './constants';

// The initial state of the App
export const initialState = {
  token: localStorage.getItem('token'),
  error: '',
};

/* eslint-disable default-case, no-param-reassign */
const reducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOGIN_SUCCESS:
        draft.token = action.token;
        break;
      case LOGIN_FAILS:
        draft.error = action.error;
        break;
    }
  });

export default reducer;

export const getToken = state => state.user.token;
