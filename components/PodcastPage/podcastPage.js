import styles from './podcastpage.module.css'
import Episode from './Episode'
import {useState} from 'react'

function PodcastPage() {
    const [title, setTitle] = useState("Title");
    const [videoid, setVideo] = useState("614339947");
    const [desc, setDesc] = useState("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores veniam recusandae est, eius nisi nobis? Quisquam nostrum repellat sequi tempore!");
    const [latestPage, setPage] = useState(true);
    var url = "https://player.vimeo.com/video/"+videoid+"?h=8f513583b1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479";
    console.log(url);
    var page = <iframe id={styles.iframe} src={url} frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen title="music.mp4"></iframe>
                
    if(latestPage){
        page = <div className={styles.poster}>
                    <h1 id={styles.posterTitle}>Latest Title</h1>
                    <button className={styles.button} onClick={()=>setPage(false)}>Listen now 🎙</button>
                </div>
    }

    return (
        <div style={{padding: "100vh 0px 0px 0px", display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            {page}
            <div className={styles.podcontext}>
                <h1 id={styles.titleFrame}>{title}</h1>
                <p id={styles.descFrame}>{desc}</p>
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

export default PodcastPage
