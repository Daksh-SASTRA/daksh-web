import React from 'react'
import styles from './banner.module.css'
import Link from 'next/link'
// Assigned To Sivapriya
// Background Colour - primaryBg

function banner() {
    
    return (
        <>
        <div className={styles.topcover}>
            <div className={styles.divbanner}>
                <h1 className={styles.divbanner__headtext}>
                    BUILD THINGS THAT MATTER
                </h1>
                <h3 className={styles.divbanner__descriptiontext}>
                    Daksh is Happening very soon
                </h3>
                <Link href="/">
                    <a className={styles.divbanner__eveandwsbtn}>
                        Events and Workshops
                    </a>
                </Link >
            </div>
            <div className={styles.divbannerfadebtm}>
            </div>
        </div>
   
   </>
    )
}

export default banner
