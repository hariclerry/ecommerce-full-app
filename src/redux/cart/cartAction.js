import { cartActionTypes } from "redux/actions";

export const toggleCartHidden = (user) => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addCartItem = (item) => ({
  type: cartActionTypes.ADD_CART_ITEM,
  payload: item,
});

export const clearItemFromCart = (item) => ({
  type: cartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});

export const removeItem = (item) => ({
  type: cartActionTypes.REMOVE_ITEM_FROM_CART,
  payload: item,
});
