import React from "react";

import CustomButton from "components/customButton/customButton";
import "./cartDropdown.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <CustomButton> GO TO CHECKOUT </CustomButton>
    </div>
  );
};

export default CartDropdown;
