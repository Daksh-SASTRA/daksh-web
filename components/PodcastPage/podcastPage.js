import styles from './podcastpage.module.css'
import Episode from './Episode'
import {useState} from 'react'

function podcastPage() {
    const [title, setTitle] = useState("Title");
    const [videoid, setVideo] = useState("614339947");
    const [desc, setDesc] = useState("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores veniam recusandae est, eius nisi nobis? Quisquam nostrum repellat sequi tempore!");
    const [latestPage, setPage] = useState(true);
    var url = "https://player.vimeo.com/video/"+videoid+"?h=8f513583b1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479";
    console.log(url);
    var page =  <>
                    <iframe id={styles.iframe} src={url} width={640} height={480} frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen title="music.mp4"></iframe>
                    <div className={styles.podcontext}>
                        <h1>{title}</h1>
                        <p>{desc}</p>
                    </div>
                </>
                
    if(latestPage){
        page = <div className={styles.poster}>
                    <h1>Latest Title</h1>
                    <button className={styles.button} onClick={()=>setPage(false)}>Listen now 🎙</button>
                </div>
    }

    return (
        <div style={{padding: "10vh 0px 0px 0px", display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div id={styles.podpage}>
                {page}
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
