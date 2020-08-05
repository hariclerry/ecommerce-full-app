import { cartActionTypes } from "redux/actions/index";

export const toggleCartHidden = (user) => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN,
});
