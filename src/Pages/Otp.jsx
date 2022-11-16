import axios from "axios"
import {HStack,PinInput,PinInputField,Box } from "@chakra-ui/react"
import { useContext, useEffect, useRef, useState } from "react"
import styles from "../css/otp.module.css"
import { AuthContext } from "../Context/AuthContextProvider"
import { useNavigate } from "react-router-dom"



export default function Otp(){
   const [otpVal,setOtp]=useState(Math.floor(1000 + Math.random() * 9000))
  const [mb,setMb]=useState("*******")
  const [otp,setotp]=useState([])
  const [length,setlen]=useState(0)
  const {setisAuth}=useContext(AuthContext)
  const navigate=useNavigate()
    useEffect(()=>{
        axios({
            method:"get",
            url:"https://pacific-plains-94481.herokuapp.com/api/mb"
        }).then((res)=>{setMb(res.data.mobile);

        })
    },[])


    useEffect(()=>{
        alert("Your otp is "+ otpVal)
    },[otpVal])

    const otpCheck=(e)=>{
        let arr=otp
 if(!e.target.value){ 
    arr.splice(e.target.name,1)
    setotp((prev)=>arr)

}else{
    arr[e.target.name]= +e.target.value
    setotp((prev)=>arr)

 }
 setlen(otp.length)

    if(otp.length==4&& otp.join("")==otpVal){
         setisAuth(true)
         return navigate("/")
}
 
    }
    return <>
<div className={styles.bc}>
        
   <div className={styles.main}>
   <div className={styles.mrgn}>
        <div className={styles.img}>
             <img src="https://constant.myntassets.com/pwa/assets/img/3a438cb4-c9bf-4316-b60c-c63e40a1a96d1548071106233-mobile-verification.jpg"  alt="" />
        </div>
        <div className={styles.msg}>
            <h3>Verify with OTP</h3>
            <p>Sent to {mb}</p>
        </div>
        <div className={styles.OtpAuth}>
         <input  onChange={(e)=>otpCheck(e)} name="0" className={styles.OtpAuthInputs} type="text" maxLength="1" />
         <input readOnly={length==0} onChange={(e)=>otpCheck(e)} name="1" className={styles.OtpAuthInputs} type="text" maxLength="1" />
         <input readOnly={length<2} onChange={(e)=>otpCheck(e)} name="2" className={styles.OtpAuthInputs} type="text" maxLength="1" />
         <input readOnly={length<3} onChange={(e)=>otpCheck(e)}  name="3" className={styles.OtpAuthInputs} type="text" maxLength="1" />
        </div>

        <div className={styles.otpSend} onClick={()=>setOtp(Math.floor(1000 + Math.random() * 9000))}>
            Resent OTP
        </div>
        <div className={styles.xtraThings}>
            <p>Log in using </p> <span>Password</span>
        </div>
        <div className={styles.xtraThings}>
            <p>Having Trouble logging in?</p> <span>Get help</span>
        </div>
    </div>
   </div>
</div>

    </>
}