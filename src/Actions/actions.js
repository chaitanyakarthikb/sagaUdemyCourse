import { ADD_ENTRY_ITEM, EDIT_ENTRY_REDUX, REMOVE_ENTRY } from "../constants/constants";

export const addEntryRedux = (payload) => {
  return {
    type: ADD_ENTRY_ITEM,
    payload,
  };
};

export const removeEntryRedux = (payload) => {
  return {
    type: REMOVE_ENTRY,
    payload,
  };
};

export const editEntryRedux = (payload)=>{
  return{
    type:EDIT_ENTRY_REDUX,
    payload,
  }
}

