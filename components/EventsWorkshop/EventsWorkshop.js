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
                <EventsCard 
                    category = "Category"
                    title = "Title of the EventsCard"
                    desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                    date = "21/11/2021"
                    time = "21:48"
                    rounds = {
                        ["Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                        "when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                        "It has survived not only five centuries, but also the leap into electronic typesetting, "]
                    }    
                    rules = {
                        ["Lorem Ipsum is sihghmply dummy text of the printing and typesetting industry.",
                        "Lorem Ipsum has beghdghen the industry's standard dummy text ever since the 1500s",
                        "when an unknown pridghdghnter took a galley of type and scrambled it to make a type specimen book.",
                        "It has survived notdghgh only five centuries, but also the leap into electronic typesetting, "]
                    } 
                    contacts = {
                        [
                            "35565665 - sfdhbhg",
                            "35366566 - gdjujdj"
                        ]
                    }     
                    register_link = "https://www.google.com/forms/about/"   
                />
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
