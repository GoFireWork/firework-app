import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Sidemenu } from './Styled';

function Sidebar() {
  return (
    <Sidemenu>
      <ul>
        <li>Settings</li>
      </ul>
    </Sidemenu>
  );
}

const mapStateToProps = state => ({
  email: state.user.userDetails.login,
  loading: state.user.loading,
});

const withConnect = connect(
  mapStateToProps,
  null,
);

export default compose(
  withConnect,
  memo,
)(Sidebar);
