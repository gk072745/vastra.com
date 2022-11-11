import { createContext, useState } from "react"



export const AuthContext=createContext()

function AuthContextProvider({children}){
    const [isAuth,setisAuth]=useState(true)
    const [singlePageData,setSinglePageData]=useState({})
    const login=()=>{
        setisAuth(true)
    }
    const logout=()=>{
        setisAuth(false)
    }
    
    const value={isAuth,setisAuth,logout,login,singlePageData,setSinglePageData}

    return (

        <AuthContext.Provider value={value}>
             {children}
        </AuthContext.Provider>
    )
}

export {AuthContextProvider}


  

  
