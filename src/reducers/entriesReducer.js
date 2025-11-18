const initialEntries = [
    {
      id: 1,
      description: "This is my First entry",
      isExpense: true,
      value: 1234,
    },
    {
      id: 2,
      description: "This is my Second entry",
      isExpense: true,
      value: 665,
    },
    {
      id: 3,
      description: "This is my Third entry",
      isExpense: false,
      value: 872.9,
    },
    {
      id: 4,
      description: "This is my Fourth entry",
      isExpense: false,
      value: 982,
    },
    {
      id: 5,
      description: "This is my Sixth entry",
      isExpense: true,
      value: 237.8,
    },
    {
      id: 6,
      description: "This is my Seventh entry",
      isExpense: false,
      value: 789.63,
    },
  ];
  
export const entriesReducer = (state = initialEntries, action) => {
  let newEntries;
  switch (action.type) {
    case "ADD_ENTRY":
      newEntries = [...state, { ...action.payload }];
      return newEntries;
    case "REMOVE_ENTRY":
      newEntries = state.filter((el) => el.id !== action.payload);
      return newEntries;
    case "EDIT_ENTRY_REDUX":
      return state.map((el) => {
        if (el.id === action.payload.id) {
          return {
            ...el, 
            description: action.payload.description,
            isExpense: action.payload.isExpense,
            value: action.payload.value,
          };
        }
        return el; 
      });
    default:
      return state;
  }
};
