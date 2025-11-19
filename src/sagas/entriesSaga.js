import { call, put, take, takeEvery } from "redux-saga/effects";
import { ERR_SETTING_ENTRIES, FETCH_ENTRIES, SET_ENTRIES } from "../constants/constants";
import axios from "axios";

function* getEntries(){
  let action = yield take(FETCH_ENTRIES);
  try {
    if(action){
      let apiResponseData = yield call(axios.get,'http://localhost:3001/entries')
      if(apiResponseData && apiResponseData?.data){
        yield put({type:SET_ENTRIES,payload:apiResponseData.data});
      }
    }
  } catch (error) {
     yield put({type:ERR_SETTING_ENTRIES});
  }
}


export function* entriesWatcherSaga(){
  yield takeEvery(FETCH_ENTRIES,getEntries);
}