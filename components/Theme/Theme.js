import React, {useState, useEffect} from 'react'
import styles from './theme.module.css'
import Buttons from '../Buttons/Buttons'
import Buttonstyles from '../Buttons/buttons.module.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Count from './count'
import Tag from './Tagline'
import ParticlesBg from './ParticlesBg';

function Theme() {
    const [name,setName] = useState("");
    const [launch,setLaunch] = useState(false);

    const [timeleft,setTimeleft] = useState(3);
    
    useEffect(()=> {
        const localName = localStorage.getItem("Name");
        if(localName){
            setTimeleft(0);
            setName(localName);
            setLaunch(true);
        }
    },[]);

    const notifyError = () => toast.error("Enter Name", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark"
    });

    const launchClick = () => {
        if(name.length < 3)
            notifyError();
        else{
            setLaunch(true);
            localStorage.setItem("Name",name);
        }
    }
    return (
        <div className={styles.theme__container}>
            {timeleft==0 && <div className={styles.overlay}></div>}
            {timeleft==0 ? 
            <Tag name={name}/>
            : 
            <div className={styles.theme__content}>
                <h3 className={styles.theme__header}>What&apos;s your name?</h3>
                <input type="text" name="name" id="" placeholder="Enter name" onChange={(event) => setName(event.target.value)} value={name} className={styles.theme__input}/>
                <div>
                    <button className={Buttonstyles.global_button} style={{borderRadius: "40px", border: "none"}} onClick={launchClick}>
                        {launch ? <Count time={timeleft} setTime={setTimeleft}/> : "Launch"}
                    </button>
                </div>
            </div>
            }
            {/* <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>

<lottie-player src="https://assets7.lottiefiles.com/private_files/lf30_Y45aue.json"  background="transparent"  speed="1" autoplay></lottie-player> */}
        </div>
    )
}

export default Theme




                