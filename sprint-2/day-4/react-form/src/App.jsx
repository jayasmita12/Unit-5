import axios from "axios"
import{useState}from"react"
import { useEffect } from "react"
import './App.css'
import {FormData} from "./components/form"
import{TableData} from "./components/TableData"


function App() {
  const [show,setShow]=useState(true)
  const [table,setTable]=useState([])
  useEffect(()=>{
    getUserData()
  },[])

const getUserData = () =>{
  axios.get("http://localhost:3006/users").then((res)=>{
    setTable(res.data)
})
}

  return (
    <div className="App">
     
        
      <button className="togglebtn" onClick={()=>{
        setShow(!show)
        
      }}>
        {show ? "Show UserData" :"show Add students"}</button>
       {show ? <TableData   formdata={table}/>:<FormData/>}
     
    </div>
  )
}

export default App

