import React from "react";
import { connect } from "react-redux";

import CustomButton from "components/customButton/customButton";
import CartItems from "components/cart-items/cartItems"
import { selectCartItems } from "redux/cart/cartSelector";
import "./cartDropdown.scss";

const CartDropdown = ({cartItems}) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItems key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton> GO TO CHECKOUT </CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state)
});
export default connect(mapStateToProps)(CartDropdown);
