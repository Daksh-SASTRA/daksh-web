import React from 'react'
import styles from './banner.module.css'

// Assigned To Sivapriya
// Background Colour - primaryBg

function banner() {
    
    return (
        <>
        <div className={styles.topcover}>
        <div className={styles.divwrap}>
           <div className={styles.divbanner}>
               <div className={styles.divbanner__headtext}>
                   DAKSH IS HAPPENING
               </div>
               <div className={styles.divbanner__descriptiontext}>
                   BUILD THINGS THAT MATTER
               </div>
               <div className={styles.divbanner__eveandwsbtn}>
                 Events and Workshops
               </div>
              
           </div>
           <div className={styles.divbannerfadebtm}>
                    
            </div>
          
        </div>
      
       
       
    </div>
   
   </>
    )
}

export default banner
