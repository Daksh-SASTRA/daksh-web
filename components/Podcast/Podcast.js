import React from 'react'
import styles from'./podcast.module.css'
import Link from 'next/link'
import Buttons from '../Buttons/Buttons'


function Podcast() {
    return (
        <section className={styles.podcast}>
            <div className={`${styles.container__podcast}`}>
                <div className={styles.row__podcast}>
                    <div className={styles.col_lg_6}>
                        <div className={styles.image_container__podcast}>
                            <img className={styles.podcast__img_fluid} src={`/pod.png`} alt="dummy image"/>
                        </div>
                    </div>
                    <div className={styles.col_lg_6}>
                        <div className={styles.text_container__podcast}>
                            <h3 className={`${styles.podcast__h3} ${styles.theme_text}`}>Daksh Podcast </h3>
                            <p className={styles.podcast__p}>
                            {"Hosted and produced by Daksh, a series of engaging podcast episodes starring industry experts who offer their wisdom and mind-boggling anecdotes from their niche. If you're looking for a venture to kill boredom, you're at the right place!"}
                            </p>
                            {/* <Link href="/podcast"><a className={styles.button__podcast}>Podcast</a></Link> */}
                            <Link href="/podcast">
                                <div>
                                  <Buttons text="Podcast" radius="40px"/>
                                </div>
                            </Link >
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Podcast
