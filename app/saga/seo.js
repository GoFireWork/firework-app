import { call, put, select } from 'redux-saga/effects';
import { makeSelectSEOSettings, receiveSEOSettings } from 'action/seo';

import { getRequest } from 'utils/request';
import { apiUrl } from '../apiUrl';
import { receiveUser, receiveUserError } from '../action/user';

export function* getUser() {
  try {
    // const googleId = yield select(makeSelectGoogleId());
    const url = `${apiUrl}user/5da5ea5ee2a493f125c571dc`;
    const user = yield call(getRequest, url);
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
    const user = yield call(getRequest, url, options);
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
