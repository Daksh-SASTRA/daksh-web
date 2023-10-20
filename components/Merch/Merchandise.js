import React, { useState } from 'react'
import styles from './merchandise.module.css'
import cstyles from '../Contact/contact.module.css';
import Image from 'next/image';
import side from '../../public/shirtpreview/Side.png'
import Buttons from '../Buttons/Buttons';
import Link from 'next/link';
import btn from '../Buttons/buttons.module.css';

// import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'

function Merch({merchName, imageLink, shoppingLink}) {
    return (
        <div className={styles.glassyCard}>
        <div className={styles.imageContainer}>
            <h1>{merchName}</h1>
            <div className={styles.merchImage}>
            <Image src={imageLink} alt={merchName}/>
            </div>
        </div>
        {/* <div className={btn.global_button}>
            <Link style={{borderRadius: "5px"}} href={shoppingLink} >SHOP NOW &rarr;</Link>
        </div> */}
        </div>
    )
}
export default Merch;