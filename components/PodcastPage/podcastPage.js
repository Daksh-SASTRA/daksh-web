import styles from './podcastpage.module.css'
import Episode from './episode'
import {useState} from 'react'
import { BsFillPlayFill } from "react-icons/bs"
import Image from 'next/image'

function podcastPage() {
    const [title, setTitle] = useState("Ep 1. Daskh Podcast Title ");
    const [videoid, setVideo] = useState("614339947");
    const [desc, setDesc] = useState("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
    const [latestPage, setPage] = useState(true);
    var url = "https://player.vimeo.com/video/"+videoid+"?h=8f513583b1&amp;badge=0&amp;autoplay=1&autopause=0&amp;player_id=0&amp;app_id=58479";

    function scrollToTop(){
        if(!latestPage){
            if (process.browser) {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }
        }
      };

    return (
        <div>
            {latestPage ? 
            <button className={styles.posterBtn} onClick={()=>setPage(false)}>
                <img src={"/PodcastTemplate.jpg"} className={styles.poster}/>
            </button>
            : 
            <iframe id={styles.video} src={url} frameBorder="0" allowFullScreen></iframe>}
            <div id={styles.podpage}>
                <div className={styles.podcontext}>
                    <p className={styles.PodcastDate}>Sep 19, 2020</p>
                    <h1 id={styles.titleFrame}>{title}</h1>
                    <p id={styles.descFrame}>{desc}</p>
                    <div className={styles.podcastSpeakers}>
                        <div>
                            <h3>Guest</h3>
                            <p>Guest Name</p>
                        </div>
                        <div className={styles.hostSection}>
                            <h3>Host</h3>
                            <p>Host Name 1, Host Name 2</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id={styles.hrline}></div>
            <h1 id={styles.allepi}>ALL EPISODES</h1>
            <div id={styles.grid}>
                <Episode new={true} title={"Ep 1. Daskh Podcast Title"} desc={"Lorem dfgiuh goiujh dtgohoi h Ipsum1"} imageurl={"https://picsum.photos/300/200"} videoid={"614339947"} setTitle={setTitle} setDesc={setDesc} setVideo={setVideo} setPage={setPage} scroll={scrollToTop()}/>
                <Episode new={false} title={"name2"} desc={"Lorem dgou ig ouihgo idh dgoijh oi Ipsum2"} imageurl={"https://picsum.photos/300/200"} videoid={"614334522"} setTitle={setTitle} setDesc={setDesc} setVideo={setVideo} setPage={setPage} scroll={scrollToTop()}/>
                <Episode new={false} title={"name3"} desc={"Lorem dghoij odgoij dgihj dghoij dgopihj Ipsum3"} imageurl={"https://picsum.photos/300/200"} videoid={"614273659"} setTitle={setTitle} setDesc={setDesc} setVideo={setVideo} setPage={setPage} scroll={scrollToTop()}/>
                <Episode new={false} title={"name4"} desc={"Lorem  poijdh poijdg hpodjh pojdghpoj dgIpsum4"} imageurl={"https://picsum.photos/300/200"} videoid={"614339947"} setTitle={setTitle} setDesc={setDesc} setVideo={setVideo} setPage={setPage} scroll={scrollToTop()}/>
                <Episode new={false} title={"name2"} desc={"Lorem dgou ig ouihgo idh dgoijh oi Ipsum2"} imageurl={"https://picsum.photos/300/200"} videoid={"614334522"} setTitle={setTitle} setDesc={setDesc} setVideo={setVideo} setPage={setPage} scroll={scrollToTop()}/>
            </div>
        </div>
    )
}

export default podcastPage
