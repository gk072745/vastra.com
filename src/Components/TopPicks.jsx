
import { useState,useEffect } from "react";
import axios from "axios";
import styles from "../css/Home.module.css"
import { useNavigate } from "react-router-dom";

 export default function TopPicks(){
    const navigate=useNavigate()
    const [data,setData]=useState([])
    useEffect(()=>{
        axios({
            method:"get",
            url:"https://pacific-plains-94481.herokuapp.com/api/topPicks"
          }).then((res)=>setData(res.data))
    },[])


    return <>
   
   
<div className={styles.margins}>
<h1>TOP PICKS</h1>   
   <div className={styles.daydeal}>
     {data?.map((img)=>{
        return <div key={img+Math.random(10)}  onClick={()=>navigate("/women")}>
             <img src={img} alt="" />
        </div>
    })}
   </div>
</div>
    </>
}