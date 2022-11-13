import axios from "axios"
import { useState } from "react"
import styles from "../css/Credit.module.css"

export default function Cradit(){
    const [data,setData]=useState({num:"",name:"",exp:"",cvv:""})
  const onchange=(e)=>{
    const {value,type,name}=e.target
    setData((prev)=>({...prev,[name]:value}))
  }
    const check=(e)=>{
        if(data.num&&data.name&&data.exp&&data.cvv){
           axios({
            method:"put",
            url:"https://pacific-plains-94481.herokuapp.com/api/Checkout"
            
           })
        }
    }
    return <>
    
   <div className={styles.bg}>
   <div className={styles.main}>

<div>
    <input name="num" type="text" onChange={(e)=>onchange(e)} placeholder="Card Number" /> <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="" />
</div>
<div>
    <input type="text" name="name"  onChange={(e)=>onchange(e)}  placeholder="Cardholder's Name" />
</div>
<div>
    <input type="text" name="exp"  onChange={(e)=>onchange(e)}  placeholder="Exp" />
    <input type="text" name="cvv" onChange={(e)=>onchange(e)}  placeholder="CVV" />
    <div onClick={check} className={styles.btn}>
    &#8594;
    </div>
</div>
</div>
   </div>
    
    
    </>
}