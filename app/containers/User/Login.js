import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { push } from 'connected-react-router';

import SocialLoginButton from './socialLogin';
import { LoginSection, Loader, Wrapper } from './style';
import { receiveGoogleUserError, receiveGoogleUser } from './actions';
import LoaderSvg from './loaderSvg';

const Login = props => {
  const handleSocialLogin = googleUser => {
    // eslint-disable-next-line no-underscore-dangle
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
        <SocialLoginButton
          provider="google"
          appId="407966847096-7kk6j7finjoav32eaivjh0459g54ivbs.apps.googleusercontent.com"
          redirect="/seo"
          onLoginSuccess={handleSocialLogin}
          onLoginFailure={handleSocialLoginError}
        >
          Login with Google
        </SocialLoginButton>
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
