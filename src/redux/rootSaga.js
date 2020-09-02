import { all, call } from "redux-saga/effects";

import { onFetchCollectionsStart } from "redux/shop/shopSagas";
import { userSagas } from "redux/user/userSagas";

export default function* rootSaga() {
  yield all([call(onFetchCollectionsStart), call(userSagas),]);
}
