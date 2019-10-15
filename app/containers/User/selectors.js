import { createSelector } from 'reselect';
import { initialState } from './reducer';

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
const makeSelectGoogleId = () =>
  createSelector(
    selectUser,
    // eslint-disable-next-line no-underscore-dangle
    userState => userState.googleUser._profile.id,
  );

export { makeSelectGoogleId, makeSelectUserId, makeSelectCurrentUser };
