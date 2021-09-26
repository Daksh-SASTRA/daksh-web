import styles from './podcastpage.module.css'

function episode(props){
    
    return (
        <>
            <div className={styles.episode} onMouseEnter={()=>{}}>
                <img src={props.imageurl} />
                <div className={styles.overlay}>
                    {props.title}
                </div>
            </div>
        </>
    )
}

export default episode