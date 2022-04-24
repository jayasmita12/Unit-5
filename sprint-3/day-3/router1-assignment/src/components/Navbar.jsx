
import React from 'react'
import { Link } from 'react-router-dom'
import {Button,Navbardiv} from "./Navbar-style"

export const Navbar = () => {
  return (
    <div>
        <Navbardiv>
       <Link to="/login" style={{}}><Button>Login</Button></Link> 
       <Link to="/" style={{}}><Button>Home</Button></Link> 
       <Link to="/users" ><Button>Users</Button></Link> 
        </Navbardiv>
       
    </div>
  )
}
