import {
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL,
} from './constants';

export const requestForCreateUser = data => ({
  type: CREATE_USER_REQUEST,
  data,
});

export const setCreatedUser = user => ({
  type: CREATE_USER_SUCCESS,
  user,
});

export const setCreatedUserError = error => ({
  type: CREATE_USER_FAIL,
  error,
});
