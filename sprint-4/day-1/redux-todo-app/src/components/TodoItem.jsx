import {React,useState,useRef} from 'react'
import {useDispatch} from "react-redux"
import {deletetodo, updatetodo} from '../Redux/action';

export const TodoItem = ({todotask}) => {
    const [isUpdate,setIsUpdate] = useState(false)
    const dispatch = useDispatch();
    const textRef=useRef(null)

    const editformChenge = (e)=>{
        e.preventDefault()
        dispatch(updatetodo({title:textRef.current.value , id: todotask.id}))
        setIsUpdate(false)
        textRef.current=null
    }

    const renderForm = ()=>{
        return (
            <form onSubmit={editformChenge}>
                <input ref={textRef} type="text" defaultValue={todotask.tasks} />
                <button type="submit">Edit Todo</button>
            </form>
        )
    }
    const renderItem =()=>{

        return (
          <div>
              <h3>{todotask.tasks}</h3>
              <button onClick={()=>{
                  setIsUpdate(true)
              }}>Edit</button>
              <button onClick={()=>dispatch(deletetodo(todotask.id))}>Delete</button>
          </div>
        )
    }

    return (
        <div>
            {isUpdate ? renderForm() :renderItem()}
        </div>
    )
}

