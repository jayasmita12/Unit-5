import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./action";


export const todoReducer = (store,{type,payload})=>{
    switch(type){
        case ADD_TODO:return {...store,todo:[...store.todo , payload]}
        case DELETE_TODO:return {...store, todo:[...store.todo.filter((todo)=>todo.id !== payload)]}
        case UPDATE_TODO:return {...store, todo:[...store.todo.filter((todo)=>todo.id !== payload),
            {tasks:payload.title ,id:payload.id}]}
            
        default:return store
    }
}