import { call, put, select, takeEvery } from 'redux-saga/effects';
import {
  RECEIVE_SEO_SETTINGS,
  SAVE_SEO_SETTINGS,
  FETCH_SEO_SETTINGS,
} from 'containers/SEOSettings/constants';
import {
  makeSelectSEOSettings,
  receiveSEOSettings,
  receiveSEOSettingsError,
} from 'containers/SEOSettings/actions';

import request from 'utils/request';
import { makeSelectUserId } from 'containers/User/selectors';
import apiUrl from '../../apiUrl';
import { RECEIVE_GOOGLE_USER } from '../User/constants';
import { receiveUser, receiveUserError } from '../User/actions';

export function* getUser() {
  try {
    // const googleId = yield select(makeSelectGoogleId());
    const url = `${apiUrl}user/5da5ea5ee2a493f125c571dc`;
    const user = yield call(request, url);
    yield put(receiveUser(user));
    yield put(receiveSEOSettings(user.settings));
  } catch (err) {
    yield put(receiveUserError(err));
  }
}

export function* saveSEOSettings() {
  try {
    // console.log(`saveSEOSettings Saga`);
    const settings = yield select(makeSelectSEOSettings());
    const url = `${apiUrl}user/settings/5da5ea5ee2a493f125c571dc`;
    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(settings),
    };
    const user = yield call(request, url, options);
    yield put(receiveUser(user));
  } catch (err) {
    yield put(receiveUserError(err));
  }
}

const delay = ms => new Promise(res => setTimeout(res, ms));

export function* fetchNewSettings() {
  yield delay(2000); //  wait for settings to be udpated in DB
  yield console.log(`fetching update user + settings`);
  yield getUser();
}

export default function* seo() {
  yield console.log('seo saga');
  yield takeEvery(FETCH_SEO_SETTINGS, getUser);
  yield takeEvery(SAVE_SEO_SETTINGS, saveSEOSettings);
  yield takeEvery(SAVE_SEO_SETTINGS, fetchNewSettings);
  yield takeEvery(RECEIVE_GOOGLE_USER, getUser);
}
