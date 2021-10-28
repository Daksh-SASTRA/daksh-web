import styles from './podcastpage.module.css'
import {AiFillPlayCircle} from 'react-icons/ai'

function Episode(props) {
    return (
        <div className={styles.episode} data-aos="fade-up">
            <img src={props.imageurl} alt={props.title} className={styles.eimg} />
            <div id={styles.episodeContext}>
                {props.title.substr(0,50)}
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

export default Episode