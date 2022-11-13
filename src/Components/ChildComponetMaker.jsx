import { useState,useEffect } from "react";
import axios from "axios";
import styles from "../css/child.module.css"
import { useNavigate } from "react-router-dom";


export default function ChildComponentMaker(props){
  const {data,heading}=props.data
  const id=props.id
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
       <div className={id<2||id==5?styles.flex:id==3||id==4?styles.grid2:styles.grid1}>
         {prod?.map((img)=>{
            return <div onClick={()=> navigate(`/Mens?page=1&type=Child`)}key={img+Math.random(10)}>
                 <img src={img} alt="" />
            </div>
        })}
       </div>
    </div>
        </>


}