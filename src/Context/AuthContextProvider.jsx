import axios from "axios"
import { createContext, useEffect, useState } from "react"



export const AuthContext=createContext()

function AuthContextProvider({children}){
    const [isAuth,setisAuth]=useState(false)
    const [bag,setBag]=useState(0)
    const [singlePageData,setSinglePageData]=useState({})
  useEffect(()=>{
    axios({
        method:"get",
        url:"https://pacific-plains-94481.herokuapp.com/api/Checkout"
    }).then((res)=>setBag(res.data.length))
  })
    
    const value={bag,setBag,isAuth,setisAuth,singlePageData,setSinglePageData}

    return (

        <AuthContext.Provider value={value}>
             {children}
        </AuthContext.Provider>
    )
}

export {AuthContextProvider}


  

  
