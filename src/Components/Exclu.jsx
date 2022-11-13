
import { useState,useEffect } from "react";
import axios from "axios";
import styles from "../css/Home.module.css"
import { useNavigate } from "react-router-dom";

 export default function ExlusiveB(){
    const navigate=useNavigate()
    const [data,setData]=useState([])
    useEffect(()=>{
        axios({
            method:"get",
            url:"https://pacific-plains-94481.herokuapp.com/api/BestMyntraExclusive"
          }).then((res)=>setData(res.data))
    },[])


    return <>
<div className={styles.margins}>
<h1>BEST OF MYNTRA EXCLUSIVE BRANDS</h1>   
   <div className={styles.ExlusiveB}>
     {data?.map((img)=>{
        return <div key={img+Math.random(10)}  onClick={()=>navigate("/women")}>
             <img src={img} alt="" />
        </div>
    })}
   </div>
</div>
    </>
}