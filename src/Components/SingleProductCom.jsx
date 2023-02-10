import styles from "../css/SingleProductCom.module.css";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass,faUser,faHeart,faBagShopping} from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { position, Text, useToast } from "@chakra-ui/react";
import { useSelector } from "react-redux";
library.add(faMagnifyingGlass,faUser,faHeart,faBagShopping)


 

export default function SingleProductCom(el){
    const {MRP,discount,id,brand,img,price,rating,ratingT,size,title}=el
    const [showWish,setShowWish]=useState(false)
    const navigate=useNavigate()
    const {isAuth}=useSelector((store)=>store.AuthReducer)
    const toast=useToast()


    
    return <>
    <div className={styles.main} onMouseEnter={()=>setShowWish(true)} onMouseLeave={()=>setShowWish(false)}>
       <div  style={{width:"100%"}} >
        <img onClick={()=>navigate(`../single_product/${id}`)}  src={img}  alt="" />
        {!showWish&&<div className={styles.rating}>
           <div>
           <span>{rating}</span> &nbsp;
            <span className={styles.star}>&#9733; </span>
           </div><div> |</div>
           <div>
            {ratingT}
           </div>
        </div>}

       </div>
       
       
       <div>
        {showWish&&<div className={styles.hoverWish}>
            <div className={styles.wishlist}  onClick={()=>{
        
        if(isAuth){
                    axios({
                                  method:"post",
                                  url:`${process.env.REACT_APP_MYNTRA_API}/wishlist`,
                                  data:el
                                }).then((res)=>{
                                   toast({
                                    duration:1500,
                                    status:"info",
                                    title:"item successfully added in wishlist",
                                    isClosable:true,
                                    variant:"top-accent",
                                    position:"bottom-right",
                                 
                                   })
                                }).catch((err)=>{
                                  toast({
                                    
                                    duration:1500,
                                    status:"warning",
                                    title:"item already present in wishlist",
                                    isClosable:true,
                                    variant:"top-accent",
                                    position:"bottom-right",
                                   })
                                })
        }else{
                    navigate("/signup")
        }
              }}>
            <FontAwesomeIcon  icon="fa-heart" />
            <div className={styles.wishlistWord}>
                WISHLIST
            </div>
            </div>
        </div>
         
        }
        {
            showWish && <div onClick={()=>navigate(`../single_product/${id}`)}  className={styles.size}>
                <p>Sizes: {size.join(", ")} </p>
                </div>
        }
       {!showWish&& <p  onClick={()=>navigate(`../single_product/${id}`)}   className={styles.title}>{brand}</p>}
         {!showWish&& <Text
         m={"2px 0px"}
         fontWeight="400"
         color={"#53575f"}
         fontSize="14px"
         onClick={()=>navigate(`../single_product/${id}`)}  
         isTruncated
         >{title}</Text>}
          <div   onClick={()=>navigate(`../single_product/${id}`)} className={styles.prc}>
            <p    >Rs.{price}</p> 
            <p   ><span>Rs.</span>{MRP}</p>
            <p   >{`(${discount}% OFF)`}</p>
          </div>
       </div>

    </div>
    
    
    </>


     
}