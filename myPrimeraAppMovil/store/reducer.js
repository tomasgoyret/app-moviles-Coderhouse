import { CREATE_LIST, LOG_OUT, SIGN_IN } from "./actionTypes";

const initialState = {
    list: [],
    auth: ""
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_LIST:
        state.list.push(action.payload)
        return {
          ...state,
        };
      case SIGN_IN:
        return {
          ...state,
          auth: action.payload
        };
      case LOG_OUT:
        return {
          ...state,
          auth: ""
        }
      default:
        return state;
    }
  }
  
  export default rootReducer;