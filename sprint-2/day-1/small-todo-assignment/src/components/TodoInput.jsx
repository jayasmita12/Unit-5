import { useState } from "react";
import "./Todo.css"

function  TodoInput({listchange}){
    const [text,setText]=useState("")
    return (
        <div className="inputdiv">

            <input className="inputtodo" type="text"  placeholder="Write something..." onChange={(e)=>{
                setText(e.target.value)
            }} onKeyPress={(e)=>{
                if(e.key==="Enter"){

                    listchange(e.target.value)
                }
            }} />
            <button className="todobtn" onClick={()=>{
                listchange(text)
            }}>+</button>

          

        </div>
    )
}
export {TodoInput}