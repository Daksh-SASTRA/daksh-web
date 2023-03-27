import React, { useState, useEffect } from 'react';
import styles from './eventsworkshop.module.css';
import { HiDownload } from "react-icons/hi";

function EventsCard(props) {

    const [isExpanded, expand] = useState(false);
    const [islive,setlive] = useState(true);

    useEffect(() => {
        const d1 = new Date(props.data.dateTime);
        const d2 = new Date();
        if(d2>d1)
            setlive(false);
    },[]);
    
    return (
        <div className = {styles.ecard} data-aos="fade-up">
            {props.data.poster ? <div className={styles.cardImg}><img src={props.data.poster} /></div> : ""}
            <div className={styles.cardContent}>
                <h5>{props.data.category}</h5>
                <h2>{props.data.title}</h2>
                <p>{isExpanded ? props.data.desc : props.data.desc.substring(0, 70) + '...'}</p>
                {isExpanded && props.data.download ? <div className={styles.download} onClick={() => expand(!isExpanded)}>
                    <a className={styles.register_btn} href={props.data.download} target={"_blank"} rel="noreferrer"><i className={styles.down_icon}><HiDownload /></i>{"  Download"}</a>
                </div> : ""}
                <div className={isExpanded ? styles.ecard_styles : styles.ecard_actions}>
                    {isExpanded ? <p >Fee: {props.data.fees}</p> : ""}

                    <div className={islive ? styles.register : styles.disabled}>
                        <a className={islive ? styles.register_btn : ''} href={props.data.register_link} target={islive ? "_parent" : ""} rel="noreferrer">{islive ? isExpanded ? "Register" : "Register" : "Closed"}</a>
                    </div>
                    {isExpanded ? "" : <div className={isExpanded ? "" : styles.register} onClick={() => expand(!isExpanded)}>
                        <a className={isExpanded ? '' : styles.register_btn} href="#" target={islive ? "_parent" : ""} rel="noreferrer">{isExpanded ? "" : "Learn More"}</a>
                    </div>}


                </div>
            </div>
            {/* <h5>{props.data.category}</h5>
            <h2>{props.data.title}</h2>
            <p>{isExpanded ? props.data.desc : props.data.desc.substring(0,200) + '...'}</p>         
            {isExpanded && props.data.outcome ? <h3>Outcomes :</h3> : ""}
            <div className={styles.poster}>
            <div className={styles.poster_contact}>
            {isExpanded && props.data.outcome ? Rules(props.data.outcome) : ""}
            {isExpanded && props.data.prereq ? <h3>Prerequisite :</h3> : ""}
            {isExpanded && props.data.prereq ? Rules(props.data.prereq) : ""}
            {isExpanded && props.data.fee ? <h3>Price :</h3> : ""}
            {isExpanded && props.data.fee ? Rules(props.data.fee) : ""}
            {isExpanded ? <h3>Contacts :</h3> : ""}
            {isExpanded ? Contacts(props.data.contacts) : ""}
            </div>
            {isExpanded ? <img className={styles.poster_img} src={props.data.img}/> : ""}
            </div>
            <button id = {styles.expand} onClick = {() => expand(!isExpanded)}> {isExpanded ? <FcCollapse /> : <FcExpand />} </button>
            <div className = {styles.ecard_actions}>
                <h5>{props.data.date}</h5>   
                <h5>{props.data.time}</h5> 
                <div className={islive ? styles.register : styles.disabled}>                  
                    <a className={styles.register_btn} href={islive ? props.data.register_link : "/"} target={islive ? "_blank" : ""} rel="noreferrer">{islive ? "Register" : "Closed"}</a>
                </div>
            </div> */}
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

function Rules(props) {
    return (
        <div className = {styles.rules}>
            {
                props.map((r) => <p key={r} >{r}</p>)
            }
        </div>
    )
}

export default EventsCard
