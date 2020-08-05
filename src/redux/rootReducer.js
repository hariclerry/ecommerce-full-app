import { combineReducers } from "redux";

import userReducer from "redux/user-reducer/userReducer";
import cartReducer from "redux/cart-reducer/cartReducer"

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
