import { takeLatest, call, put } from "redux-saga/effects";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "firebase/firebaseUtil";
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "redux/shop/shopAction";
import { shopActionTypes } from "redux/actions";

export function* fetchCollections() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* onFetchCollectionsStart() {
  yield takeLatest(shopActionTypes.FETCH_COLLECTIONS_START, fetchCollections);
}
