import { combineReducers, createStore } from "redux";
import { entriesReducer } from "../reducers/entriesReducer";


let combinedReducers = {
  entries:entriesReducer,
}
export const store = createStore(combineReducers(combinedReducers));

