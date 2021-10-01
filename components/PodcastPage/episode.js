import styles from './podcastpage.module.css'
import {useState} from 'react'
import Image from 'next/image'
import {FaStar} from 'react-icons/fa'
import {AiFillPlayCircle} from 'react-icons/ai'

function episode(props) {
    return (
        <div className={styles.episode}>
            <img src={props.imageurl} alt={props.title} className={styles.eimg} />
            <div id={styles.episodeContext}>
                {props.title}
            </div>
            <div className={props.new?styles.ribbon:styles.noRibbon}>
                New
            </div>
            <div className={styles.overlay}>
                <button onClick={()=>{
                        props.scroll;
                        props.setTitle(props.title);
                        props.setDesc(props.desc);
                        props.setVideo(props.videoid);
                        props.setPage(false);
                    }} 
                    className={styles.watchnow}><AiFillPlayCircle /> Watch Now</button>
            </div>
        </div>
    )
}

export default episode