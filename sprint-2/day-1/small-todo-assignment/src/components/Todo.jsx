import { useState } from 'react'
import {TodoInput} from './TodoInput'
import {Todoitem} from "./Todoitem"
import {nanoid} from "nanoid"

function Todo(){
    const [todolist,setTodolist] = useState([])

    const listchange=(todo)=>{
        const payload ={
            title:todo,
            status:false,
            id:nanoid(2)
        }
        if(todo){

            setTodolist([...todolist,payload])
        }
    }
    const  togglecheck =( id,status)=>{
        console.log(id,status)
        // console.log(todo.id)      
        
    }

    return (
        <div>
            <TodoInput listchange={listchange}/>
           
            {todolist.map((e)=>(  
                <Todoitem togglecheck={togglecheck} todo={e}/>
            ))}
              
              
            </div>
    )
}

export {Todo}