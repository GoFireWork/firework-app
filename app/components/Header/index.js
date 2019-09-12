import React, { memo, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';

import PropTypes from 'prop-types';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import messages from './messages';
import Dropdown from '../DropDown';
import { Profile } from './styled';
import dropdownIcon from './drop-down-arrow.svg';
import reducer, { getUserDetails } from '../../containers/Login/reducer';

import saga from '../../containers/Login/saga';

const key = 'user';

function Header(props) {
  const { user } = props;
  const [visible, setVisible] = useState(false);
  const options = [
    {
      value: '/profile',
      label: 'Signed in as',
      tag: <strong>{user.login}</strong>,
    },
    { value: '', label: '', component: <hr /> },
    { value: '/profile', label: 'Your profile' },
    { value: '/repositories', label: 'Your repositories' },
    { value: '/project', label: 'Your projects' },
    { value: '/stars', label: 'Your stars' },
    { value: '/gits', label: 'Your gists' },
    { value: '', label: '', component: <hr />, className: 'asd' },
    { value: '/help', label: 'Help' },
    { value: '/settings', label: 'Settings' },
    { value: '/signout', label: 'Sign out' },
  ];
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  console.log(visible);
  return (
    <div>
      <NavBar>
        <div>
          <HeaderLink to="/">
            <FormattedMessage {...messages.workpage} />
          </HeaderLink>
          <HeaderLink to="/repositories">
            <FormattedMessage {...messages.repositories} />
          </HeaderLink>
        </div>
        <Profile onClick={() => setVisible(!visible)}>
          <img src={user.avatar_url} alt="profile" />
          <img src={dropdownIcon} alt="drop-arrow" />
        </Profile>
        {visible && (
          <Dropdown
            options={options}
            setVisible={setVisible}
            visible={visible}
          />
        )}
      </NavBar>
    </div>
  );
}

Header.propTypes = {
  user: PropTypes.object,
};

const mapStateToProps = state => ({
  user: getUserDetails(state),
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
