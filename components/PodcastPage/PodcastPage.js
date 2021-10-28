import styles from './podcastpage.module.css'
import Episode from './Episode'
import {useState} from 'react'

function PodcastPage() {
    const [title, setTitle] = useState("Reminiscence: In Conversation with Abinaya Selvam");
    const [videoid, setVideo] = useState("639975531");
    const [desc, setDesc] = useState("Kadhaipoma? Join us on this  episode where Abhinaya Selvam relives her college memories and also get to know about how an engineer turned producer made one of the best rom com film of the year!");
    const [latestPage, setPage] = useState(true);
    var url = "https://player.vimeo.com/video/"+videoid+"?h=8f513583b1&amp;badge=0&amp;autoplay=1&autopause=0&amp;player_id=0&amp;app_id=58479";
    // https://player.vimeo.com/video/639975531
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
                <img src={"/Banner1.jpg"} className={styles.poster}/>
            </button>
            : 
            <iframe id={styles.video} src={url} frameBorder="0" allowFullScreen></iframe>}
            <div id={styles.podpage} data-aos="fade-up">
                <div className={styles.podcontext}>
                    <p className={styles.PodcastDate}>Oct 1, 2020</p>
                    <h1 id={styles.titleFrame}>{title}</h1>
                    <p id={styles.descFrame}>{desc}</p>
                    <div className={styles.podcastSpeakers}>
                        <div>
                            <h3>Guest</h3>
                            <p>Abhinaya Selvam</p>
                        </div>
                        <div className={styles.hostSection}>
                            <h3>Host</h3>
                            <p>Harsha Vardan, Rachita Ravi</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id={styles.hrline}></div>
            <h1 id={styles.allepi}>ALL EPISODES</h1>
            <div id={styles.grid}>
                <Episode new={true} title={title} desc={desc} imageurl={"/Thumbnail1.jpg"} videoid={videoid} setTitle={setTitle} setDesc={setDesc} setVideo={setVideo} setPage={setPage} scroll={scrollToTop()}/>
            </div>
        </div>
    )
}

export default PodcastPage
