import styles from './podcastpage.module.css'
import {useState} from 'react'
import Image from 'next/image'
import {FaStar} from 'react-icons/fa'

function Episode(props){
    
    const [hover, onHover] = useState(false);

    return (
        <>
            <div className={styles.episode} onMouseEnter={()=>{onHover(true);}}  onMouseLeave={()=>{onHover(false);}}>
                <img src={props.imageurl} alt={props.title} className={styles.eimg} />
                <div className={hover?styles.overlayEx:styles.overlay}>
                    <button onClick={()=>{
                            props.scroll;
                            props.setTitle(props.title);
                            props.setDesc(props.desc);
                            props.setVideo(props.videoid);
                            props.setPage(false);
                        }} 
                        className={hover?styles.watchnow:styles.hide}>Listen Now</button>
                </div>
                <div id={styles.episodeContext}>
                    {props.title}
                </div>
                {/* <div className={props.new?styles.newEpisode:styles.oldEpisode}>
                    <FaStar />&nbsp;New
                </div> */}
                <div className={props.new?styles.badge:styles.noBadge}>
    	            <i className={styles.left}></i>
    	            <i className={styles.right}></i>
    	                NEW&nbsp;&nbsp;
	            </div>
            </div>
        </>
    )
}

export default Episode