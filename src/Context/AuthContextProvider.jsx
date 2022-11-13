import { createContext, useState } from "react"



export const AuthContext=createContext()

function AuthContextProvider({children}){
    const [isAuth,setisAuth]=useState(false)
    const [singlePageData,setSinglePageData]=useState({})
  
    
    const value={isAuth,setisAuth,singlePageData,setSinglePageData}

    return (

        <AuthContext.Provider value={value}>
             {children}
        </AuthContext.Provider>
    )
}

export {AuthContextProvider}


  

  
