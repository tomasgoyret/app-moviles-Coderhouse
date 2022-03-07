import { CREATE_LIST } from "./actionTypes";

const initialState = {
    list: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_LIST:
        return {
          ...state,
          list : action.payload
        };
      default:
        return state;
    }
  }
  
  export default rootReducer;