import { createSelector } from "reselect";

const selectUser = (state) => state.user;

// memomoize function
export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);
