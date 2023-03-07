import React, { useState } from 'react'
import styles from './merch.module.css'
import cstyles from '../Contact/contact.module.css';
import Image from 'next/image';

import front from '../../public/shirtpreview/Front.png'
import back from '../../public/shirtpreview/Back.png'
import side from '../../public/shirtpreview/Side.png'

import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'

function Merch() {

    const shirt = [front, side, back]

    const [shirtIndex, setShirtIndex] = useState(0)

    const goToNext = () => {
        if (shirtIndex >= 2) {
            setShirtIndex(0)
        }
        else {
            setShirtIndex(() => setShirtIndex(shirtIndex + 1))
        }
    }

    const goToPrev = () => {
        if (shirtIndex <= 0) {
            setShirtIndex(2)
        }
        else {
            setShirtIndex(() => setShirtIndex(shirtIndex - 1))
        }
    }

    return (
        <div className={styles.merch_container}>
            <div className={`${styles.merchHeadingMain} ${cstyles.flexCenter}`} data-aos="fade-down">
                M E R C H A N D I S E
            </div>

            <div className={styles.merch__details} data-aos="fade-down">
                {/* <div className={styles.merch__imageswrap}>
            <div className={styles.merch__element}>
               <p className={styles.merch__elem__header}>SIZE-CHART</p>
                <img src='/s1.jpeg' alt='sizechart' className={styles.merch__image}></img>

            </div>
            <div className={styles.merch__element}>
                <p className={styles.merch__elem__header}>T-SHIRT DESIGN</p>
                <img src='/t1.jpg' alt='teedesign'  className={styles.merch__image}></img>

            </div>

        </div> */}
                <div className={styles.merch__imagecontainer}>
                    <div className={styles.merch__imageoperation} onClick={goToPrev} ><FaArrowLeft /></div>
                    <div className={styles.merch__imageshirt}><Image src={shirt[shirtIndex]} alt="teedesign" /></div>
                    <div className={styles.merch__imageoperation} onClick={goToNext}><FaArrowRight /></div>
                </div>
                <div className={styles.merch__desccontainer}>
                    <div className={styles.merch__header}>DAKSH T-Shirt</div>
                    <div className={styles.merch__description}>
                        <p>Available sizes:</p>
                        <div className={styles.merch__sizecontainer}>
                            <span className={styles.merch__sizebubble}>XS</span>
                            <span className={styles.merch__sizebubble}>S</span>
                            <span className={styles.merch__sizebubble}>M</span>
                            <span className={styles.merch__sizebubble}>L</span>
                            <span className={styles.merch__sizebubble}>XL</span>
                            <span className={styles.merch__sizebubble}>2XL</span>
                            <span className={styles.merch__sizebubble}>3XL</span>
                        </div>
                    </div>
                    <div className={styles.merch__prizetag}> ₹250/-</div>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSeIFUaR5NXs-9Eyy2wgSvpHHXlXaYox8agwp1UJGVtgXh5HJw/viewform" className={styles.merch__buy}>BUY</a>
                </div>
            </div>
        </div>
    )
}
export default Merch;