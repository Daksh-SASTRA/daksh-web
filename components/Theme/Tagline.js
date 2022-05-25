import React, { useState, useEffect } from 'react'
import styles from './theme.module.css'

function Tagline({ name }) {
    const words = ["Green", "To", "Gold", "Green To Gold"];

    const [index, setIndex] = useState(0);
    const [word, setWord] = useState("");

    useEffect(() => {
        let counter = setInterval(() => {
            if (index == 4)
                clearInterval(counter);
            else {
                setWord(words[index]);
                setIndex(index + 1);
            }
        }, 750)
        return () => {
            clearInterval(counter);
        }
    });
    return (
        <div className={styles.tag}>
            <p className={styles.tag__p} data-aos="fade-down" data-aos-duration="5s">Congrats <b>{name.toUpperCase()}</b>! You have unlocked the Theme</p>
            <div className={styles.tag__div}>
                <h1 data-aos="zoom-in" data-aos-duration="5s" data-aos-anchor=".tag__p" className={styles.glitch}>
                    <span>transcending<br />reality</span>
                    transcending<br />reality
                    <span>transcending<br />reality</span>
                </h1>
            </div>
        </div>
    )
}

export default Tagline
