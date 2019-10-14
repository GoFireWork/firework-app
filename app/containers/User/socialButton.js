import React from 'react';
import PropTypes from 'prop-types';
import SocialLogin from 'react-social-login';

import Button from '../../components/Button';

const LoginButton = ({ children, triggerLogin, ...props }) => (
  <Button onClick={triggerLogin} {...props}>
    {children}
  </Button>
);

LoginButton.propTypes = {
  children: PropTypes.array,
  triggerLogin: PropTypes.func,
};

LoginButton.defaultProps = {
  children: [],
};

export default SocialLogin(LoginButton);
