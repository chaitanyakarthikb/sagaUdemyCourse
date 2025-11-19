import { applyMiddleware, combineReducers, createStore } from "redux";
import { entriesReducer } from "../reducers/entriesReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import { modalReducer } from "../reducers/modalReducer";
import createSagaMiddleware from "redux-saga";
import { testSaga } from "../sagas/testSaga";
import { rootSaga } from "../sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();
const middleWares = [sagaMiddleware];
let combinedReducers = {
  entries: entriesReducer,
  modals: modalReducer,
};
export const store = createStore(
  combineReducers(combinedReducers),
  composeWithDevTools(applyMiddleware(...middleWares))
);

sagaMiddleware.run(rootSaga);