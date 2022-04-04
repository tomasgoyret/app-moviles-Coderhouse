import { CREATE_LIST } from "./actionTypes";


const api_url =  "https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyCUUuOrljFuN1tckzxnm-pRrqQ_upyXkrc"

export const createList = (listName) =>  {
    return  function (dispatch){
        return  dispatch({
            type : CREATE_LIST,
            payload: listName
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