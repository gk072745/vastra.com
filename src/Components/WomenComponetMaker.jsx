import { useState,useEffect } from "react";
import axios from "axios";
import styles from "../css/Men.module.css"
import { useNavigate, useSearchParams } from "react-router-dom";


export default function WomensComponentMaker(props){
  const [searchParams,setSearchParams]=useSearchParams()
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
            return <div   key={img+Math.random(10)} onClick={()=> navigate(`/Mens?page=1&type=Womens`)}>
                 <img src={img} alt="" />
            </div>
        })}
       </div>
    </div>
        </>


}