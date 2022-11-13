import styles from "../css/product.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass,faUser,faHeart,faBagShopping} from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {useContext} from "react"
import { AuthContext } from "../Context/AuthContextProvider";
library.add(faMagnifyingGlass,faUser,faHeart,faBagShopping)
import axios from "axios";
 

export default function Product({item,id}){
  const {setSinglePageData}=useContext(AuthContext)
    const navigate=useNavigate()
    const [showWish,setShowWish]=useState(false)
    const {images,rating,rating_count,title,subtitle,strike_price,discounted_price,discount,size}=item

 const singlePgNav=(data)=>{
   navigate(`/single/${id}`)
   setSinglePageData(item)
 }

 
    return <>
    <div className={styles.main} onMouseEnter={()=>setShowWish(true)} onMouseLeave={()=>setShowWish(false)}>
       <div  style={{width:"100%"}} >
        <img onClick={()=>singlePgNav(id)}  src={images[0]}  alt="" />
        {!showWish&&<div className={styles.rating}>
           <div>
           <span>{rating}</span> &nbsp;
            <span className={styles.star}>&#9733; </span>
           </div><div> |</div>
           <div>
            {rating_count}
           </div>
        </div>}
       </div>
       
       
       <div>
        {showWish&&<div className={styles.hoverWish} onClick={()=>console.log("w")}>
            <div className={styles.wishlist}>
            <FontAwesomeIcon  icon="fa-heart" />
            <div className={styles.wishlistWord}>
                WISHLIST
            </div>
            </div>
        </div>
         
        }
        {
            showWish && <div onClick={()=>singlePgNav(id)}  className={styles.size}>
                <p>Sizes: {size.join(", ")} </p>
                </div>
        }
       {!showWish&& <p className={styles.title}>{title}</p>}
         {!showWish&& <p className={styles.subtitle}>{subtitle}</p>}
          <div className={styles.prc}>
            <p>Rs.{discounted_price}</p> 
            <p><span>Rs.</span>{strike_price}</p>
            <p>{discount}</p>
          </div>
       </div>

    </div>
    
    
    </>


     
}