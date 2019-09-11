import {
  LOGIN_SUCCESS,
  LOGIN_FAILS,
  LOAD_USER_REQUEST,
  LOAD_USER_ERROR,
  LOAD_USER_SUCCESS,
} from './constants';

export const onLoginSuccess = token => ({
  type: LOGIN_SUCCESS,
  token,
});

export const OnLoginFails = error => ({
  type: LOGIN_FAILS,
  error,
});

export const setUserDetails = user => ({
  type: LOAD_USER_SUCCESS,
  user,
});
export const setFetchingUser = fetching => ({
  type: LOAD_USER_REQUEST,
  fetching,
});

export const setFetchingUserError = error => ({
  type: LOAD_USER_ERROR,
  error,
});
