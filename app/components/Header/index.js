import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { FormattedMessage } from 'react-intl';

import { useInjectReducer } from 'utils/injectReducer';

import reducer from '../../containers/User/reducer';

import { makeSelectIsLoggedIn, setLogout } from '../../containers/User/actions';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import NavLinks from './NavLinks';
import messages from './messages';
import './styles.css';

const key = 'user';

const Header = props => {
  const { isLoggedIn, logout } = props;
  useInjectReducer({ key, reducer });

  return (
    <div>
      <NavBar>
        <HeaderLink to="/">
          <FormattedMessage {...messages.brand} />
        </HeaderLink>
        <NavLinks>
          {isLoggedIn ? (
            <HeaderLink to="/seo">
              <FormattedMessage {...messages.seo} />
            </HeaderLink>
          ) : (
            <HeaderLink to="/pricing">
              <FormattedMessage {...messages.pricing} />
            </HeaderLink>
          )}

          {isLoggedIn ? (
            <HeaderLink to="/" onClick={logout}>
              <FormattedMessage {...messages.logout} />
            </HeaderLink>
          ) : (
            <HeaderLink to="/login">
              <FormattedMessage {...messages.login} />
            </HeaderLink>
          )}
          <HeaderLink to="/privacy">Privacy</HeaderLink>
          <HeaderLink to="/termsofservice">Terms</HeaderLink>
        </NavLinks>
      </NavBar>
    </div>
  );
};

Header.propTypes = {
  isLoggedIn: PropTypes.bool,
  logout: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  isLoggedIn: makeSelectIsLoggedIn(),
});

export const mapDispatchToProps = dispatch => ({
  logout: () => {
    dispatch(setLogout());
  },
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Header);
