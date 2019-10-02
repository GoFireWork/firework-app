import React, { memo, useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import PropTypes from 'prop-types';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

import { Text, Box } from 'rebass';

import NavBar from './NavBar';
import Button from '../Button';
// import HeaderLink from './HeaderLink';
// import messages from './messages';
import Dropdown from '../DropDown';
// import { Profile } from './styled';
// import dropdownIcon from './drop-down-arrow.svg';
import reducer, {
  getUserDetails,
  getToken,
} from '../../containers/Login/reducer';

import saga from '../../containers/Login/saga';
import { setLogout, setFetchingUser } from '../../containers/Login/actions';
import icon from '../../images/icon-512x512.png';

const key = 'user';

function Header(props) {
  const { user, token } = props;
  const [visible, setVisible] = useState(false);

  const options = [
    {
      value: '/profile',
      label: 'Signed in as',
      tag: <strong>{user && user.login}</strong>,
    },
    { value: '', label: '', component: <hr /> },
    { value: '/settings', label: 'Settings' },
    { value: '', component: <Button onClick={props.Logout}>Sign out</Button> },
  ];
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  if (Object.keys(user).length === 0) {
    props.setFetchingUser();
  }

  return (
    <div>
      <NavBar>
        {token && (
          <>
            <div>
              <Text p={2} fontWeight="bold" color="white">
                <img src={icon} alt="logo" height="20px" /> FireWork
              </Text>
              <Box mx="auto" />
            </div>
            {/* <Profile onClick={() => setVisible(!visible)}> */}
            {/*  <img src={user && user.avatar_url} alt="profile" /> */}
            {/*  <img src={dropdownIcon} alt="drop-arrow" /> */}
            {/* </Profile> */}
            {visible && (
              <Dropdown
                options={options}
                setVisible={setVisible}
                visible={visible}
              />
            )}
          </>
        )}
      </NavBar>
    </div>
  );
}

Header.propTypes = {
  user: PropTypes.object,
  token: PropTypes.string,
  Logout: PropTypes.func,
  setFetchingUser: PropTypes.func,
};

const mapStateToProps = state => ({
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
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Header);
