import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import CustomButton from "components/customButton/customButton";
import CartItems from "components/cart-items/cartItems";
import { toggleCartHidden } from "redux/cart/cartAction"
import { selectCartItems } from "redux/cart/cartSelector";
import "./cartDropdown.scss";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItems key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton onClick={() => {history.push('/checkout');
    dispatch(toggleCartHidden());}}> GO TO CHECKOUT </CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});
export default withRouter(connect(mapStateToProps)(CartDropdown))
