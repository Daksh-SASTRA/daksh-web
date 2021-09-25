import React from 'react'
import Image from 'next/image'
import styles from './nav.module.css'

// Assigned To Vinai
// Background Colour - primaryBg

function nav() {
    return (
        <div id={styles.navbar}>
            <Image src="/logo.png" height={50} width={100} />
        </div>
    )
}

export default nav
