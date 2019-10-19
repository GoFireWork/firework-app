import { createSelector } from 'reselect';
import { initialState } from '../reducer/seo';

const selectUser = state => state.user || initialState;

const makeSelectCurrentUser = () =>
  createSelector(
    selectUser,
    userState => userState.user,
  );

const makeSelectUserId = () =>
  createSelector(
    selectUser,
    // eslint-disable-next-line no-underscore-dangle
    userState => userState._id,
  );

export { makeSelectUserId, makeSelectCurrentUser };
