import { call, put, take, takeEvery } from "redux-saga/effects";
import { DELETE_ENTRY, ERR_SETTING_ENTRIES, FETCH_ENTRIES, REMOVE_ENTRY, SET_ENTRIES } from "../constants/constants";
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

function* deleteEntrySaga({payload}){
   try {
    let apiResponse = yield call(axios.delete,`http://localhost:3001/entries/${payload}`)
    if(apiResponse && apiResponse.data){
      yield put({type:REMOVE_ENTRY,payload:apiResponse.data.id});
    }
   } catch (error) {
    yield put({type:ERR_SETTING_ENTRIES})
   }
   
}


export function* entriesWatcherSaga(){
  yield takeEvery(FETCH_ENTRIES,getEntries);
  yield takeEvery(DELETE_ENTRY,deleteEntrySaga);
}