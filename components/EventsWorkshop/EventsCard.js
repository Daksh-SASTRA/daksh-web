import React, { useState, useEffect } from 'react';
import styles from './eventsworkshop.module.css';
import { HiDownload } from "react-icons/hi";

function EventsCard(props) {

    const [isExpanded, expand] = useState(false);
    const [islive, setlive] = useState(true);

    useEffect(() => {
        const d1 = new Date(props.data.dateTime);
        const d2 = new Date();
        if (d2 > d1)
            setlive(false);
    }, []);
    return (
        <div className={styles.ecard} data-aos="fade-up">
            {/* {props.data.poster ? <div className={styles.cardImg}><img src={props.data.poster} /></div> : ""} */}
            <div className={styles.cardContent}>
                <h5>{props.data.category}</h5>
                <h2>{props.data.title}</h2>
                <p>{isExpanded ? props.data.desc : props.data.desc.substring(0, 70) + '...'}</p>
                {isExpanded ? <div className={styles.download} onClick={() => expand(!isExpanded)}>
                    <a className={styles.register_btn} href={props.data.download} target={"_blank"} rel="noreferrer"><i className={styles.down_icon}><HiDownload /></i>{"  Download"}</a>
                </div> : ""}

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

            {/* <h5>{props.data.category}</h5>
            <h2>{props.data.title}</h2>
            <p>{isExpanded ? props.data.desc : props.data.desc.substring(0, 200) + '...'}</p> */}
            {/* <div className={styles.poster} >
                <div className={styles.poster_contact} >
                    {isExpanded && props.data.rounds ? <h3>Rounds :</h3> : ""}
                    {isExpanded && props.data.rounds ? Rules(props.data?.rounds || []) : ""}
                    {isExpanded && props.data.rules ? <h3>Rules :</h3> : ""}
                    {isExpanded && props.data.rules ? Rules(props.data?.rules || []) : ""}
                    {isExpanded && props.data.judging ? <h3>Judging Criteria :</h3> : ""}
                    {isExpanded && props.data.judging ? Rules(props.data?.judging || []) : ""}
                    {isExpanded && props.data.prizes ? <h3>Prize :</h3> : ""}
                    {isExpanded ? Rules(props.data?.prizes || []) : ""}
                    {isExpanded && props.data.contacts ? <h3>Contacts :</h3> : ""}
                    {isExpanded ? Contacts(props.data?.contacts || []) : ""}
                </div>
                {isExpanded && props.data.poster ? <img src={props.data.poster} /> : ""}

            </div> */}



            {/* <button id={styles.expand} onClick={() => expand(!isExpanded)}> {isExpanded ? <FcCollapse /> : <FcExpand />} </button>   */}
            {/* <div className={isExpanded ? styles.ecard_styles : styles.ecard_actions}>
                <h5>{props.data.date}</h5>
                <h5>{props.data.time}</h5> 
                <div className={islive ? styles.register : styles.disabled}>
                    <a className={islive ? styles.register_btn : ''} href={islive ? props.data.register_link : "/"} target={islive ? "_blank" : ""} rel="noreferrer">{islive ? "Register" : "Closed"}</a>
                </div>
                {isExpanded ? <p >Fee: {props.data.fees}</p> : ""}

                <div className={islive ? styles.register : styles.disabled}>
                    <a className={islive ? styles.register_btn : ''} href="#" target={islive ? "_parent" : ""} rel="noreferrer">{islive ? isExpanded ? "Register" : "Register" : "Closed"}</a>
                </div>
                {isExpanded ? "" : <div className={isExpanded ? "" : styles.register} onClick={() => expand(!isExpanded)}>
                    <a className={isExpanded ? '' : styles.register_btn} href="#" target={islive ? "_parent" : ""} rel="noreferrer">{isExpanded ? "" : "Learn More"}</a>
                </div>}


            </div> */}
        </div>
    )
}

function Contacts(props) {
    return (
        <div className={styles.contacts}>
            {
                props.map((c) => <p key={c} >{c}</p>)
            }
        </div>
    )
}

function Rules(props) {
    return (
        <div className={styles.rules}>
            {
                props.map((r) => <p key={r} >{r}</p>)
            }
        </div>
    )
}

export default EventsCard
