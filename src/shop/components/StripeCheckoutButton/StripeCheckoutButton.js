import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


export const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_Ff9ZIdetcnfvWRX6rA1Vuf5B00CFl963Gl';

  const onToken = (token) => console.log(token);

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd"
      billingAddress
      shippingAddress
      image=""
      description={`Your total price is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  )
};
