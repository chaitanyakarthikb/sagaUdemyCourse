import { combineReducers, createStore } from "redux";
import { entriesReducer } from "../reducers/entriesReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import { modalReducer } from "../reducers/modalReducer";

let combinedReducers = {
  entries:entriesReducer,
  modals:modalReducer,
}
export const store = createStore(combineReducers(combinedReducers),composeWithDevTools());

