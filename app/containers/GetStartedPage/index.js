import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';

import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

import Button from 'components/Button';

import { Wrapper } from './Styled';
import { requestForCreateUser } from './actions';
import reducer from '../Login/reducer';
import saga from './saga';

const key = 'user';

export const GetStarted = props => {
  const [url, setUrl] = useState('');
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  function click() {
    props.createUser({ url });
  }

  return (
    <Wrapper>
      <Helmet>
        <title>FireWork</title>
        <meta name="description" content="FireWork" />
      </Helmet>
      <input
        placeholder="Your website url"
        onChange={e => setUrl(e.target.value)}
      />
      <Button onClick={click}>Get Started</Button>
    </Wrapper>
  );
};

GetStarted.propTypes = {
  createUser: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  createUser: user => {
    dispatch(requestForCreateUser(user));
  },
});

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(GetStarted);
