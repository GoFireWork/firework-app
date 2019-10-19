import { call, put } from 'redux-saga/effects';
import {
  loginFailureResponse,
  loginSuccessResponse,
  signupSuccessResponse,
  singupFailureResponse,
} from 'action/user';

import { postRequest } from 'utils/request';
// import { makeSelectGoogleId } from 'selector/user';

// export function* getUser() {
//   const googleId = yield select(makeSelectGoogleId());
//
//   try {
//     const url = `https://firework.localtunnel.me/api/user/${googleId}`;
//     const userSettings = yield call(request, url);
//     yield put(receiveUser(userSettings));
//   } catch (err) {
//     yield put(receiveUserError(err));
//   }
// }

export function* login(action) {
  try {
    try {
      const url = `http://localhost:6000/api/auth/login`;
      const response = yield call(postRequest, url, action.credentials);
      if (response.status === 200) {
        yield put(loginSuccessResponse(response.data));
      } else {
        yield put(loginFailureResponse(response.data));
      }
    } catch (err) {
      yield put(loginFailureResponse(err));
    }
  } catch (e) {
    yield put(loginFailureResponse(e));
  }
}

export function* signup(action) {
  try {
    try {
      const url = `http://localhost:6000/api/auth/signup`;
      const response = yield call(postRequest, url, action.credentials);
      if (response.status === 200) {
        yield put(signupSuccessResponse(response.data));
      } else {
        yield put(singupFailureResponse(response.data));
      }
    } catch (err) {
      yield put(singupFailureResponse(err));
    }
  } catch (e) {
    yield put(singupFailureResponse(e));
  }
}
