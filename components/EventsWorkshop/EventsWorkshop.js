import React,{useState} from 'react'
import styles from './eventsworkshop.module.css'
import EventsCard from './EventsCard';
import WorkshopCard from './WorkshopCard';
import Events from '../config/events.json';
import Workshop from "../config/workshop.json";

function EventsWorkshop() {
    const [events,setEvents] = useState(true);

    return (
        <div className={styles.events__workshop}>
            <button className={events ? `${styles.events__workshop__btn} ${styles.active}` : styles.events__workshop__btn} onClick={()=> setEvents(true)}>Events</button>
            {/* <button className={!events ? `${styles.events__workshop__btn} ${styles.active}` : styles.events__workshop__btn} onClick={()=> setEvents(false)}>Workshop</button> */}

            {events ?
            <div className={styles.events__section}>
                {Events.map((event,i) => {
                    return <EventsCard data = {event} key={i}/>
                })}
                
            </div>
            :
            <div className={styles.events__section}>
                {Workshop.map((workshop,i) => {
                    return <WorkshopCard data = {workshop} key={i}/>
                })}
            </div>
            } 
        </div>
    )
}

export default EventsWorkshop
