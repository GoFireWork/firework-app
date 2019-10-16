import { createSelector } from 'reselect';

import {
  FETCH_SEO_SETTINGS,
  RECEIVE_SEO_SETTINGS,
  RECEIVE_SEO_SETTINGS_ERROR,
  SAVE_SEO_SETTINGS,
} from './constants';

import { initialState } from './reducer';

const selectSEOSettings = state => state.seoSettings || initialState;

export const receiveSEOSettingsError = error => ({
  type: RECEIVE_SEO_SETTINGS_ERROR,
  error,
});

export const receiveSEOSettings = settings => ({
  type: RECEIVE_SEO_SETTINGS,
  settings,
});

export const saveSEOSettings = settings => ({
  type: SAVE_SEO_SETTINGS,
  settings,
});

export const fetchSEOSettings = () => ({
  type: FETCH_SEO_SETTINGS,
});

export const makeSelectSEOSettings = () =>
  createSelector(
    selectSEOSettings,
    seoSettings => seoSettings.settings,
  );
