import {React ,useState} from 'react'
import {useDispatch} from "react-redux"
import { addtodo } from '../Redux/action'
import { nanoid } from 'nanoid'


export const AddTodo = () => {
    const [task,setTask] = useState("");
    const dispatch = useDispatch();

    
    const handleInputchange = (e)=>{
        setTask(e.target.value)
      
    };

    const handleform = (e)=>{
        e.preventDefault();
        dispatch(addtodo({tasks:task,id:nanoid(4)}));
        e.target.title.value="";
    };

  return (
    <form onSubmit={handleform}>
        <input type="text" name="title" placeholder='Enter' onChange={(e)=>{handleInputchange(e)}} />
        <input type="submit" value="ADD" />
    </form>
  )
};
