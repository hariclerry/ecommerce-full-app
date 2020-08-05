import { combineReducers } from "redux";

import userReducer from "redux/user-reducer/userReducer";

export default combineReducers({
  user: userReducer,
});
