import React, { useState } from 'react';
import styles from './eventsworkshop.module.css';

function EventsCard(props) {

    const [isExpanded, expand] = useState(false);

    return (
        <div className = {styles.ecard}>
            <h5>{props.category}</h5>
            <h2>{props.title}</h2>
            <p>{isExpanded ? props.desc : props.desc.substring(0,230)} . . .</p>         
            {isExpanded ? <h3>Rounds :</h3> : <div></div>}
            {isExpanded ? Rounds(props.rounds) : <div></div>}
            {isExpanded ? <h3>Rules :</h3> : <div></div>}
            {isExpanded ? Rules(props.rules) : <div></div>}
            {isExpanded ? <h3>Contacts :</h3> : <div></div>}
            {isExpanded ? Contacts(props.contacts) : <div></div>}

            <button id = {styles.expand} onClick = {() => expand(!isExpanded)}> ^ </button>
            <div className = {styles.ecard_actions}>
                <h5>Date : {props.date}</h5>     
                <h5>Time : {props.time}</h5>                       
                <button><a href = {props.register_link}>Register</a></button>
            </div>
        </div>
    )
}

function Contacts(props) {
    return (
        <div className = {styles.contacts}>
            {
                props.map((c) => <div key={c} >{c}</div>)
            }
        </div>
    )
}

function Rounds(props) {
    return (
        <ol className = {styles.rounds}>
            {
                props.map((r) => <li key={r} >{r}</li>)
            }
        </ol>
    )
}

function Rules(props) {
    return (
        <div className = {styles.rules}>
            {
                props.map((r) => <li key={r} >{r}</li>)
            }
        </div>
    )
}

export default EventsCard
