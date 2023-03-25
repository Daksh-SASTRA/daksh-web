import React, { useState, useEffect } from 'react';
import styles from './eventsworkshop.module.css';
import { FcExpand, FcCollapse } from "react-icons/fc";

function HackathonsCard(props) {

    const [isExpanded, expand] = useState(false);
    const [islive,setlive] = useState(true);

    useEffect(() => {
        const d1 = new Date(props.data.dateTime);
        const d2 = new Date();
        if(d2>d1)
            setlive(false);
    },[]);
    
    return (
        <div className={styles.ecard} data-aos="fade-up">
            {props.data.poster ? <div className={styles.cardImg}><img src={props.data.poster} /></div> : ""}
            <div className={styles.cardContent}>
                <h5>{props.data.category}</h5>
                <h2>{props.data.title}</h2>
                <p>{isExpanded ? props.data.desc : props.data.desc.substring(0, 70) + '...'}</p>
                <div className={isExpanded ? styles.ecard_styles : styles.ecard_actions}>
                    {isExpanded ? <p >Fee: {props.data.fees}</p> : ""}

                    <div className={islive ? styles.register : styles.disabled}>
                        <a className={islive ? styles.register_btn : ''} href="#" target={islive ? "_parent" : ""} rel="noreferrer">{islive ? isExpanded ? "Register" : "Register" : "Closed"}</a>
                    </div>
                    {isExpanded ? "" : <div className={isExpanded ? "" : styles.register} onClick={() => expand(!isExpanded)}>
                        <a className={isExpanded ? '' : styles.register_btn} href="#" target={islive ? "_parent" : ""} rel="noreferrer">{isExpanded ? "" : "Learn More"}</a>
                    </div>}


                </div>
            </div>
        </div>
    )
}

function Contacts(props) {
    return (
        <div className = {styles.contacts}>
            {
                props.map((c) => <p key={c} >{c}</p>)
            }
        </div>
    )
}

function Timeline(props) {
    return (
        <div className = {styles.rules}>
            {
                props.map((r) => <p key={r} >{r}</p>)
            }
        </div>
    )
}


export default HackathonsCard
