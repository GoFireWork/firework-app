/* eslint-disable no-underscore-dangle */
import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { compose, bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { push } from 'connected-react-router';
import { loginRequest, socialUserReceived } from 'action/user';
import { authCheck } from '../../selector/auth';
import SocialLoginButton from './socialLogin';
import './style.css';
import { LoginSection, Loader, Wrapper } from './style';
import LoaderSvg from './loaderSvg';
import { makeSelectSocialEmail } from '../../selector/user';

const Login = props => {
  const handleSocialLogin = socialUser => {
    // eslint-disable-next-line no-underscore-dangle
    props.socialUserReceived({
      email: socialUser._profile.email,
    });
    props.loginRequest({
      email: socialUser._profile.email,
      social: true,
    });
    console.log(`redirecting`);
    props.redirect('/seo');
  };

  const handleSocialLoginError = err => {
    console.error(`social login failure ${err}`);
  };

  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const submitHandler = event => {
    event.preventDefault();
    props.loginRequest({
      email: values.email,
      password: values.password,
    });
  };

  if (props.isAuthenticated) {
    console.log(`redirecting to seo`);
    props.redirect('/seo');
  }

  if (!props.isAuthenticated && props.socialEmail) {
    props.redirect('/signup');
  }

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
        <div className="container register-form">
          <div className="form">
            <form onSubmit={submitHandler}>
              <div className="form-content">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Email *"
                    name="email"
                    value={values.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="row">
                  <div className="form-group col-md-12">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Your Password *"
                      name="password"
                      value={values.password}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <button type="submit" className="btnSubmit align-self-center">
                  Log In
                </button>
                <div className="row">
                  <div className="form-group col-md-4">
                    <SocialLoginButton
                      provider="google"
                      appId="407966847096-7kk6j7finjoav32eaivjh0459g54ivbs.apps.googleusercontent.com"
                      redirect="/seo"
                      onLoginSuccess={handleSocialLogin}
                      onLoginFailure={handleSocialLoginError}
                    >
                      Login with Google
                    </SocialLoginButton>
                  </div>
                  <div className="form-group col-md-4">
                    <SocialLoginButton
                      provider="facebook"
                      appId="406782833329790"
                      redirect="/seo"
                      onLoginSuccess={handleSocialLogin}
                      onLoginFailure={handleSocialLoginError}
                    >
                      Login with Facebook
                    </SocialLoginButton>
                  </div>
                  <div className="form-group col-md-4">
                    <SocialLoginButton
                      provider="amazon"
                      appId="amzn1.application-oa2-client.9ccf20a1f3cf4730a7a83e56203869c7"
                      redirect="/seo"
                      onLoginSuccess={handleSocialLogin}
                      onLoginFailure={handleSocialLoginError}
                    >
                      Login with Amazon
                    </SocialLoginButton>
                  </div>
                  <div className="form-group col-md-12 addAccountButton">
                    <Link to="/signup">
                      <span>Sign Up</span>
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </LoginSection>
    </div>
  );
};

Login.propTypes = {
  location: PropTypes.object,
  redirect: PropTypes.func,
  loginRequest: PropTypes.func,
  socialUserReceived: PropTypes.func,
  isAuthenticated: PropTypes.bool,
  socialEmail: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  isAuthenticated: authCheck(),
  socialEmail: makeSelectSocialEmail(),
});

const mapDispatchToProps = dispatch => ({
  loginRequest: socialUser => {
    dispatch(loginRequest(socialUser));
  },
  socialUserReceived: email => {
    dispatch(socialUserReceived(email));
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
