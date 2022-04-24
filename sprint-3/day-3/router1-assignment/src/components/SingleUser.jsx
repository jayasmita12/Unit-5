import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext';

export const SingleUser = () => {
    const {id}=useParams();
    const [singleuser,setSingleuser]=useState({})
    const {isAuth}=useContext(AuthContext)

    useEffect(()=>{
        axios.get(`https://reqres.in/api/users/${id}`).then(({data})=>{
        setSingleuser(data.data)
        // console.log(data.data)
        })
    },[])
    if(!isAuth){
        return <Navigate to={"/login"} />
    }
else{
  return (
    <div style={{
        textAlign:"center"
    }}>
       <h1>Id:{singleuser.id}</h1>
       <img src={singleuser.avatar} alt="" />
       <h2>{singleuser.first_name} {singleuser.last_name}</h2>
    </div>
  )
}
}
