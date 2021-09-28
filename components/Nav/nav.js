import React,{ useState } from 'react'
import styles from './nav.module.css'
import { IoMenu } from "react-icons/io5"
import {MdClose} from "react-icons/md"
import Link from 'next/link'

// Assigned To Vinai
// Background Colour - primaryBg

function nav() {
    const [navmenu, menuToggle] = useState(false);
    var hnav = <div id={navmenu ? styles.vnav : styles.hnav }>
                    <div className={styles.navbutton}>
                        <Link href="/">
                            <a className={styles.navlink}>
                                Events/Workshops
                            </a>
                        </Link>
                    </div>
                    <div className={styles.navbutton}>
                        <Link href="/">
                            <a className={styles.navlink}>
                                Teams
                            </a>
                        </Link>
                    </div>
                    <div className={styles.navbutton}>
                        <Link href="/podcast" >
                            <a className={styles.navlink}>
                                Podcasts
                            </a>  
                        </Link >             
                    </div>
                </div>

    return (
        <nav id={styles.navbar}>
            <Link href="/">
                <img id={styles.logo} src="/logo.png"/>
            </Link>
            {hnav}
            {navmenu ?
            <div id={styles.menu} onClick={() => menuToggle(!navmenu)}>
                <MdClose size={35}/> 
            </div>
            :
            <div id={styles.menu} onClick={() => menuToggle(!navmenu)}>
                <IoMenu size={35}/> 
            </div>
            }
        </nav>
    )
}

export default nav
