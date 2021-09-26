// Assigned To Vishwananth & Vinai
// Background Colour - primaryBg

import styles from './podcastpage.module.css'
import Episode from './Episode'

function podcastPage() {
    return (
        <div style={{padding: "10vh 0 0 0", display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div id={styles.podpage}>
                <iframe id={styles.iframe} src="https://player.vimeo.com/video/614339947?h=8f513583b1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width={640} height={480} frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen title="music.mp4"></iframe>
                <div className={styles.podcontext}>
                    <h1>Latest Episode</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores veniam recusandae est, eius nisi nobis? Quisquam nostrum repellat sequi tempore!</p>
                    <button className={styles.button}>Listen now 🎙</button>
                </div>
            </div>
            <h1 id={styles.allepi}>All Episodes</h1>
            <div id={styles.grid}>
                <Episode title={"name"} desc={"Lorem Ipsum"} imageurl={"https://picsum.photos/300/200"}/>
                <Episode title={"name"} desc={"Lorem Ipsum"} imageurl={"https://picsum.photos/300/200"}/>
                <Episode title={"name"} desc={"Lorem Ipsum"} imageurl={"https://picsum.photos/300/200"}/>
                <Episode title={"name"} desc={"Lorem Ipsum"} imageurl={"https://picsum.photos/300/200"}/>
                <Episode title={"name"} desc={"Lorem Ipsum"} imageurl={"https://picsum.photos/300/200"}/>
            </div>
        </div>
    )
}

export default podcastPage
