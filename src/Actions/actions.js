export const addEntryRedux = (payload) => {
  return {
    type: "ADD_ENTRY",
    payload,
  };
};

export const removeEntryRedux = (payload) => {
  return {
    type: "REMOVE_ENTRY",
    payload,
  };
};

export const editEntryRedux = (payload)=>{
  return{
    type:"EDIT_ENTRY_REDUX",
    payload,
  }
}

