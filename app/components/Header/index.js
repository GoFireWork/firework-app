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
import reducer, { getToken } from '../../containers/Login/reducer';

import saga from '../../containers/Login/saga';

const key = 'user';
const options = [
  {
    value: '/profile',
    label: 'Signed in as',
    tag: <strong>shubh4solanki</strong>,
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

function Header(props) {
  const { token } = props;
  const [visible, setVisible] = useState(false);

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  console.log(visible);
  return (
    <div>
      <NavBar>
        {token !== null && (
          <>
            <div>
              <HeaderLink to="/">
                <FormattedMessage {...messages.workpage} />
              </HeaderLink>
              <HeaderLink to="/repositories">
                <FormattedMessage {...messages.repositories} />
              </HeaderLink>
            </div>
            <Profile onClick={() => setVisible(!visible)}>
              <img
                src="https://avatars3.githubusercontent.com/u/29801996?v=4"
                alt="profile"
              />
              <img src={dropdownIcon} alt="drop-arrow" />
            </Profile>
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
