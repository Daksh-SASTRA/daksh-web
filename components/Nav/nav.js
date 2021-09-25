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
                    <div id={styles.menu}>
                        <IoMenu size={30}/> 
                    </div>
                </div>

    return (
        <div id={styles.navbar}>
            <a href="/">
                <img id={styles.logo} src="/logo.png"/>
            </a>
            {hnav}
        </div>
    )
}

export default nav
