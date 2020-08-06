import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

// memomoize function
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((cartItemsAccumulator, cartItem) => {
      return cartItemsAccumulator + cartItem.quantity;
    }, 0)
);
