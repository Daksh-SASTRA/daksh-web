import React from 'react';
import styles from './eventsworkshop.module.css'
import ctstyles from "../Contact/contact.module.css";
import HackathonsCard from './HackathonsCard';
import Hackathon from "../config/hackathons2k23.json";
function Hackathons() {
    return (
        <div className={styles.events__workshop}>

            <div
                className={`${ctstyles.contactHeadingMain} ${ctstyles.flexCenter}`}
                data-aos="fade-down"
            >
                HACKATHONS
            </div>
            <div className={styles.events__section}>
                {Hackathon.map((hackathon, i) => {
                    return <HackathonsCard data={hackathon} key={i} />
                })}
            </div>
        </div>
    )
}

export default Hackathons