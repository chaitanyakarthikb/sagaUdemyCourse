import { CLOSE_EDIT_MODAL, OPEN_EDIT_MODAL } from "../constants/constants";

const initialState = {
  isModalOpened:false,
  idForModalToShow:null,
}
export const modalReducer = (state=initialState,action)=>{
  switch(action.type){
    case OPEN_EDIT_MODAL:
      return {
        ...state,
        isModalOpened:true,
        idForModalToShow:action.payload,
      }
    case CLOSE_EDIT_MODAL:
      return{
        ...state,
        isModalOpened:false,
      }
    default:
      return state;
  }
}
