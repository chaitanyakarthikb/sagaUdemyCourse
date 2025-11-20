import { call, put, take, takeEvery, takeLatest } from "redux-saga/effects";
import { ADD_ENTRY, ADD_ENTRY_ITEM, DELETE_ENTRY, ERR_SETTING_ENTRIES, FETCH_ENTRIES, REMOVE_ENTRY, SET_ENTRIES } from "../constants/constants";
import axios from "axios";

function* getEntries(){
  let action = yield take(FETCH_ENTRIES);
  try {
    if(action){
      let apiResponseData = yield call(axios.get,'http://localhost:3001/entries')
      console.log("=========APIRESPONSEDATA========",apiResponseData)
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

function* addEntrySaga({payload}){
  try{
    let apiResponse = yield call(axios.post,'http://localhost:3001/entries',payload);
    console.log("=========apiResponse",apiResponse);
    if(apiResponse && apiResponse.data){
      yield put({type:ADD_ENTRY,payload:apiResponse.data});
    }
  }catch(err){
    yield put({type:ERR_SETTING_ENTRIES})
  }
}


export function* entriesWatcherSaga(){
  yield takeEvery(FETCH_ENTRIES,getEntries);
  yield takeLatest(DELETE_ENTRY,deleteEntrySaga);
  yield takeLatest(ADD_ENTRY_ITEM,addEntrySaga);
}