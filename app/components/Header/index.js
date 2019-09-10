import React, { memo } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';

import PropTypes from 'prop-types';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import messages from './messages';
import { getToken } from '../../containers/Login/reducer';

function Header(props) {
  const { token } = props;
  return (
    <div>
      <NavBar>
        {/* <HeaderLink to="/"> */}
        {/*  <FormattedMessage {...messages.home} /> */}
        {/* </HeaderLink> */}

        {token === null ? (
          <HeaderLink to="/login">
            <FormattedMessage {...messages.login} />
          </HeaderLink>
        ) : (
          <>
            <HeaderLink to="/">
              <FormattedMessage {...messages.workpage} />
            </HeaderLink>
            <HeaderLink to="/repositories">
              <FormattedMessage {...messages.repositories} />
            </HeaderLink>
          </>
        )}
      </NavBar>
    </div>
  );
}

Header.propTypes = {
  token: PropTypes.string,
};

const mapStateToProps = state => ({
  token: getToken(state),
});

const mapDispatchToProps = () => ({});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Header);
