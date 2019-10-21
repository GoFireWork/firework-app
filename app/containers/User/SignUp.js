import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { push } from 'connected-react-router';
import { signupRequest } from 'action/user';
import { authCheck, checkError } from '../../selector/auth';
import { makeSelectSocialEmail } from '../../selector/user';
import './style.css';
import { LoginSection, Loader, Wrapper } from './style';
import LoaderSvg from './loaderSvg';

const SignUp = props => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [passwordError, setPasswordError] = useState('');

  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const submitHandler = event => {
    event.preventDefault();
    if (values.password.length < 6) {
      setPasswordError('Length of password should be over 6');
      return;
    }
    if (values.password !== values.confirmPassword) {
      setPasswordError('Please confirm correct password.');
      return;
    }
    props.signupRequest({
      email: values.email,
      password: values.password,
    });
  };

  if (props.isAuthenticated) {
    props.redirect('/seo');
  }

  useEffect(() => {
    if (props.socialEmail) {
      setValues({ ...values, email: props.socialEmail });
    }
  });

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
                  <div className="form-group col-md-6">
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
                  <div className="form-group col-md-6">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm Password *"
                      name="confirmPassword"
                      value={values.confirmPassword}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <h4 className="passwordError">{passwordError}</h4>
                <h6 className="passwordError">{props.errorMessage}</h6>
                <button type="submit" className="btnSubmit align-self-center">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </LoginSection>
    </div>
  );
};

SignUp.propTypes = {
  location: PropTypes.object,
  signupRequest: PropTypes.func,
  redirect: PropTypes.func,
  errorMessage: PropTypes.string,
  isAuthenticated: PropTypes.bool,
  socialEmail: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  isAuthenticated: authCheck(),
  errorMessage: checkError(),
  socialEmail: makeSelectSocialEmail(),
});

const mapDispatchToProps = dispatch => ({
  signupRequest: credentials => {
    dispatch(signupRequest(credentials));
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
)(SignUp);
