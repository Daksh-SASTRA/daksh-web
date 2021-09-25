import React from 'react'
import Image from 'next/image'
import styles from './nav.module.css'
import { IoMenu } from "react-icons/io5"

// Assigned To Vinai
// Background Colour - primaryBg

function nav() {

    var hnav = <div id={styles.hnav}>
                    <div className={styles.navbutton}>
                        <a className={styles.navlink} href="podcast">
                            Events/Workshops
                        </a>
                    </div>
                    <div className={styles.navbutton}>
                        <a className={styles.navlink} href="podcast">
                            Teams
                        </a>
                    </div>
                    <div className={styles.navbutton}>
                        <a className={styles.navlink} href="podcast">
                            Podcasts
                        </a>               
                    </div>
                    <div className={styles.navbutton}>
                        <IoMenu /> 
                    </div>
                </div>

    return (
        <div id={styles.navbar}>
            <a href="/">
                <Image src="/logo.png" height={50} width={100} />
            </a>
            {hnav}
        </div>
    )
}

export default nav
