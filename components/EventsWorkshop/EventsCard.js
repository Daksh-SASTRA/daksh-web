import React, { useState } from 'react';
import styles from './eventsworkshop.module.css';
import { FcExpand, FcCollapse } from "react-icons/fc";

function EventsCard(props) {

    const [isExpanded, expand] = useState(false);

    return (
        <div className = {styles.ecard}>
            <h5>{props.data.category}</h5>
            <h2>{props.data.title}</h2>
            <p>{isExpanded ? props.data.desc : props.data.desc.substring(0,230)} . . .</p>         
            {isExpanded ? <h3>Rounds :</h3> : <div></div>}
            {isExpanded ? Rounds(props.data.rounds) : <div></div>}
            {isExpanded ? <h3>Rules :</h3> : <div></div>}
            {isExpanded ? Rules(props.data.rules) : <div></div>}
            {isExpanded ? <h3>Contacts :</h3> : <div></div>}
            {isExpanded ? Contacts(props.data.contacts) : <div></div>}

            <button id = {styles.expand} onClick = {() => expand(!isExpanded)}> {isExpanded ? <FcCollapse /> : <FcExpand />} </button>
            <div className = {styles.ecard_actions}>
                <h5>Date : {props.data.date}</h5>     
                <h5>Time : {props.data.time}</h5>                       
                <a href = {props.data.register_link}>Register</a>
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

function Rounds(props) {
    return (
        <ol className = {styles.rounds}>
            {
                props.map((r) => <p key={r} >{r}</p>)
            }
        </ol>
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
