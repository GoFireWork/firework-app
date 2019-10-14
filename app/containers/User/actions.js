import { createSelector } from 'reselect';

import {
  RECEIVE_GOOGLE_USER,
  RECEIVE_GOOGLE_USER_ERROR,
  LOGOUT_USER_SUCCESS,
} from './constants';

import { initialState } from './reducer';

const selectUser = state => state.user || initialState;

export const receiveGoogleUser = googleUser => ({
  type: RECEIVE_GOOGLE_USER,
  googleUser,
});

export const receiveGoogleUserError = error => ({
  type: RECEIVE_GOOGLE_USER_ERROR,
  error,
});

export const setLogout = () => ({
  type: LOGOUT_USER_SUCCESS,
});

export const makeSelectIsLoggedIn = () =>
  createSelector(
    selectUser,
    state => state.isLoggedIn,
  );

export const removeGoogleAccessToken = () => {
  localStorage.removeItem('googleAccessToken');
  console.log(`Logging out`);
};
