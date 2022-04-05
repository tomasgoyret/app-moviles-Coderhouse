import axios from 'axios';
import { CREATE_LIST, SIGN_IN } from "./actionTypes";
import AsyncStorage from '@react-native-async-storage/async-storage';



const auth_uri = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCUUuOrljFuN1tckzxnm-pRrqQ_upyXkrc"

// export const createList = (listName) => {
//     return function (dispatch) {
//         return dispatch({
//             type: CREATE_LIST,
//             payload: listName
//         })
//     }
// }

export const signIn = (email, password) => {
    return async function (dispatch) {
            const response = await axios.post(auth_uri, { email: email, password: password, returnSecureToken: true })
            // if (!response.ok) {
            //     const errorResponse = await response.data;
            //     const errorID = errorResponse.error.message;
          
            //     let message = 'No se ha podido ingresar';
            //     if (errorID === 'EMAIL_EXISTS') message = 'Este email no se encuentra registrado';
          
            //     throw new error(message);
            //   }
            await AsyncStorage.setItem('@auth', response.data.email)
            
             return dispatch({
                    type: SIGN_IN,
                    payload: response.data.email
                })
    }
}

export const initAuthentication = () =>  {
    return async function (dispatch){
        const auth = await AsyncStorage.getItem('@auth')
        console.log(auth, "action auth")
        return  dispatch({
            type : SIGN_IN,
            payload: auth
        })
    }
}