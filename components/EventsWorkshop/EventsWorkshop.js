import React,{useState} from 'react'
import styles from './eventsworkshop.module.css'
import EventsCard from './EventsCard';
import WorkshopCard from './WorkshopCard';

function EventsWorkshop() {
    const [events,setEvents] = useState(true);

    return (
        <div className={styles.events__workshop}>
            <button className={events ? `${styles.events__workshop__btn} ${styles.active}` : styles.events__workshop__btn} onClick={()=> setEvents(true)}>Events</button>
            <button className={!events ? `${styles.events__workshop__btn} ${styles.active}` : styles.events__workshop__btn} onClick={()=> setEvents(false)}>Workshop</button>

            {events ?
            <div className={styles.events__section}>
                <EventsCard />
            </div>
            :
            <div className={styles.events__section}>
                <WorkshopCard />
            </div>
            } 
        </div>
    )
}

export default EventsWorkshop
