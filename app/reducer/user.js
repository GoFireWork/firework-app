import produce from 'immer';
import {
  RECEIVE_USER,
  LOAD_USER_REQUEST,
  LOAD_USER_ERROR,
  LOAD_USER_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_SUCCESS_RESPONSE,
  LOGIN_FAILURE_RESPONSE,
  LOGOUT_USER_SUCCESS,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS_RESPONSE,
  SIGNUP_FAILURE_RESPONSE,
  SOCIAL_USER_RECEIVED,
} from '../actionType/user';

export const initialState = {
  token: localStorage.getItem('token'),
  error: '',
  user: {},
  isAuthenticated: false,
  socialEmail: null,
};

/* eslint-disable default-case, no-param-reassign */
const user = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOGIN_REQUEST:
        draft.loading = true;
        break;
      case LOGIN_SUCCESS_RESPONSE:
        draft.token = action.payload.token;
        draft.user = action.payload.user;
        draft.isAuthenticated = true;
        draft.loading = false;
        draft.socialEmail = null;
        localStorage.setItem('token', action.payload.token);
        break;
      case LOGIN_FAILURE_RESPONSE:
        localStorage.removeItem('token');
        draft.token = '';
        draft.user = {};
        draft.isAuthenticated = false;
        draft.loading = false;
        draft.error = action.error;
        break;
      case SIGNUP_REQUEST:
        draft.loading = true;
        break;
      case SIGNUP_SUCCESS_RESPONSE:
        draft.token = action.payload.token;
        draft.user = action.payload.user;
        draft.isAuthenticated = true;
        draft.loading = false;
        draft.socialEmail = null;
        localStorage.setItem('token', action.payload.token);
        break;
      case SIGNUP_FAILURE_RESPONSE:
        localStorage.removeItem('token');
        draft.token = '';
        draft.user = {};
        draft.isAuthenticated = false;
        draft.loading = false;
        draft.error = action.error;
        break;
      case SOCIAL_USER_RECEIVED:
        draft.socialEmail = action.email.email;
        break;
      case RECEIVE_USER:
        draft.user = action.payload.user;
        break;
      case LOAD_USER_REQUEST:
        draft.loading = true;
        break;
      case LOAD_USER_SUCCESS:
        draft.user = action.payload.user;
        draft.loading = false;
        break;
      case LOAD_USER_ERROR:
        draft.error = action.error;
        break;
      case LOGOUT_USER_SUCCESS:
        localStorage.removeItem('token');
        draft.token = '';
        draft.user = {};
        draft.isAuthenticated = false;
        break;
    }
  });

export default user;

export const getToken = state => state.user.token;
