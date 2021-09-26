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
                            <a className={styles.button__about} href="#">  Teams </a>
                        </div>
                    </div>
                    <div className={styles.col_lg_6}>
                        <div className={styles.video_container__about}>
                            {/* <img className={styles.about__img_fluid}src="https://dummyimage.com/700x400/fff/000000&text=Daksh" alt="dummy image"/> */}
                            <iframe className={styles.about__video_size}  src="https://www.youtube.com/embed/pFL37QpQ5t0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
// width="560" height="315"
export default about
