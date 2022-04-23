import React from 'react'
import { TodoInput } from './TodoInput'
import {TodoItem} from './TodoItem'
import {useState} from "react"
import {nanoid} from  "nanoid"

export const Todo = () => {
   const [todolists, setTodolists]  = useState([])

const addTodo=(todo)=>{
    const payload = {

        id:nanoid(1),
        title:todo,
        status:false,

    }
    setTodolists([...todolists,payload])
}


const MoreInfo=(todo)=>{
    console.log("check desc",todo.status)
      
}

const deleteone=(todo)=>{
    console.log("delete",todo)
    setTodolists(todolists.filter((e)=>{
        return e !==todo
    }))
}


  return (
    <div>
        
        <TodoInput  addTodo={addTodo} />
        {todolists.length===0 ? "No item here":
      
       todolists.map((e)=>{
        return   <TodoItem todo={e}  MoreInfo={MoreInfo} deleteone={deleteone} />
       })   
      
       }
    </div>
  )
}
