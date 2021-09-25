import React from 'react'
import styles from './newsletter.module.css'

// Assigned To Sai Prasanna
// Background Colour - secondaryBg

function newsletter() {
    return (
        <div className={styles.maincontainer}>

        <h3 >Stay Updated!</h3>
        <div className={styles.container1}>
           
            <input type="email" name="myemail" id="" placeholder="Enter Email"/>
            <button className={styles.btn}>Join NOW</button>
        </div>
    </div>
    )
}


export default newsletter
