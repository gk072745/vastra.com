
import { useState,useEffect } from "react";
import axios from "axios";
import styles from "../css/Home.module.css"
import { useNavigate } from "react-router-dom";

 export default function Slashed(){
    const navigate=useNavigate()
    const [data,setData]=useState([])
    useEffect(()=>{
        axios({
            method:"get",
            url:"https://pacific-plains-94481.herokuapp.com/api/sleshed"
          }).then((res)=>setData(res.data))
    },[])


    return <>
   
<div className={styles.margins}>
<h1>BRANDS AT SLASHED PRICES</h1>   
   <div className={styles.slashed}>
     {data?.map((img)=>{
        return <div  onClick={()=>navigate("/men")} key={img+Math.random(10)}>
             <img src={img} alt="" />
        </div>
    })}
   </div>
</div>
    </>
}