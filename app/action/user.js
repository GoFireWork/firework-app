import {
  RECEIVE_USER,
  RECEIVE_USER_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS_RESPONSE,
  LOGIN_FAILURE_RESPONSE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS_RESPONSE,
  SIGNUP_FAILURE_RESPONSE,
  SOCIAL_SIGNUP_REQUEST,
  LOGOUT_USER_SUCCESS,
  SOCIAL_USER_RECEIVED,
} from '../actionType/user';

export const loginRequest = credentials => ({
  type: LOGIN_REQUEST,
  credentials,
});

export const loginSuccessResponse = payload => ({
  type: LOGIN_SUCCESS_RESPONSE,
  payload,
});

export const loginFailureResponse = error => ({
  type: LOGIN_FAILURE_RESPONSE,
  error,
});

export const signupRequest = credentials => ({
  type: SIGNUP_REQUEST,
  credentials,
});

export const socialSignupRequest = () => ({
  type: SOCIAL_SIGNUP_REQUEST,
});

export const signupSuccessResponse = payload => ({
  type: SIGNUP_SUCCESS_RESPONSE,
  payload,
});

export const singupFailureResponse = error => ({
  type: SIGNUP_FAILURE_RESPONSE,
  error,
});

export const socialUserReceived = email => ({
  type: SOCIAL_USER_RECEIVED,
  email,
});

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user,
});

export const receiveUserError = error => ({
  type: RECEIVE_USER_ERROR,
  error,
});

export const setLogout = () => ({
  type: LOGOUT_USER_SUCCESS,
});

export const removeToken = () => {
  localStorage.removeItem('token');
};
