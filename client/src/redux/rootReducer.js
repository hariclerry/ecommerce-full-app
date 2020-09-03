import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "redux/user/userReducer";
import shopReducer from "redux/shop/shopReducer";
import cartReducer from "redux/cart/cartReducer";
import directoryReducer from "redux/directory/directoryReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  collections: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
