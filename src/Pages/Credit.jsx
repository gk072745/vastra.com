import styles from "../css/Credit.module.css"

export default function Cradit(){
    return <>
    
   <div className={styles.bg}>
   <div className={styles.main}>

<div>
    <input type="text" placeholder="Card Number" /> <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="" />
</div>
<div>
    <input type="text" placeholder="Cardholder's Name" />
</div>
<div>
    <input type="text" placeholder="Exp" />
    <input type="text" placeholder="CVV" />
    <div className={styles.btn}>
    &#8594;
    </div>
</div>
</div>
   </div>
    
    
    </>
}