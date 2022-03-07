import { CREATE_LIST } from "./actionTypes";


export const createList = (listName) =>  ({
    type : CREATE_LIST,
    payload: listName
})