import React from 'react';
import PropTypes from 'prop-types';
import SocialLogin from 'react-social-login';

import Button from '../../components/Button';

const SocialButton = ({ children, triggerLogin, ...props }) => (
  <Button onClick={triggerLogin} {...props}>
    {children}
  </Button>
);

SocialButton.propTypes = {
  children: PropTypes.array,
  triggerLogin: PropTypes.func,
};

SocialButton.defaultProps = {
  children: [],
};

export default SocialLogin(SocialButton);
