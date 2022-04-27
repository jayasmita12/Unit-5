import React from 'react'
import { useSelector } from "react-redux"
import {TodoItem} from './TodoItem'

export const TodoList = () => {
    const todoobj = useSelector((state)=>state.todo)
    const showtodo = todoobj.map((e)=>{
        return(
             <div>
                <TodoItem todotask={e} key={e.id}/>
             </div>
        )
    })
    console.log("todoobj:",showtodo)
  return (
    <div>{showtodo}</div>
  )
}