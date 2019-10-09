import React from 'react';
import { Elements } from 'react-stripe-elements';
import InjectedPaymentForm from './payment-form';

const Subscribe = () => (
  <Elements>
    <InjectedPaymentForm fontSize="15" />
  </Elements>
);

export default Subscribe;
