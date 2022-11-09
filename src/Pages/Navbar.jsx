import Myntra from "../Images/Myntra.png"
import styles from "../css/Navbar.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass,faUser,faHeart,faBagShopping} from '@fortawesome/free-solid-svg-icons';
import { useRef } from "react";



export default function Navbar(){
 const focusRef=useRef(null)

 const activeB=(x)=>{
   if(x){
      focusRef.current.className=styles.activeB
   }else{
      focusRef.current.className=null
   }
 }
return <>

<div className={styles.main}>

  <div>
       <div>
           <img src={Myntra} width="45px" height={"45px"} alt="" />
       </div>
       <div>
          <div className={styles.navpadding}>
            
            MEN
          </div>
          <div  className={styles.navpadding}>
            WOMEN
          </div>
          <div className={styles.navpadding}>
            KIDS
          </div>
          <div className={styles.navpadding}>
            HOME & LIVING
          </div>
          <div className={styles.navpadding}>
            BEAUTY
          </div>
          <div className={styles.navpadding}>
            STUDIO <sup style={{color:"#ff3f6c",fontWeight:"600",fontSize:"10px"}}>NEW</sup>
          </div>
       </div>

  </div>

  <div>
            <div ref={focusRef}>
                  <div>
                  <FontAwesomeIcon className={styles.icon} icon="fa-magnifying-glass" />
                  <input onMouseEnter={()=>activeB(true)} onMouseLeave={()=>activeB(false)} type="text" placeholder="Search for products, brands and more" />
                  </div>
            </div>
            <div>
                <div  className={styles.navpadding}>
<FontAwesomeIcon  icon="fa-user" />
<p>Profile</p>
                </div>
                <div className={styles.navpadding}>
                <FontAwesomeIcon icon="fa-heart" />
<p>Wishlist</p>
                </div>
                <div className={styles.navpadding}>
                <FontAwesomeIcon icon="fa-bag-shopping" />
                <sup style={{padding:"2px 7px",fontSize:"10px",background:"#f16565",color:"white",borderRadius:"50px"}}>1</sup>
<p>Bag</p>
                </div>
            </div>
          
  </div>

</div>












</>
}