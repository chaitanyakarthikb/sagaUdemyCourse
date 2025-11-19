import { ADD_ENTRY, EDIT_ENTRY_REDUX, ERR_SETTING_ENTRIES, REMOVE_ENTRY, SET_ENTRIES } from "../constants/constants";

const initialState = {
  entries:[],
  isError:false,
  isLoading:true,
}
  
export const entriesReducer = (state = initialState, action) => {
  let newEntries;
  switch (action.type) {
    case ADD_ENTRY:
      return{
        ...state,
        entries:[...state.entries,action.payload]
      }
    case REMOVE_ENTRY:
      let temp = state.entries;
      newEntries = temp.filter((el) => el.id !== action.payload);
      return {
        ...state,
        entries:newEntries,
      };
    case EDIT_ENTRY_REDUX:
      let editedEntries =  state.entries.map((el) => {
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
      return {
        ...state,
        entries:editedEntries,
      }
    case SET_ENTRIES:
      return{
        ...state,
        entries:action.payload,
        isLoading:false,
      }
    case ERR_SETTING_ENTRIES:
      return{
        ...state,
        isError:true,
        isLoading:false,
      }
    default:
      return state;
  }
};
