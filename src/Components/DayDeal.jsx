import { useState,useEffect } from "react";
import axios from "axios";
import styles from "../css/Home.module.css"
import { useNavigate } from "react-router-dom";

export default function DayDeal(){
    const navigate=useNavigate()
    const [data,setData]=useState([])
    useEffect(()=>{
        axios({
            method:"get",
            url:"https://pacific-plains-94481.herokuapp.com/api/dayDeal"
          }).then((res)=>setData(res.data))
    },[])

    return <>
   
<div className={styles.margins}>
<h1>DEAL OF THE DAY</h1>   
   <div className={styles.daydeal}>
     {data?.map(({img,type})=>{
        return <div onClick={()=>navigate("/women")} key={img+Math.random(10)}>
             <img  src={img} alt="" />
        </div>
    })}
   </div>
</div>
    </>
}