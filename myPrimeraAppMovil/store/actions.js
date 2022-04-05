import axios from 'axios';
import { CREATE_LIST, SIGN_IN } from "./actionTypes";



const auth_uri = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCUUuOrljFuN1tckzxnm-pRrqQ_upyXkrc"

export const createList = (listName) => {
    return function (dispatch) {
        return dispatch({
            type: CREATE_LIST,
            payload: listName
        })
    }
}

export const signIn = (email, password) => {
    return async function (dispatch) {
            const response = await axios.post(auth_uri, { email: email, password: password, returnSecureToken: true })
             return dispatch({
                    type: SIGN_IN,
                    payload: response.data.email
                })
    }
}
// export const CREATE_ = (photo) =>  {
//     return  function (dispatch){
//         return  dispatch({
//             type : CREATE_LIST,
//             payload: photo
//         })
//     }
// }