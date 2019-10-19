import { createSelector } from 'reselect';
import { initialState } from '../reducer/user';

const selectUser = state => state.user || initialState;

export const authCheck = () =>
  createSelector(
    selectUser,
    userState => userState.isAuthenticated,
  );

export const checkError = () =>
  createSelector(
    selectUser,
    userState => userState.error.message,
  );
