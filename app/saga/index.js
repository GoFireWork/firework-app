/* eslint-disable import/no-named-as-default-member */
import { takeLatest, all, takeEvery } from 'redux-saga/effects';

import UserActions from '../actionType/user';
import SettingsActions from '../actionType/seo';

import { login, signup } from './user';
import { fetchNewSettings, getUser, saveSEOSettings } from './seo';

export default function* root() {
  yield all([
    takeLatest(UserActions.LOGIN_REQUEST, login),

    takeLatest(UserActions.SIGNUP_REQUEST, signup),
    takeEvery(SettingsActions.FETCH_SEO_SETTINGS, getUser),
    takeEvery(SettingsActions.SAVE_SEO_SETTINGS, saveSEOSettings),
    takeEvery(SettingsActions.SAVE_SEO_SETTINGS, fetchNewSettings),
  ]);
}
