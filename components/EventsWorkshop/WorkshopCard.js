import React, { useState } from 'react';
import styles from './eventsworkshop.module.css';
import { FcExpand, FcCollapse } from "react-icons/fc";

function EventsCard(props) {

    const [isExpanded, expand] = useState(false);

    return (
        <div className = {styles.ecard} data-aos="fade-up">
            <h5>{props.data.category}</h5>
            <h2>{props.data.title}</h2>
            <p>{isExpanded ? props.data.desc : props.data.desc.substring(0,200) + '...'}</p>         
            {isExpanded && props.data.outcome ? <h3>Outcomes :</h3> : ""}
            {isExpanded && props.data.outcome ? Rules(props.data.outcome) : ""}
            {isExpanded && props.data.prereq ? <h3>Pre-Requisites :</h3> : ""}
            {isExpanded && props.data.prereq ? Rules(props.data.prereq) : ""}
            {isExpanded && props.data.fee ? <h3>Price :</h3> : ""}
            {isExpanded && props.data.fee ? Rules(props.data.fee) : ""}
            {isExpanded ? <h3>Contacts :</h3> : ""}
            {isExpanded ? Contacts(props.data.contacts) : ""}

            <button id = {styles.expand} onClick = {() => expand(!isExpanded)}> {isExpanded ? <FcCollapse /> : <FcExpand />} </button>
            <div className = {styles.ecard_actions}>
                <h5>{props.data.date}</h5>     
                <h5>{props.data.time}</h5>  
                <div>                  
                    <a href={props.data.register_link} target="_blank" rel="noreferrer">Register</a>
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
