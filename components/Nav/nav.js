import React,{ useState } from 'react'
import styles from './nav.module.css'
import { IoMenu } from "react-icons/io5"

// Assigned To Vinai
// Background Colour - primaryBg

function nav() {
    const [navmenu, menuToggle] = useState(false);
    var hnav = <div id={navmenu?styles.vnav:styles.hnav}>
                    <div className={styles.navbutton}>
                        <a className={navmenu?styles.navlinkP:styles.navlink} href="podcast">
                            Events/Workshops
                        </a>
                    </div>
                    <div className={styles.navbutton}>
                        <a className={navmenu?styles.navlinkP:styles.navlink} href="podcast">
                            Teams
                        </a>
                    </div>
                    <div className={styles.navbutton}>
                        <a className={navmenu?styles.navlinkP:styles.navlink} href="podcast">
                            Podcasts
                        </a>               
                    </div>
                </div>

    return (
        <div id={styles.navbar}>
            <a href="/">
                <img id={styles.logo} src="/logo.png"/>
            </a>
            {hnav}
            <div id={styles.menu} onClick={() => menuToggle(!navmenu)}>
                <IoMenu size={30}/> 
            </div>
        </div>
    )
}

export default nav
