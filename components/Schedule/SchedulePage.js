import React,{useState} from 'react'
import styles from './schedule.module.css'
import ScheduleData from "../config/schedule.json";
import cstyles from '../Contact/contact.module.css';

function SchedulePage() {
    const [day,setDay] = useState(0);
    const [activebt,setActiveBt] = useState(0);

    const getEventName = (eventName) => {
        const name = eventName.split(' ');
        return name.map(n => {
            const t = n.toLowerCase();
            return t.charAt(0).toUpperCase() + t.slice(1);
        }).join(" ");
    }
    
    return (
        <div className={styles.schedule__container}>
            <div className={`${cstyles.contactHeadingMain} ${cstyles.flexCenter}`} data-aos="fade-down">
                S C H E D U L E
            </div>
            <div className={styles.daybuttons}>
                <button className={activebt == 0 ? styles.daybuttons__buttonactive : styles.daybuttons__button} onClick={()=> {setDay(0);setActiveBt(0);}}>Day 0</button>
                <button className={activebt == 1 ? styles.daybuttons__buttonactive : styles.daybuttons__button} onClick={()=> {setDay(1);setActiveBt(1);}}>Day 1</button>
                <button className={activebt == 2 ? styles.daybuttons__buttonactive : styles.daybuttons__button} onClick={()=> {setDay(2);setActiveBt(2);}}>Day 2</button>
                <button className={activebt == 3 ? styles.daybuttons__buttonactive : styles.daybuttons__button} onClick={()=> {setDay(3);setActiveBt(3);}}>Day 3</button>
            </div>
           
        
        {day == 0 || 1 || 2 || 3?
            <div className={styles.container} data-aos="fade-up">
                <div className={styles.timeline}>
                    <ul className={styles.listofevents}>
                        {ScheduleData[day].events.map((e,i) =>
                            {
                                {return e.roundno==null ?
                                    <li key={i}>
                                        <div className={styles.timeline__content}> 
                                            <div className={styles.eventname}>{getEventName(e.eventname)}</div>
                                            
                                            <div className={styles.venue}>
                                            {e.venue}
                                            </div>
                                            <div className={styles.time}>
                                                {e.fromtime+" "}-                                          
                                                {" "+e.totime}
                                            </div>
                                        </div>
                                    </li> 
                                :   
                                    <li key={i}>
                                        <div className={styles.timeline__content}> 
                                            <div className={styles.round}>Round{" "+e.roundno}</div>
                                            <div className={styles.eventname}>{e.eventname}</div>
                                            <div className={styles.time}>
                                                {e.fromtime+" "}-                                          
                                                {" "+e.totime}
                                            </div>
                                        </div>
                                    </li> 
                                }; 
                            })
                        }
                    </ul>
                </div>

            </div>
        :
            <div>
                
            </div>
        }
        </div>
    )
}

export default SchedulePage;
