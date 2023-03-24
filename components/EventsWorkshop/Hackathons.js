import React from 'react';
import styles from './eventsworkshop.module.css'
import EventsCard from './EventsCard';
import Dummy from "../config/dummy.json";
function Hackathons() {
    return (
        <div className={styles.events__workshop}>
            <div className={styles.events__section}>
                {Dummy.map((event, i) => {
                    return <EventsCard data={event} key={i} />
                })}
            </div>
        </div>
    )
}

export default Hackathons