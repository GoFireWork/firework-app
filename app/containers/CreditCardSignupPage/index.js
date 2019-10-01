import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Container } from './styled';

const CreditCardSignup = () => {
  const onToken = token => {
    fetch('https://firework.localtunnel.me/payment/registration', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      response
        .json()
        .then(data => {
          console.log(`We are in business, ${data}`);
        })
        .catch(error => {
          console.log(error);
        });
    });
  };
  return (
    <Container>
      <StripeCheckout
        name="Fire Work"
        ComponentClass="div"
        panelLabel="Submit"
        currency="USD"
        stripeKey="pk_test_kZchocYXj84zPvWUXzn2C7hV00xJaXlDdw"
        local="en"
        token={onToken}
        allowRememberMe={false}
        description="Please fill your card details."
      />
    </Container>
  );
};

export default CreditCardSignup;
