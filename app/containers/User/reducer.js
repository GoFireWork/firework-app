import produce from 'immer';
import {
  RECEIVE_USER,
  LOAD_USER_REQUEST,
  LOAD_USER_ERROR,
  LOAD_USER_SUCCESS,
  LOGOUT_USER_SUCCESS,
  RECEIVE_GOOGLE_USER,
} from './constants';

export const initialState = {
  token: localStorage.getItem('googleAccessToken'),
  error: '',
  user: {},
  googleUser: {},
  isLoggedIn: false,
  email: '',
};

/* eslint-disable default-case, no-param-reassign */
const reducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case RECEIVE_GOOGLE_USER:
        // eslint-disable-next-line no-underscore-dangle
        draft.token = action.googleUser._token;
        draft.isLoggedIn = true;
        draft.googleUser = action.googleUser;
        draft.email = action.googleUser._profile.email;
        break;
      case RECEIVE_USER:
        draft.user = action.user;
        break;
      case LOAD_USER_REQUEST:
        draft.loading = true;
        break;
      case LOAD_USER_SUCCESS:
        draft.user = action.user;
        draft.loading = false;
        break;
      case LOAD_USER_ERROR:
        draft.error = action.error;
        break;
      case LOGOUT_USER_SUCCESS:
        draft.token = '';
        draft.user = {};
        draft.googleUser = {};
        draft.isLoggedIn = false;
        localStorage.removeItem('googleAccessToken');
    }
  });

export default reducer;

export const getToken = state => state.user.token;
