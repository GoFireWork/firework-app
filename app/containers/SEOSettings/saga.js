import { call, put, select, takeLatest } from 'redux-saga/effects';
import { RECEIVE_SEO_SETTINGS } from 'containers/SEOSettings/constants';
import {
  receiveSEOSettings,
  receiveSEOSettingsError,
} from 'containers/SEOSettings/actions';

import request from 'utils/request';
import { makeSelectUserId } from 'containers/User/selectors';

export function* getSEOSettings() {
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

export default function* userSettings() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(RECEIVE_SEO_SETTINGS, getSEOSettings);
}
