import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51H3gDRFifuD5NBMP10ANvgyB2houMQ9GhyRBIEs5zaK7Bcfka41sf9NGkujGZfF5JRO1MeLbV0HlaMqLGEJXE6mM00FFac169L";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token
      }
    }).then(response => {
      alert("Payment Successful")
    }).catch(error => {
      console.log("Payment error");
      alert(
        "There was an issue with your payment. Please be sure you use the provided credit cart."
      );
    })
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
