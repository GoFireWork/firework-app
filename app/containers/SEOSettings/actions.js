import { createSelector } from 'reselect';

import {
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

export const receiveSEOSettings = seoSettings => ({
  type: RECEIVE_SEO_SETTINGS,
  seoSettings,
});

export const saveSEOSettings = seoSettings => ({
  type: SAVE_SEO_SETTINGS,
  seoSettings,
});

export const makeSelectSEOSettings = () =>
  createSelector(
    selectSEOSettings,
    seoSettings => seoSettings.seoSettings,
  );
