import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { push } from 'connected-react-router';

import SocialLogin from './socialButton';
import { LoginSection, LoginTitle, Loader, Wrapper } from './style';
import { OnLoginFails, onLoginSuccess, createUserIfNew } from './actions';
import LoaderSvg from './loaderSvg';

const Login = props => {
  const handleSocialLogin = async thirdPartyAuthUser => {
    // eslint-disable-next-line no-underscore-dangle
    const { accessToken } = thirdPartyAuthUser._token;
    localStorage.setItem('googleAccessToken', accessToken);
    // eslint-disable-next-line no-underscore-dangle
    const googleUserId = thirdPartyAuthUser._profile.id;
    const email = thirdPartyAuthUser._profile.email;
    await props.onLoginSuccess(thirdPartyAuthUser);
    // Get our user id from DB based on googleUserId

    if (accessToken) {
      const getQueryUrl = `https://firework.localtunnel.me/api/user/get/${googleUserId}`;
      const createQueryUrl = `https://firework.localtunnel.me/api/user/create/${googleUserId}`;
      const possibleNewUser = {
        email,
        thirdPartyAuthId: googleUserId,
      };
      const fireWorkUser = await fetch(createQueryUrl);
      // const fireWorkUser = await fetch(queryUrl);
      await createUserIfNew(thirdPartyAuthUser);
      props.redirect('/seo');
    }
  };

  const handleSocialLoginFailure = err => {
    console.error(`social login failure ${err}`);
    props.OnLoginFails(err);
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
          onLoginFailure={handleSocialLoginFailure}
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
  onLoginSuccess: PropTypes.func,
  OnLoginFails: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = dispatch => ({
  onLoginSuccess: token => {
    dispatch(onLoginSuccess(token));
  },
  OnLoginFails: error => {
    dispatch(OnLoginFails(error));
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
