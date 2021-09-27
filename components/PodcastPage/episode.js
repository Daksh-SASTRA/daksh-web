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
                    <button className={hover?styles.watchnow:styles.hide}>Listen Now</button>
                </div>
                <div id={styles.episodeContext}>
                    {props.title}
                </div>
            </div>
        </>
    )
}

export default Episode