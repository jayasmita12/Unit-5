import React from 'react'
import { Button } from './Navbar-style'
import axios from "axios"
import { useState } from 'react';
import { useNavigate } from "react-router-dom"
import { AuthContext } from '../contexts/AuthContext'
import { useContext } from 'react'
// import { Home } from './Home';
// import { useParams } from 'react-router-dom';

// const Getuserdetails = async(token,id) =>{
// const {id}=useParams();
//   console.log(token,id)
//   try{
//     let res= await fetch(`https://reqres.in/api/users/${id}`,{
//         headers:{
//             "Content-Type":"application/json",
//             "Authorization":`Bearer ${token}`
//         },
//     });

//     let data = await res.json()

//    console.log("data:",data.data)
//    let user = data.data


// }
// catch(err){
//     console.log(err)
// }
//}

export const Login = () => {
  const { Loggingin } = useContext(AuthContext)
  const navigate = useNavigate()
  
  const [postform, setPostform] = useState({
    email: "",
    password: ""
  })
  const handlechange = (e) => {
    setPostform({
      ...postform,
      [e.target.name]: e.target.value
    })
  }


  const Getuser = async (token,id) => {
    console.log(token, id)
    try {
      let res = await fetch(`https://reqres.in/api/users/${id}`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
      });

      let data = await res.json()

    
      let user = data.data

      console.log(user)
      return (
        <div>

        </div>
      )
    }
    catch (err) {
      console.log(err)
    }
  }


  return (
    <div style={{
      textAlign: "center",
      width: "200px",
      margin: "auto"
    }}>
      <form action="" onSubmit={(e) => {
        e.preventDefault()
        axios.post("https://reqres.in/api/register", postform).then((res) => {
          setPostform(res.data)
          console.log(res.data)
          let token = res.data.token
          let id=res.data.id
         
          Loggingin(true)
          navigate("/users")
          // alert("Login sucessfully")
          Getuser(token, id)
        }).catch(error => {
          setPostform({ errormessage: error.message })
          console.log("Already Exit")
        })

      }} >
        <img style={{
          width: "100px",
          height: "100px",
          borderRadius: "50px",
          cursor: "pointer",

        }} src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
        <input type="text" placeholder='email' name="email" value={postform.email} onChange={
          handlechange
        } />{" "}
        <input type="password" placeholder='password' name="password" value={postform.password} onChange={
          handlechange
        } />{" "}
        <input type="submit" value="Login" />
      </form>

      <h1>
      </h1>


    </div>

  )
}
