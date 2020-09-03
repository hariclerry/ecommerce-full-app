import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

// memomoize function
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((cartItemsAccumulator, cartItem) => {
      return cartItemsAccumulator + cartItem.quantity;
    }, 0)
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((cartItemsAccumulator, cartItem) => {
      return cartItemsAccumulator + cartItem.quantity * cartItem.price;
    }, 0)
);
