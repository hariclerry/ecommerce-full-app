import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartTotal, selectCartItems } from "redux/cart/cartSelector";
import CheckoutItems from "components/checkout-items/checkoutItems";
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

      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  total: selectCartTotal,
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CheckOutPage);
