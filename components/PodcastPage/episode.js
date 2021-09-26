import styles from './podcastpage.module.css'
import {useState} from 'react'

function episode(props){
    
    const [hover, onHover] = useState(false);

    return (
        <>
            <div className={styles.episode} onMouseEnter={()=>{onHover(true);}}  onMouseLeave={()=>{onHover(false);}}> 
                <img src={props.imageurl} className={styles.eimg}/>
                <div className={hover?styles.overlayEx:styles.overlay}>
                    {props.title}
                    <button className={hover?styles.watchnow:styles.hide}>Watch Now</button>
                </div>
            </div>
        </>
    )
}

export default episode