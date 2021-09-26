import styles from './podcastpage.module.css'
import {useState} from 'react'
import Image from 'next/image'

function Episode(props){
    
    const [hover, onHover] = useState(false);

    return (
        <>
            <div className={styles.episode} onMouseEnter={()=>{onHover(true);}}  onMouseLeave={()=>{onHover(false);}}> 
                <img src={props.imageurl} alt={props.title} className={styles.eimg} />
                <div className={hover?styles.overlayEx:styles.overlay}>
                    {/* {props.title} */}
                    <button className={hover?styles.watchnow:styles.hide}>Watch Now</button>
                </div>
                <div id={styles.episodeContext}>
                    <h2>{props.title}</h2>
                    <p>{props.desc}</p>
                </div>
            </div>
        </>
    )
}

export default Episode