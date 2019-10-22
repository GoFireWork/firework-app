import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { FormattedMessage } from 'react-intl';

import { setLogout } from '../../action/user';
import { authCheck } from '../../selector/auth';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import NavLinks from './NavLinks';
import messages from './messages';

const Header = props => {
  const { isAuthenticated, logout } = props;
  console.log(`isAuthenticated ${isAuthenticated}`);

  return (
    <div>
      <NavBar>
        <HeaderLink to="/">
          <FormattedMessage {...messages.brand} />
        </HeaderLink>
        <NavLinks>
          {isAuthenticated ? (
            <HeaderLink to="/seo">
              <FormattedMessage {...messages.seo} />
            </HeaderLink>
          ) : (
            <HeaderLink to="/pricing">
              <FormattedMessage {...messages.pricing} />
            </HeaderLink>
          )}

          {isAuthenticated ? (
            <HeaderLink to="/" type="button" onClick={logout}>
              <FormattedMessage {...messages.logout} />
            </HeaderLink>
          ) : (
            <HeaderLink to="/login">
              <FormattedMessage {...messages.login} />
            </HeaderLink>
          )}
        </NavLinks>
      </NavBar>
    </div>
  );
};

Header.propTypes = {
  isAuthenticated: PropTypes.bool,
  logout: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  isAuthenticated: authCheck(),
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
