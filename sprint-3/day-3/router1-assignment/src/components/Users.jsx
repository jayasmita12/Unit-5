import React from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
export const Users = () => {
    // const {id} = useParams()
    const [getdata,setGetdata] = useState([])

    useEffect(()=>{
          axios.get("https://reqres.in/api/users").then(({data})=>{
            setGetdata(data.data)
            
            // console.log(data.data)
         })

       
     },[]);

     
  return (
     
    <div>
        
   {getdata.map(e=>{
       return(
           <div key={e.id}>
           <Link to={`/users/${e.id}`}>{e.id}={e.first_name}</Link>
           </div>
       )
   })}

    </div>
  )
}
