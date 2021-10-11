import React,{useEffect, useState} from 'react'
import styles from './newsletter.module.css'
import Buttons from '../Buttons/Buttons'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

function Newsletter() {
    const [email,setEmail] = useState("");
    const [subs,setSubs] = useState("Subscribe");

    const notifySuccess = (msg) => toast.success(msg, {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark"
    });

    const notifyError = () => toast.error("Invalid Email", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark"
    });

    function validateEmail(e) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(e).toLowerCase());
    }

    const subscribe = async (e) => {
        e.preventDefault();
        setSubs("Subscribing..")
        if(validateEmail(email)){
            try{
                const response = await axios.post("/api/newsletter", {email});
                const { data } = response;
                notifySuccess(data.msg);
                setEmail("");
                setSubs("Subscribed");
            }catch (e) {
                notifyError();
            }
        }
        else
            notifyError();
        setSubs("Subscribe");
    }

    return (
        <div className={styles.maincontainer} id="newsletter">
            <h3>Stay Updated!</h3>
            <form>
                <div className={styles.input_container}>
                    <input type="email" name="myemail" id="" placeholder="Enter Email" onChange={(event) => setEmail(event.target.value)} value={email}/>
                    {/* <button className={styles.btn}>Subscribe</button> */}
                    <div style={{margin: "1rem"}}>
                    <button type="submit" onClick={subscribe} className={styles.btn}>{subs}</button>
                    </div>
                </div>
            </form>
        </div>
    )
}


export default Newsletter
