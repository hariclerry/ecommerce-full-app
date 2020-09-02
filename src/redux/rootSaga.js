import { all, call } from "redux-saga/effects";

import { shopSagas } from "redux/shop/shopSagas";
import { userSagas } from "redux/user/userSagas";
import { cartSagas } from "redux/cart/cartSagas";

export default function* rootSaga() {
  yield all([call(shopSagas), call(userSagas), call(cartSagas)]);
}
