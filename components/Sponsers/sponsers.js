import React from 'react'
import styles from './sponsers.module.css'

// Assigned To Neha
// Background Colour - white

function sponsers() {
    return (
        <section className={styles.sponsers}>
                <h3 className={styles.sponsers__h3}>Sponsers</h3>
                <div className={styles.sponser_slider}>
                        <img className={styles.sponser_infinite} src="https://picsum.photos/300/200"  alt="sponser-1" />
                        <img className={styles.sponser_infinite}  src="https://picsum.photos/300/200"  alt="sponser-2" />
                        <img className={styles.sponser_infinite}  src="https://picsum.photos/300/200"  alt="sponser-3" />
                        <img className={styles.sponser_infinite}  src="https://picsum.photos/300/200"  alt="sponser-4" />
                        <img className={styles.sponser_infinite}  src="https://picsum.photos/300/200"  alt="sponser-5" />
                        <img className={styles.sponser_infinite}  src="https://picsum.photos/300/200"  alt="sponser-6" />
                        <img className={styles.sponser_infinite}  src="https://picsum.photos/300/200"  alt="sponser-7" />
                        <img className={styles.sponser_infinite}  src="https://picsum.photos/300/200"  alt="sponser-8" />
                        <img className={styles.sponser_infinite}  src="https://picsum.photos/300/200"  alt="sponser-9" />
                        <img className={styles.sponser_infinite}  src="https://picsum.photos/300/200"  alt="sponser-10" />
                        <img className={styles.sponser_infinite}  src="https://picsum.photos/300/200"  alt="sponser-11" />
                        <img className={styles.sponser_infinite}  src="https://picsum.photos/300/200"  alt="sponser-12" />
                        <img className={styles.sponser_infinite}  src="https://picsum.photos/300/200"  alt="sponser-13" />
                        <img className={styles.sponser_infinite}  src="https://picsum.photos/300/200"  alt="sponser-14" />
                </div>
        </section>
    )
}
// https://picsum.photos/200/300
export default sponsers
