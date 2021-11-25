import React,{useState} from 'react'
import styles from './schedule.module.css'
import ScheduleData from "../config/schedule.json";

function SchedulePage() {
    const [day,setDay] = useState(0);
    const [activebt,setActiveBt] = useState(0);
    

    return (
        <div>
            <div className={styles.heading}>SCHEDULE</div>
                <div className={styles.daybuttons}>
                    <button className={activebt ==0 ? styles.daybuttons__buttonactive : styles.daybuttons__button} onClick={()=> {setDay(0);setActiveBt(0);}}>Day 0</button>
                    <button className={activebt ==1 ? styles.daybuttons__buttonactive : styles.daybuttons__button} onClick={()=> {setDay(1);setActiveBt(1);}}>Day 1</button>
                    <button className={activebt ==2 ? styles.daybuttons__buttonactive : styles.daybuttons__button} onClick={()=> {setDay(2);setActiveBt(2);}}>Day 2</button>
            </div>
           
        
        {day == 0 || 1 || 2 ?
            <div className={styles.container}>
                <div className={styles.timeline}>
                    <ul className={styles.listofevents}>
                        {ScheduleData[day].events.map((e,i) =>
                            {
                                {return e.roundno==null ?
                                    <li key={i}>
                                        <div className={styles.timeline__content}> 
                                            <div className={styles.eventname}>{e.eventname}</div>
                                            <div className={styles.time}>
                                                Time{" : "+e.fromtime+" "}-                                          
                                                {" "+e.totime}
                                            </div>
                                        </div>
                                    </li> 
                                :
                    
                                    
                                    <li key={i}>
                                        <div className={styles.timeline__content}> 
                                            <div className={styles.eventname}>{e.eventname}</div>
                                            <div className={styles.round}>Round{" "+e.roundno}</div>
                                            <div className={styles.time}>
                                                Time{" : "+e.fromtime+" "}-                                          
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
