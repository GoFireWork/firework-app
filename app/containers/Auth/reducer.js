import produce from 'immer';
import {
  LOGIN_SUCCESS,
  LOGIN_FAILS,
  LOAD_USER_REQUEST,
  LOAD_USER_ERROR,
  LOAD_USER_SUCCESS,
  LOGOUT_USER_SUCCESS,
} from './constants';

// The initial state of the App
export const initialState = {
  token: localStorage.getItem('token'),
  error: '',
  userDetails: {},
  isLoggedIn: false,
};

/* eslint-disable default-case, no-param-reassign */
const reducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOGIN_SUCCESS:
        // eslint-disable-next-line no-underscore-dangle
        draft.token = action.user._token;
        draft.isLoggedIn = true;
        draft.userDetails = action.user;
        break;
      case LOGIN_FAILS:
        draft.error = action.error;
        break;
      case LOAD_USER_REQUEST:
        draft.loading = true;
        break;
      case LOAD_USER_SUCCESS:
        draft.userDetails = action.user;
        draft.loading = false;
        break;
      case LOAD_USER_ERROR:
        draft.error = action.error;
        break;
      case LOGOUT_USER_SUCCESS:
        draft.token = '';
        draft.userDetails = {};
        draft.isLoggedIn = false;
        localStorage.removeItem('googleAccessToken');
    }
  });

export default reducer;

export const getToken = state => state.user.token;

export const getUserDetails = state => state.user.userDetails;
