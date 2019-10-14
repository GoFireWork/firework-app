import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { push } from 'connected-react-router';

import SocialLogin from './socialButton';
import { LoginSection, LoginTitle, Loader, Wrapper } from './style';
import { receiveGoogleUserError, receiveGoogleUser } from './actions';
import LoaderSvg from './loaderSvg';

const Login = props => {
  const handleSocialLogin = googleUser => {
    const { accessToken } = googleUser._token;
    localStorage.setItem('googleAccessToken', accessToken);
    props.receiveGoogleUser(googleUser);
    props.redirect('/seo');
  };

  const handleSocialLoginError = err => {
    console.error(`social login failure ${err}`);
    props.receiveGoogleUserError(err);
  };

  return (
    <div>
      <Helmet>
        <title>FireWork</title>
        <meta name="description" content="FireWork Login" />
      </Helmet>
      {props.location.search && (
        <Wrapper>
          <Loader>
            <LoaderSvg />
            <p>Redirecting...</p>
          </Loader>
        </Wrapper>
      )}
      <LoginSection>
        <LoginTitle>Login with Google</LoginTitle>
        <SocialLogin
          provider="google"
          appId="507607644140-bjhk2581t7an53m56h8n368thv3efhkh.apps.googleusercontent.com"
          redirect="/seo"
          onLoginSuccess={handleSocialLogin}
          onLoginFailure={handleSocialLoginError}
        >
          Login with Google
        </SocialLogin>
      </LoginSection>
    </div>
  );
};

Login.propTypes = {
  location: PropTypes.object,
  redirect: PropTypes.func,
  receiveGoogleUser: PropTypes.func,
  receiveGoogleUserError: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = dispatch => ({
  receiveGoogleUser: googleUser => {
    dispatch(receiveGoogleUser(googleUser));
  },
  receiveGoogleUserError: error => {
    dispatch(receiveGoogleUserError(error));
  },
  redirect: bindActionCreators(push, dispatch),
  push,
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Login);
