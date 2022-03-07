import { CREATE_LIST } from "./actionTypes";

const initialState = {
    list: [{
        name : "cosas para hacer"
    }],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_LIST:
        state.list.push(action.payload)
        return {
          ...state,
        };
      default:
        return state;
    }
  }
  
  export default rootReducer;