import React from 'react'
import {Button} from "react-bootstrap"

export const TodoItem = ({todo,MoreInfo,deleteone}) => {
  return (
    <div >
      
       {/* <h4>{todo.id}</h4> */}
       <h3>{todo.title}</h3>
       <Button variant="danger" onClick={()=>{
           deleteone(todo)}}>Delete</Button>{' '}
          
           <Button onClick={()=>{
           MoreInfo(todo)}} variant="info">Status</Button>{' '}

    </div>
  )
}
