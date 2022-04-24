import { createContext, useState } from "react";



export const AuthContext = createContext()
export const AuthContextProvider = ({children})=>{
    const [isAuth,setIsAuth] =useState(false)
    
    // console.log(data)
    const Loggingin =(state)=>{
      setIsAuth(state)
    }
    return <AuthContext.Provider value={{isAuth,Loggingin}}>{children}</AuthContext.Provider>
}