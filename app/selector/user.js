import { createSelector } from 'reselect';
import { initialState } from '../reducer/user';

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
    userState => userState.user.email,
  );

const makeSelectSocialEmail = () =>
  createSelector(
    selectUser,
    // eslint-disable-next-line no-underscore-dangle
    userState => userState.socialEmail,
  );

export {
  makeSelectGoogleId,
  makeSelectUserId,
  makeSelectCurrentUser,
  makeSelectSocialEmail,
};
