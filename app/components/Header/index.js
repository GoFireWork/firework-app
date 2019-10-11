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
import NavLinks from './NavLinks';
import messages from './messages';

const key = 'user';

function Header() {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  return (
    <div>
      <NavBar>
        <HeaderLink to="/">
          <FormattedMessage {...messages.brand} />
        </HeaderLink>
        <NavLinks>
          <HeaderLink to="/seo">
            <FormattedMessage {...messages.seo} />
          </HeaderLink>
          <HeaderLink to="/pricing">
            <FormattedMessage {...messages.pricing} />
          </HeaderLink>
          {/* <HeaderLink to="/get-started"> */}
          {/*  <FormattedMessage {...messages.getStarted} /> */}
          {/* </HeaderLink> */}
        </NavLinks>
      </NavBar>
    </div>
  );
}

const withConnect = connect(
  null,
  null,
);

export default compose(
  withConnect,
  memo,
)(Header);
