import { createSelector } from 'reselect';

import { RECEIVE_SEO_SETTINGS, RECEIVE_SEO_SETTINGS_ERROR } from './constants';

import { initialState } from './reducer';

const selectUser = state => state.seoSettings || initialState;

export const receiveSEOSettingsError = error => ({
  type: RECEIVE_SEO_SETTINGS_ERROR,
  error,
});

export const receiveSEOSettings = seoSettings => ({
  type: RECEIVE_SEO_SETTINGS,
  seoSettings,
});

export const makeSelectSEOSettings = () =>
  createSelector(
    selectUser,
    state => state.isLoggedIn,
  );
