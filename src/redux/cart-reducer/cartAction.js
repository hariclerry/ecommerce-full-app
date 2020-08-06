import { cartActionTypes } from "redux/actions/index";

export const toggleCartHidden = (user) => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addCartItem = (item) => ({
  type: cartActionTypes.ADD_CART_ITEM,
  payload: item
});
