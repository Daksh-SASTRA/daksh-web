import React, { useState } from 'react'
import styles from './merch.module.css'
import cstyles from '../Contact/contact.module.css';
import Image from 'next/image';
import MerchItem from "./Merchandise";

import front from '../../public/shirtpreview/Front.png'
import back from '../../public/shirtpreview/Back.png'

import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'

function Merch() {

    return (
        <div className={styles.merch_container}>
                <MerchItem merchName={"TSHIRT"} imageLink={front} shoppingLink="/merch/tshirt"/>
                <MerchItem merchName={"HOODIE"} imageLink={back} shoppingLink="/merch/hoodie"/>
        </div>
    )
}
export default Merch;