import React,{useEffect, useState} from 'react';
import styles from './eventsworkshop.module.css'
import EventsCard from './EventsCard';
import WorkshopCard from './WorkshopCard';
import HackathonsCard from './HackathonsCard';
import Events from '../config/events.json';
import Workshop from "../config/workshop.json";
import Hackathons from "../config/hackathons.json";

function EventsWorkshop({number}) {
    const [events,setEvents] = useState(number || 2);

    useEffect(() => {
        setEvents(number);
    },[number])

    return (
        <div className={styles.events__workshop}>
            <button className={(events==2) ? `${styles.events__workshop__btn} ${styles.active}` : styles.events__workshop__btn} onClick={()=> setEvents(2)}>Hackathons</button>
            <button className={(events==0) ? `${styles.events__workshop__btn} ${styles.active}` : styles.events__workshop__btn} onClick={()=> setEvents(0)}>Events</button>
            <button className={(events==1) ? `${styles.events__workshop__btn} ${styles.active}` : styles.events__workshop__btn} onClick={()=> setEvents(1)}>Workshop</button>

            {(events==0) ?
            <div className={styles.events__section}>
                {Events.map((event,i) => {
                    return <EventsCard data = {event} key={i}/>
                })}
                
            </div>
            : (events==1) ? 
            <div className={styles.events__section}>
                {Workshop.map((workshop,i) => {
                    return <WorkshopCard data = {workshop} key={i}/>
                })}
            </div>
            :
            <div className={styles.events__section}>
                {Hackathons.map((workshop,i) => {
                    return <HackathonsCard data = {workshop} key={i}/>
                })}
            </div>
            } 
        </div>
    )
}

export default EventsWorkshop
