import axios from 'axios';
import { GET_ALL_TASKS, LOG_OUT, SIGN_IN } from "./actionTypes";
import AsyncStorage from '@react-native-async-storage/async-storage';

const auth_uri = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCUUuOrljFuN1tckzxnm-pRrqQ_upyXkrc"
const bbdd_uri = "https://checked-97559-default-rtdb.firebaseio.com"

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
        }
    }
}

export const initAuthentication = () => {
    return async function (dispatch) {
        const auth = await AsyncStorage.getItem('@auth')
        console.log("Sesion iniciada con: "+auth)
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

export const newTask = (task) => {
    return async function(dispatch) {
        const response = await axios.post(`${bbdd_uri}/tareas.json` , task)
    }
}

export const getTasks = () => {
    return async function(dispatch){
        try {
            const response = await axios.get(`${bbdd_uri}/tareas.json`)
            const result = response.data
            return dispatch({
                type: GET_ALL_TASKS,
                payload: result
            })
        } catch (err) {
            console.log(err.message)
        }
    }
}
// export const createList = (listName) => {
//     return function (dispatch) {
//         return dispatch({
//             type: CREATE_LIST,
//             payload: listName
//         })
//     }
// }