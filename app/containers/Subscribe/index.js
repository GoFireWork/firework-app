import React from 'react';
import { withRouter } from 'react-router-dom';
import { Elements } from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';

const Subscribe = withRouter(({ history }) => (
  <Elements>
    <CheckoutForm plan={history.location.state.plan} fontSize="15" />
  </Elements>
));

export default Subscribe;
