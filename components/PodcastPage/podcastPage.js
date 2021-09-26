// Assigned To Vishwananth & Vinai
// Background Colour - primaryBg

import styles from './podcastpage.module.css'
import Episode from './episode'


function podcastPage() {
    return (
        <div style={{padding: "10vh 0 0 0"}}>
            <div id={styles.podpage}>
                <iframe src="https://player.vimeo.com/video/614339947?h=8f513583b1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width={640} height={480} frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen title="music.mp4"></iframe>
            </div>
            <div id={styles.grid}>
                <Episode title={"name"} desc={"Lorem Ipsum"} imageurl={"https://picsum.photos/300/200"}/>
                <Episode title={"name"} desc={"Lorem Ipsum"} imageurl={"https://picsum.photos/300/200"}/>
            </div>
        </div>
    )
}

export default podcastPage
