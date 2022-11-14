import React from 'react'
import styles from './merch.module.css'
import cstyles from '../Contact/contact.module.css';

function Merch(){
    return(
    <div className={styles.merch_container}>
    <div className={`${styles.merchHeadingMain} ${cstyles.flexCenter}`} data-aos="fade-down">
        M E R C H A N D I S E
    </div>
    <div className={styles.merch__details} data-aos="fade-down">
        <div className={styles.merch__imageswrap}>
            <div className={styles.merch__element}>
               <p className={styles.merch__elem__header}>SIZE-CHART</p>
                <img src='/s1.jpeg' alt='sizechart' className={styles.merch__image}></img>
                
            </div>
            <div className={styles.merch__element}>
                <p className={styles.merch__elem__header}>T-SHIRT DESIGN</p>
                <img src='/t1.jpg' alt='teedesign'  className={styles.merch__image}></img>
                
            </div>
           
        </div>
        <a href="https://rzp.io/l/L3EXYzRK" className={styles.merch__buy}>BUY</a>
    </div>
    </div>
    )
}
export default Merch;