import React from 'react'
import styles from './merch.module.css'
import cstyles from '../Contact/contact.module.css';

function Merch(){
    return(
    <div className={styles.merch_container}>
    <div className={`${cstyles.contactHeadingMain} ${cstyles.flexCenter}`} data-aos="fade-down">
        M E R C H A N D I S E
    </div>
    <div className={styles.merch__details}>
        <div className={styles.merch__imageswrap}>
            <div className={styles.merch__element}>
               <p className={styles.merch__elem__header}>S I Z E C H A R T</p>
                <img src='/s1.jpeg' alt='sizechart' className={styles.merch__chart}></img>
                
            </div>
            <div className={styles.merch__element}>
                <p className={styles.merch__elem__header}>T S H I R T D E S I G N</p>
                <img src='/t1.jpg' alt='teedesign'  className={styles.merch__image}></img>
                
            </div>
           
        </div>
        <button type='button' className={styles.merch__buy}>BUY</button>
    </div>
    </div>
    )
}
export default Merch;