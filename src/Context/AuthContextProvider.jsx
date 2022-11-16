import axios from "axios"
import { createContext, useEffect, useState } from "react"



export const AuthContext=createContext()

function AuthContextProvider({children}){
    const [isAuth,setisAuth]=useState(JSON.parse(localStorage.getItem('Auth'))||false)
    const [bag,setBag]=useState(0)
    const [singlePageData,setSinglePageData]=useState({})
    const [data,setData]=useState([])
  useEffect(()=>{
    axios({
        method:"get",
        url:"https://pacific-plains-94481.herokuapp.com/api/Checkout"
    }).then((res)=>setBag(res.data.length))
  })
    
    const value={bag,setBag,data,setData,isAuth,setisAuth,singlePageData,setSinglePageData}

    useEffect(() => {
      localStorage.setItem('Auth', JSON.stringify(isAuth));
    }, [isAuth])


    return (

        <AuthContext.Provider value={value}>
             {children}
        </AuthContext.Provider>
    )
}

export {AuthContextProvider}


  

  
