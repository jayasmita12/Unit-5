

export const ADD_TODO = "ADD_TODO"
export const DELETE_TODO = "DELETE_TODO"
export const UPDATE_TODO = "UPDATE_TODO"

export const addtodo = (title)=>({
    type:ADD_TODO,
    payload:title
})
export const deletetodo = (id)=>({
    type:DELETE_TODO,
    payload:id
})
export const updatetodo = ({title,id})=>({
    type:UPDATE_TODO,
   payload: {title,
    id}
})