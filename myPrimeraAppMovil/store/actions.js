import { CREATE_LIST } from "./actionTypes";


export const createList = (listName) =>  {
    return async function (dispatch){
        return dispatch({
            type : CREATE_LIST,
            payload: listName
        })

    }
}