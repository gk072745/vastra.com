import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from "../css/Credit.module.css"

export default function Cradit(){
    const [data,setData]=useState({num:"",name:"",exp:"",cvv:""})
    const [items,setItems]=useState([])
    const navigate=useNavigate()
  const onchange=(e)=>{
    const {value,type,name}=e.target
    setData((prev)=>({...prev,[name]:value}))
  }


  useEffect(()=>{
    axios({
        method:"get",
        url:"https://pacific-plains-94481.herokuapp.com/api/Checkout",
    }).then((res)=> setItems(res.data))
    },[])

    
    
const removeFunc=(id)=>{
        axios({
            method:"delete",
            url:"https://pacific-plains-94481.herokuapp.com/api/Checkout/"+id,
        
        })
    }


    const check=(e)=>{
        if(data.num&&data.name&&data.exp&&data.cvv){
         items.forEach(({id})=>{
            removeFunc(id)
         })
        navigate("/")
        }
    }
    return <>
    
   <div className={styles.bg}>
   <div className={styles.main}>

<div>
    <input name="num" type="text" maxLength={16} onChange={(e)=>onchange(e)} placeholder="Card Number" /> <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="" />
</div>
<div>
    <input type="text" name="name" onChange={(e)=>onchange(e)}  placeholder="Cardholder's Name" />
</div>
<div>
    <input type="text" name="exp"  maxLength={5}   onChange={(e)=>onchange(e)}  placeholder="Exp" />
    <input type="text" name="cvv" maxLength={4} onChange={(e)=>onchange(e)}  placeholder="CVV" />
    <div onClick={check} className={styles.btn}>
    &#8594;
    </div>
</div>
</div>
   </div>
    
    
    </>
}