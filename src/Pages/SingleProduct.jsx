import { useContext } from "react";
import styles from "../css/singlePAge.module.css"
import { AuthContext } from "../Context/AuthContextProvider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams, useSearchParams } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass,faUser,faHeart,faBagShopping,faTruck } from '@fortawesome/free-solid-svg-icons';
library.add(faMagnifyingGlass,faUser,faHeart,faBagShopping,faTruck)


export default function SingleP(){
    const {singlePageData}=useContext(AuthContext)
    const {images,title,subtitle,rating,rating_count,size,discounted_price,discount,strike_price}=singlePageData
    console.log(singlePageData)


    return <>
    
      <div className={styles.main}>
      <div className={styles.imgSec}>
        { images.map((img)=>{

            return <div key={img+Math.random(100)}>
                <img src={img} alt="" />
            </div>
        })}
      </div>


      <div className={styles.DeteailDiv}>
           <div className={styles.title}>
            <p>{title}</p>
            <p>{subtitle}</p>
           </div>


           <div className={styles.RtDiv}>
            <div>
              <span>{rating} </span>
              <span style={{color:"#72bfbc"}}>	&#9733;</span>
            </div>
              <span>|</span>
              <span>{rating_count} Ratings</span>
           </div>

          <div className={styles.hr}>
          <hr />
          </div>


          <div className={styles.prcDiv}>
        <div>
        ₹{discounted_price}
        </div>
    
        <div>
      MRP <span>₹{strike_price}   </span>     
        </div>

        <div>
        {discount}
        </div>
          </div>
      <p className={styles.text}>inclusive of all taxes</p>
      <div className={styles.sZ}>
        <p>SELECT SIZE</p>
        <p>SIZE CHART  &#62; </p>
      </div>
        <div className={styles.sizes}>
        <button disabled={!size.includes("XS")} >26</button>
         <button  disabled={!size.includes("S")}>27</button>
         <button  disabled={!size.includes("M")}>28</button>
         <button  disabled={!size.includes("L")}>30</button>
         <button  disabled={!size.includes("XL")}>32</button>
         <button  disabled={!size.includes("XXL")}>34</button>
        </div>

        <div className={styles.cart}>

            <div>
            <FontAwesomeIcon  style={{padding:"0px"}} icon="fa-bag-shopping" />
            <p>ADD TO BAG</p>
            </div>
            <div>
               <FontAwesomeIcon style={{padding:"0px"}} icon="fa-heart"/>
               <p>WISHLIST</p>
            </div>
        </div>

        <div className={styles.hr}>
          <hr />
          </div>

          <div className={styles.dlvry}>
            <p>DELIVERY OPTIONS</p>
            <FontAwesomeIcon icon="fa-truck"  />
          </div>

          <div className={styles.pincd}>
            <input type="number" placeholder="Enter pincode" onKeyDown="return false" />
            <button>Check</button>
          </div>
          <p className={styles.pinrqs}>Please enter PIN code to check delivery time & Pay on Delivery Availability</p>


          <div className={styles.rtnPolicy}>
            <p>100% Original Products</p>
            <p>Pay on delivery might be available</p>
            <p>Easy 30 days returns and exchanges</p>
            <p>Try & Buy might be available</p>
          </div>


          <div className={styles.offers}>
             <div>
                <p>BEST OFFERS</p>
             </div>
          </div>
      <div>
       
      </div>
   <div>

   </div>
      </div>
      </div>
    
    </>
}