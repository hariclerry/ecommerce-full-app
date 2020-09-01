import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import rootReducer from "redux/rootReducer";
import rootSaga from "./rootSaga";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const  store = createStore(rootReducer, applyMiddleware(...middlewares));

// then run the saga
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default {store, persistor};
