import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartTotal, selectCartItems } from "redux/cart/cartSelector";
import CheckoutItems from "components/checkout-items/checkoutItems";
import StripeCheckoutButton from "components/stripe-button/stripeButton";
import "./checkOut.scss";

const CheckOutPage = ({ total, cartItems }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItems key={cartItem.id} item={cartItem} />
      ))}

      {
        total <= 0 ?
          <div className="total-empty">
            <span>No Items in shopping Cart</span>
          </div> : (
            <>
              <div className="total">
                <span>TOTAL: ${total}</span>
              </div>
              <div className="test-warning">
                *Please use the following test credit card for payments*
                <br />
                4242 4242 4242 4242 - Exp: 01/25 - CVV: 123
              </div>
              <StripeCheckoutButton price={total} />
            </>
          )
      }
    </div>

  );
};

const mapStateToProps = createStructuredSelector({
  total: selectCartTotal,
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CheckOutPage);
