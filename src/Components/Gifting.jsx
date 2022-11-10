import { useState,useEffect } from "react";
import axios from "axios";
import styles from "../css/Home.module.css"
export default function Gifting(){
    const [data,setData]=useState([])
    useEffect(()=>{
        axios({
            method:"get",
            url:"https://pacific-plains-94481.herokuapp.com/api/gftcards"
          }).then((res)=>setData(res.data))
    },[])


    return <>
   
   
<div className={styles.margins}>
<h1>GIFTING CARDS</h1>   
   <div className={styles.daydeal}>
     {data?.map((img)=>{
        return <div key={img+Math.random(10)}>
             <img src={img} alt="" />
        </div>
    })}
   </div>
</div>
    </>
}