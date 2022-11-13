
import { useState,useEffect } from "react";
import axios from "axios";
import styles from "../css/Home.module.css"
import { useNavigate } from "react-router-dom";

 export default function TopB(){
    const [data,setData]=useState([])
    const navigate=useNavigate()
    useEffect(()=>{
        axios({
            method:"get",
            url:"https://pacific-plains-94481.herokuapp.com/api/topB"
          }).then((res)=>setData(res.data))
    },[])

    return <>
   
<div className={styles.margins}>
<h1>DEALS ON TOP BRANDS</h1>   
   <div className={styles.ExlusiveB}>
     {data?.map((img)=>{
        return <div  onClick={()=>navigate("/men")} key={img+Math.random(10)}>
             <img src={img} alt="" />
        </div>
    })}
   </div>
</div>
    </>
}