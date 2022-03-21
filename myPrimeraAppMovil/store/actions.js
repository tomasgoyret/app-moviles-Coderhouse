import { CREATE_LIST } from "./actionTypes";


export const createList = (listName) =>  {
    return  function (dispatch){
        return  dispatch({
            type : CREATE_LIST,
            payload: listName
        })
    }
}
export const savePhoto = (photo) =>  {
    return  function (dispatch){
        return  dispatch({
            type : CREATE_LIST,
            payload: photo
        })
    }
}