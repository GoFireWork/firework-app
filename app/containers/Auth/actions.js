import { createSelector } from 'reselect';

import {
  LOGIN_SUCCESS,
  LOGIN_FAILS,
  LOAD_USER_REQUEST,
  LOAD_USER_ERROR,
  LOAD_USER_SUCCESS,
  LOGOUT_USER_SUCCESS,
} from './constants';

import { initialState } from './reducer';

const selectUser = state => state.user || initialState;

export const onLoginSuccess = user => ({
  type: LOGIN_SUCCESS,
  user,
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

export const setLogout = () => ({
  type: LOGOUT_USER_SUCCESS,
});

export const createUserIfNew = async user => {
  const saveUserUrl = `https://firework.localtunnel.me/api/user/create`;
  await fetch(saveUserUrl, user);
};

export const makeSelectIsLoggedIn = () =>
  createSelector(
    selectUser,
    state => state.isLoggedIn,
  );

export const logout = () => {
  localStorage.removeItem('googleAccessToken');
  console.log(`Logging out`);
};
