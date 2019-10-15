import { call, put, select, takeEvery } from 'redux-saga/effects';
import {
  RECEIVE_SEO_SETTINGS,
  SAVE_SEO_SETTINGS,
} from 'containers/SEOSettings/constants';
import {
  makeSelectSEOSettings,
  receiveSEOSettings,
  receiveSEOSettingsError,
} from 'containers/SEOSettings/actions';

import request from 'utils/request';
import {
  makeSelectGoogleId,
  makeSelectUserId,
} from 'containers/User/selectors';
import { RECEIVE_GOOGLE_USER } from '../User/constants';
import { receiveUser, receiveUserError } from '../User/actions';

export function* getSEOSettings() {
  console.log(`getSEOSettings`);
  const userId = yield select(makeSelectUserId());

  try {
    if (userId) {
      const settingsUrl = `https://firework.localtunnel.me/api/user/settings/${userId}`;
      const userSettings = yield call(request, settingsUrl);
      console.log(`userSettings: ${userSettings}`);
      yield put(receiveSEOSettings(userSettings));
    }
  } catch (err) {
    yield put(receiveSEOSettingsError(err));
  }
}

export function* getUser() {
  console.log(`getting user`);
  try {
    const googleId = yield select(makeSelectGoogleId());
    const url = `https://firework.localtunnel.me/api/user/google/${googleId}`;
    const user = yield call(request, url);
    console.log(`user: ${user}`);
    yield put(receiveUser(user));
  } catch (err) {
    yield put(receiveUserError(err));
  }
}

export function* saveSEOSettings() {
  try {
    console.log(`saving SEO Settings Saga`);
    const settings = yield select(makeSelectSEOSettings());
    console.table('saveSEOSettings', settings);
    const url = `https://firework.localtunnel.me/api/user/settings/5da513c419360673e3d5e24d`;
    const user = yield call(request, url, settings);
    console.log(`user: ${user}`);
    yield put(receiveUser(user));
  } catch (err) {
    yield put(receiveUserError(err));
  }
}

export default function* seo() {
  yield console.log('seo saga');
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeEvery(SAVE_SEO_SETTINGS, saveSEOSettings);
  yield takeEvery(RECEIVE_GOOGLE_USER, getUser);
  yield takeEvery(RECEIVE_SEO_SETTINGS, getSEOSettings);
}
