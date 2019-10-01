import React, { memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

import { Text, Box } from 'rebass';

import NavBar from './NavBar';
import reducer from '../../containers/Login/reducer';

import saga from '../../containers/Login/saga';
import A from './A';

const key = 'user';

function Header() {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  return (
    <div>
      <NavBar>
        <>
          <div>
            <Text p={2} fontWeight="bold" color="white">
              <A href="/">FireWork</A>
            </Text>
            <Box mx="auto" />
          </div>
          <div>
            <Text p={2} fontWeight="bold" color="white">
              <A href="/get-started">Get Started</A>
            </Text>
            <Box mx="auto" />
          </div>
        </>
      </NavBar>
    </div>
  );
}

/* const mapStateToProps = state => ({
  user: getUserDetails(state),
  token: getToken(state),
});

const mapDispatchToProps = dispatch => ({
  Logout: () => {
    dispatch(setLogout());
  },
  setFetchingUser: () => {
    dispatch(setFetchingUser());
  },
}); */

const withConnect = connect(
  null,
  null,
);

export default compose(
  withConnect,
  memo,
)(Header);
