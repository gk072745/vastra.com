import axios from "axios"
import { useRef } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import styles from "../css/login.module.css"

export default function Login(){
    const mbRef=useRef(null)
    const navigate=useNavigate()
    const check=()=>{
        let length=mbRef.current.value.length
    let num= +mbRef.current.value

   if(typeof num =="number"&&length==10){
      axios({
        method:"patch",
        url:"https://pacific-plains-94481.herokuapp.com/api/mb",
       data:{
        mobile:num
       },

      })

      navigate("/otp")
   }
    }
    
    return <div className={styles.bc}>
    
<div className={styles.main}>
<div>
    <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2022/9/21/8fca3ae9-d245-443b-a142-8d568247794c1663700243878-offer-banner-300-600x240-code-_-MYNTRA400.jpg" alt="" />

</div>
<div className={styles.loginForm}>
    <div className={styles.heading}>
        <h3>Login</h3>
        <p>or</p>
        <h3>Signup</h3>
    </div>

    <div className={styles.mob}>
        <div>
            +91 |
        </div>
        <input type="text" ref={mbRef}  maxLength="10"  />
    </div>

    <div className={styles.terms}>
        <p>By continuing, I agree to the</p> <span>Terms of Use</span> <p>&</p> <span>Privacy Policy</span>
    </div>

    <div onClick={check} className={styles.btn}>
        CONTINUE
    </div>

    <div className={styles.trbl}>
       <p> Have trouble logging in?</p> <span>Get help</span>
    </div>
</div>

</div>
    
    </div>
}