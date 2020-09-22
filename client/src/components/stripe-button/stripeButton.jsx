import React from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HCWgoDXlzB9rNQrMUDKrrjkjiaYktY8vPugw1ZORD1qTStzy2VZUAM4ZSU2bNhIQcQdcQx6rSrzrUGJvq2yWvB000KF8ctgGC";
  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token: token,
      },
    })
      .then((response) => {
        alert("succesful payment");
      })
      .catch((error) => {
        console.log("Payment Error: ", error);
        alert(
          "There was an issue with your payment! Please make sure you use the provided credit card."
        );
      });
  };
  return (
    <StripeCheckout
      label="PAY NOW"
      name="Clerry Clothing Store"
      billingAddress
      shippingAddress
      image="https://i.ibb.co/J3vnTfD/logo.png"
      description={`your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
