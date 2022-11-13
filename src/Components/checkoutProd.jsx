import { useEffect, useState } from "react"
import styles from "../css/Checkout.module.css"
import axios from "axios"

export default function CheckoutProd({removeFunc,TotalMrp,id,setTotalMrp,total,setTotal,images,category,title,subtitle,strike_price,discounted_price,discount,size}){
    const [qnt,setQnt]=useState(1)
    const [mrp,setMrp]=useState( +strike_price)
    const [sellPrc,setSellPRc]=useState( +discounted_price)
useEffect(()=>{
setTotal((prev)=>prev+sellPrc)
setTotalMrp((prev=>prev+mrp))
},[])
const handleQnt=(q)=>{
    setTotal((prev)=>prev-sellPrc)
    setTotalMrp((prev=>prev-mrp))

    setQnt(qnt+q)
  setMrp(strike_price*(qnt+q))
  setSellPRc(discounted_price*(qnt+q))
  setTotal((prev)=>prev+discounted_price*(qnt+q))
  setTotalMrp((prev=>prev+mrp*(qnt+q)))

}


    return <>
    <div>
                            <div>
                                <img src={images} alt="" />
                            </div>
     <div className={styles.singleDet}>
           <div className={styles.titles}>
               <div>
                <span>{title}</span>
                <p onClick={()=>removeFunc(id,sellPrc,mrp)}>&#x2715;</p>
              </div>
                                <p className={styles.sub}>{subtitle}</p>
                                <p className={styles.cat}>Category: {category}</p>
            </div>
                               <div className={styles.qnty}>
                                <div>
                                    Size: {size}
                                </div>
                                <div>
                                    <button disabled={qnt==1} onClick={()=>handleQnt(-1)}>-</button>
                                    <button>{qnt}</button>
                                    <button disabled={qnt==3} onClick={()=>handleQnt(+1)}>+</button>
                                </div>
                               </div>

                               <div className={styles.prcs}>
                                <span>
                                ₹ {sellPrc}
                                </span>
                                <p>
                                ₹ {mrp}
                                </p>
                                <p>
                                    {discount}
                                </p>
                               </div>
                            </div>
                        </div>
    </>
}