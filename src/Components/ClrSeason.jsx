
import { useState,useEffect } from "react";
import axios from "axios";
import styles from "../css/Home.module.css"

 export default function CSeason(){
    const [data,setData]=useState([])
    useEffect(()=>{
        axios({
            method:"get",
            url:"https://pacific-plains-94481.herokuapp.com/api/clrSeason"
          }).then((res)=>setData(res.data))
    },[])


    return <>
   
   
<div className={styles.clrMargin} >
<h1>COLOURS OF THE SEASON</h1>   
   <div className={styles.beauty}>
     {data?.map((img)=>{
        return <div key={img+Math.random(10)}>
             <img src={img} alt="" />
        </div>
    })}
   </div>
</div>
    </>
}