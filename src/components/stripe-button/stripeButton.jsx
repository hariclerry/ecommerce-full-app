import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HCWgoDXlzB9rNQrMUDKrrjkjiaYktY8vPugw1ZORD1qTStzy2VZUAM4ZSU2bNhIQcQdcQx6rSrzrUGJvq2yWvB000KF8ctgGC";
  const onToken = (token) => {
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      label="PAY NOW"
      name="Clerry Clothing Ltd"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
