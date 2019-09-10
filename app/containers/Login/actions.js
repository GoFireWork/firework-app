import { LOGIN_SUCCESS, LOGIN_FAILS } from './constants';

export const onLoginSuccess = token => ({
  type: LOGIN_SUCCESS,
  token,
});

export const OnLoginFails = error => ({
  type: LOGIN_FAILS,
  error,
});
