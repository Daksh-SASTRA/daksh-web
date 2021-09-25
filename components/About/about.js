import React from 'react'
import Image from 'next/image'
import styles from './about.module.css'

// Assigned To Neha
// Background Colour - secondaryBg


function about() {
    return (
        <section className={styles.about}>
            <div className={`${styles.container__about}`}>
                <div className={styles.row__about}>
                    <div className={styles.col_lg_6}>
                        <div className={styles.text_container__about}>
                            <h3 className={styles.about__h3}>ABOUT US</h3>
                            <p className={styles.about__p}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <a href="#">Teams</a>
                        </div>
                    </div>
                    <div className={styles.col_lg_6}>
                        <div className={styles.image_container__about}>
                            <img className={styles.about__img_fluid}src="https://dummyimage.com/700x400/fff/000000&text=Daksh" alt="dummy image"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default about
