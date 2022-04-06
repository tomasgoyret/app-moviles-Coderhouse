import axios from 'axios';
import { CREATE_LIST, LOG_OUT, SIGN_IN } from "./actionTypes";
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
        try {
            const response = await axios.post(auth_uri, { email: email, password: password, returnSecureToken: true })
            await AsyncStorage.setItem('@auth', response.data.email)
            return dispatch({
                type: SIGN_IN,
                payload: response.data.email
            })
        } catch (err) {
            console.log(err.message)
            let mensaje = "No se ha podido ingresar, revisa email o contraseña"
            throw new Error(mensaje)
        }            // if (!response.ok) {
        //     const errorResponse = await response.data;
        //     const errorID = errorResponse.error.message;

        //     let message = 'No se ha podido ingresar';
        //     if (errorID === 'EMAIL_EXISTS') message = 'Este email no se encuentra registrado';

        //     throw new error(message);
        //   }
    }
}

export const initAuthentication = () => {
    return async function (dispatch) {
        const auth = await AsyncStorage.getItem('@auth')
        console.log(auth, "auth")
        return dispatch({
            type: SIGN_IN,
            payload: auth
        })
    }
}
export const logOut = () => {
    return async function (dispatch) {
        const auth = await AsyncStorage.removeItem('@auth')
        return dispatch({
            type: LOG_OUT,
            payload: auth
        })
    }
}