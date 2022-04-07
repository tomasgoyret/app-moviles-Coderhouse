import { GET_ALL_TASKS, LOG_OUT, SIGN_IN } from "./actionTypes";

const initialState = {
  auth: "",
  misTareas: [],
  };
  //const auth = await AsyncStorage.getItem('@auth')
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_ALL_TASKS:
        let tareas = []
         for ( let key in action.payload ) {
           if( action.payload[key]["user"] == state.auth) {
             let obj = {
               id: key,
               ...action.payload[key]
             }
            tareas.push(obj)
           }
            }
        return {
          ...state,
          misTareas: tareas
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