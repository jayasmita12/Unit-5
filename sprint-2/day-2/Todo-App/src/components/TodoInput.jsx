import React from 'react'
import { useState } from 'react'
import {Button} from "react-bootstrap"
export const TodoInput = ({addTodo}) => {
    const [text, setText] = useState("")

    return (
        <div>
            <input type="text" onChange={(e) => {

                setText(e.target.value)
            }} placeholder="Write Something..." />{' '}
            <Button variant="outline-success" onClick={()=>{
                addTodo(text)}} size="sm" >Success</Button>
            
        </div>
    )
}

