import React from 'react'
import styles from'./podcast.module.css'
import Link from 'next/link'

function Podcast() {
    return (
        <section className={styles.podcast}>
            <div className={`${styles.container__podcast}`}>
                <div className={styles.row__podcast}>
                    <div className={styles.col_lg_6}>
                        <div className={styles.image_container__podcast}>
                            <img className={styles.podcast__img_fluid}src="https://dummyimage.com/700x400/fff/000000&text=Daksh" alt="dummy image"/>
                        </div>
                    </div>
                    <div className={styles.col_lg_6}>
                        <div className={styles.text_container__podcast}>
                            <h3 className={styles.podcast__h3}>Daksh Podcast </h3>
                            <p className={styles.podcast__p}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <Link href="/podcast"><a className={styles.button__podcast}>Podcast</a></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Podcast
