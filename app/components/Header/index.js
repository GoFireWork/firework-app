import React, { memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { FormattedMessage } from 'react-intl';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

import reducer from '../../containers/Login/reducer';

import saga from '../../containers/Login/saga';

import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import messages from './messages';

const key = 'user';

function Header() {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  return (
    <div>
      <NavBar>
        <div>
          <HeaderLink to="/" link>
            <FormattedMessage {...messages.home} />
          </HeaderLink>
        </div>
        <div>
          <HeaderLink to="/setting" link>
            <FormattedMessage {...messages.settings} />
          </HeaderLink>
          <HeaderLink to="/get-started">
            <FormattedMessage {...messages.getStarted} />
          </HeaderLink>
        </div>
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
