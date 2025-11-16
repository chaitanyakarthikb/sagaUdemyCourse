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
