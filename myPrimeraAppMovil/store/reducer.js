import AsyncStorage from "@react-native-async-storage/async-storage";
import { GET_ALL_TASKS, LOG_OUT, SIGN_IN } from "./actionTypes";

const initialState = {
  auth: "",
  misTareas: [],
  };
  //const auth = await AsyncStorage.getItem('@auth')
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_ALL_TASKS:
         for ( let key in action.payload ) {
           if( action.payload[key]["user"] == state.auth) {
            state.misTareas.push(action.payload[key]["task"])
           }
            }
            console.log("Se cargaron tareas de usuario")
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