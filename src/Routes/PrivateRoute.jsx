import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";
import LoginRoute from "./loginRoute";



export default function PrivateRoute({children}){

    const {isAuth}=useContext(AuthContext)
    if(!isAuth){
        return <Navigate to="/login"/>
    } 
  return children
}