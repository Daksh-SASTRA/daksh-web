import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './nav.module.css'

// Assigned To Vinai
// Background Colour - primaryBg

function nav() {
    return (
        <div id={styles.navbar}>
            <Image src="/logo.png" height={50} width={100} />
            <div className={styles.navbutton}>
                <Link href="google.com">
                    Events/Workshops
                </Link>
            </div>
            <div className={styles.navbutton}>
                <Link href="google.com">
                    Teams
                </Link>
            </div>
            <div className={styles.navbutton}>
                <Link href="google.com">
                    Podcasts
                </Link>               
            </div>
        </div>
    )
}

export default nav
