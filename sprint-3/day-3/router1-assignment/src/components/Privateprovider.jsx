import { Navigate } from "react-router-dom"
import { AuthContext } from "../contexts/AuthContext"
import { useContext } from "react"

export const Privateprovider=({children})=>{
    const {isAuth} =useContext(AuthContext)
    if(!isAuth){
        return <Navigate to={"/login"} />
    }
    return children ;
  }