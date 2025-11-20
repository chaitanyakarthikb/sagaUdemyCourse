import { entriesWatcherSaga } from "./entriesSaga";
import { dummySaga, testSaga } from "./testSaga";
import { all } from "redux-saga/effects";
export function* rootSaga(){
  yield all([  
    entriesWatcherSaga()
  ])
}