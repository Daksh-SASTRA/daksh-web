import React, { useState } from 'react'
import styles from './merch.module.css'
import MerchItem from "./Merchandise";
import tshirt from '../../public/shirtpreview/tee_front.webp'
import hoodie from '../../public/shirtpreview/hoodie_front.webp'


function Merch() {
    return (

        <div className={styles.merch_container}>
                <MerchItem merchName={"TSHIRT"} imageLink={tshirt} shoppingLink="/merch/tshirt"/>
                {/* <MerchItem merchName={"HOODIE"} imageLink={hoodie} shoppingLink="/merch/hoodie" /> */}
        </div>
    )
}
export default Merch;