import { useState,useEffect } from "react";
import axios from "axios";
import styles from "../css/Men.module.css"
import { useNavigate } from "react-router-dom";


export default function MensComponentMaker(props){
  const {data,heading}=props.data
    const navigate=useNavigate()
    const [prod,setProd]=useState([])
    useEffect(()=>{
        axios({
            method:"get",
            url:`https://pacific-plains-94481.herokuapp.com/api/${data}`
          }).then((res)=>setProd(res.data))
    },[])
    
    return <>
   
    <div className={styles.margins}>
    <h1>{heading}</h1>   
       <div className={styles.flexM}>
         {prod?.map((img)=>{
            return <div onClick={()=> navigate(`/Mens?page=1&type=Mens`)}key={img+Math.random(10)}>
                 <img src={img} alt="" />
            </div>
        })}
       </div>
    </div>
        </>


}