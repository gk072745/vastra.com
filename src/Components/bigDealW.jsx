
import { useState,useEffect } from "react";
import axios from "axios";
import styles from "../css/Men.module.css"
import { useNavigate } from "react-router-dom";
 export default function BigDealW(){
    const [data,setData]=useState([])
    const navigate=useNavigate()
    useEffect(()=>{
        axios({
            method:"get",
            url:"https://pacific-plains-94481.herokuapp.com/api/topBW"
          }).then((res)=>setData(res.data))
    },[])


    return <>
   
   
<div className={styles.margins}>
<h1>BIGGEST DEALS ON TOP BRANDS</h1>   
   <div className={styles.BigDealw}>
     {data?.map((img)=>{
        return <div onClick={()=> navigate(`/Mens?page=1&type=Womens`)} key={img+Math.random(10)}>
             <img src={img} alt="" />
        </div>
    })}
   </div>
</div>
    </>
}