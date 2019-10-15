import React from 'react';
import PropTypes from 'prop-types';
import SocialLogin from 'react-social-login';

import Button from '../../components/Button';

const SocialLoginButton = ({ children, triggerLogin, ...props }) => (
  <Button onClick={triggerLogin} {...props}>
    {children}
  </Button>
);

SocialLoginButton.propTypes = {
  children: PropTypes.array,
  triggerLogin: PropTypes.func,
};

SocialLoginButton.defaultProps = {
  children: [],
};

export default SocialLogin(SocialLoginButton);
