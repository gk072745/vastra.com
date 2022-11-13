import styles from "../css/Checkout.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass,faSackDollar,faUser,faHeart,faBagShopping,faTruck} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";
import axios from "axios";
import CheckoutProd from "../Components/checkoutProd";
import { useNavigate } from "react-router-dom";
library.add(faMagnifyingGlass,faSackDollar,faUser,faHeart,faBagShopping,faTruck)


export default function Checkout(){
   const [items,setItems]=useState([])
  const [total,setTotal]=useState(0)
  const [TotalMrp,setTotalMrp]=useState(0)
  const navigate=useNavigate()

useEffect(()=>{
axios({
    method:"get",
    url:"https://pacific-plains-94481.herokuapp.com/api/Checkout",
}).then((res)=> setItems(res.data))
},[])
console.log(items)
    return <>
   <nav className={styles.nav}>
    <div>
    <img src="http://localhost:3000/static/media/Myntra.64e73cf807ba3072649f.png" alt="" />
    </div>
    <div>
      <p>BAG</p>
      <span>-------</span>
      <p>ADDRESS</p>
      <span>-------</span>
    <p>PAYMENT</p>
    </div>
    <div>
          <img src="https://constant.myntassets.com/checkout/assets/img/sprite-secure.png" alt="" />
          <p>100 % SECURE</p>
    </div>

   </nav>
   <div className={styles.main}>
    <div className={styles.items}>
       <div className={styles.d1I1}>
        <p>Check delivery time & services</p>
        <button>ENTER PIN CODE</button>
       </div>

     <div className={styles.d1I2}>
     <FontAwesomeIcon style={{color:"grey"}} icon={"fa-truck"} />
     <p>Yay!</p><span>No Convenience fee</span><p>on this order.</p>
    
     </div>

   <div className={styles.d1I3}>
    <div>
    <FontAwesomeIcon icon="fa-sack-dollar"/>
    </div>
    <div>
        <span>Prices Have Dropped</span>
        <p>The price of one or more items in your bag has dropped. Buy them now!</p>
    </div>
   </div>

   <div className={styles.prods}>
                {
                   
                    items.map(({images,category,title,subtitle,strike_price,discounted_price,discount,size})=>{
                        return <CheckoutProd TotalMrp={TotalMrp} setTotalMrp={setTotalMrp} total={total} setTotal={setTotal} images={images} category={category} title={title} subtitle={subtitle} strike_price={strike_price} size={size} discount={discount} discounted_price={discounted_price} />
                    })
                }
   </div>
</div>

  




    <div className={styles.totalD}>

        <div>
            PRICE DETAILS ({items.length +" items"})
        </div>
     <div>
        <p>Total MRP</p>
        <span>₹ {TotalMrp}</span>
     </div>
     <div>
        <p>
            Discount on MRP
        </p>
        <span>
        -₹{TotalMrp-total}
        </span>
     </div>

     <div>
        <p>Coupon Discount</p>
        <span>Apply Coupon</span>
     </div>
     <div className={styles.conv}>
        <div>
        <p> Convenience Fee</p>
        <p>Know More</p>
       </div>

       <div>
       <span>₹ 99</span>
       <span>
        FREE
       </span>
       </div>
     </div>

     <div className={styles.hr}>
        <hr />
     </div>

     <div className={styles.totalPrc}>
        <p>Total Amount</p>
        <span>₹ {total-99}</span>
     </div>
     <div onClick={()=>navigate("/cradit")}  className={styles.placeX}>  <p> PLACE ORDER</p></div>
     </div>
   </div>



   <div>
    <hr />
   </div>

   <div className={styles.footer}>
    <div>
           <div>
            <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ssl.png" alt="" />
           </div>
           <div>
            <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-visa.png" alt="" />
           </div>           <div>
            <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-mc.png" alt="" />
           </div>           <div>
            <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ae.png" alt="" />
           </div>           <div>
            <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-dc.png" alt="" />
           </div>           <div>
            <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-nb.png" alt="" />
           </div>           <div>
            <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-rupay.png" alt="" />
           </div>           <div>
            <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-cod.png" alt="" />
           </div>           <div>
            <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-paypal.png" alt="" />
           </div>           <div>
            <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-bhim.png" alt="" />
           </div>
    </div>
    <p>Need Help ? Contact Us</p>
   </div>
    </>
}