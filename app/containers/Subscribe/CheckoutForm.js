import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import {
  injectStripe,
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
} from 'react-stripe-elements';
import './CheckoutForm.css';

import { Wrapper, ContentModal, Header } from './styled';

const CheckoutForm = props => {
  const [subSuccess, setSubSuccess] = useState(false);
  const { plan, email } = props;
  const handleSubmit = ev => {
    ev.preventDefault();
    if (props.stripe) {
      props.stripe.createToken().then(payload => {
        const stripeBody = Object.assign({}, payload, {
          plan,
          email,
        });
        fetch('https://gofirework.com/api/subscribe', {
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
          body: JSON.stringify(stripeBody),
        })
          .then(res => {
            console.log('subscription successful', res);
            setSubSuccess(true);
          })
          .catch(res => {
            console.log('stripe', res);
          });
      });
    } else {
      console.log("Stripe.js hasn't loaded yet.");
    }
  };

  const createOptions = (fontSize, padding) => ({
    style: {
      base: {
        fontSize,
        color: '#424770',
        letterSpacing: '0.025em',
        fontFamily: 'Source Code Pro, monospace',
        '::placeholder': {
          color: '#aab7c4',
        },
        padding,
      },
      invalid: {
        color: '#9e2146',
      },
    },
  });
  return subSuccess ? (
    <Redirect to="/get-started" />
  ) : (
    <ContentModal>
      <Wrapper>
        <Header>Checkout</Header>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Email</span>
            <input className="field" placeholder="john@gofirework.com" />
          </label>
          <label htmlFor="card-number">
            Card number
            <CardNumberElement
              name="card-number"
              {...createOptions(props.fontSize)}
            />
          </label>
          <label htmlFor="card-expiry">
            Expiration date
            <CardExpiryElement
              name="card-expiry"
              {...createOptions(props.fontSize)}
            />
          </label>
          <label htmlFor="card-cvc">
            CVC
            <CardCVCElement
              name="card-cvc"
              {...createOptions(props.fontSize)}
            />
          </label>
          <button type="submit">Subscribe</button>
        </form>
      </Wrapper>
    </ContentModal>
  );
};

CheckoutForm.propTypes = {
  email: PropTypes.string,
  plan: PropTypes.string,
  stripe: PropTypes.object,
  fontSize: PropTypes.string,
};

export default injectStripe(CheckoutForm);
