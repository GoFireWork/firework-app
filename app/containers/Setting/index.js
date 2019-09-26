import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Card from 'components/Card';
import Button from 'components/Button';
import Loading from 'components/LoadingIndicator';
import Sidebar from './sidebar';
import { Wrapper, Workspace, Form, Row } from './Style';

function Setting(props) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  useEffect(() => {
    if (props.email) {
      setEmail(props.email);
    }
  }, [props.email]);

  const validateEmail = value => {
    /* eslint no-control-regex: "error" */
    const reg = new RegExp(
      /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/,
    );
    if (reg.test(value) === false) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const inputHandler = e => {
    e.preventDefault();
    console.log(e.target.value);
    setEmail(e.target.value);
    validateEmail(e.target.value);
  };
  const content = (
    <Form>
      <Row>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          placeholder="Email"
          defaultValue={email}
          onChange={inputHandler}
          onBlur={e => validateEmail(e.target.value)}
        />
      </Row>
      <Row>{error ? <p>Invalid Email Address</p> : <span>.</span>}</Row>
      <Row>
        <input type="radio" name="payment" defaultChecked />
        <label htmlFor="payment">PayPal</label>
      </Row>
      <Button disabled={!email.length || error}>Payment</Button>
    </Form>
  );
  return props.loading ? (
    <Wrapper>
      <Sidebar />
      <Workspace>
        <Loading />
      </Workspace>
    </Wrapper>
  ) : (
    <Wrapper>
      <Sidebar />
      <Workspace>
        <Card width="350px" height="230px" title="Payment" content={content} />
      </Workspace>
    </Wrapper>
  );
}

Setting.propTypes = {
  email: PropTypes.string,
  loading: PropTypes.bool,
};

const mapStateToProps = state => ({
  email: state.user.userDetails.email,
  loading: state.user.loading,
});

const withConnect = connect(
  mapStateToProps,
  null,
);

export default compose(
  withConnect,
  memo,
)(Setting);
