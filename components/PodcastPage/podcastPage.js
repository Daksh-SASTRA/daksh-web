import styles from './podcastpage.module.css'
import Episode from './Episode'
import {useState} from 'react'
import { BsFillPlayFill } from "react-icons/bs"

function PodcastPage() {
    const [title, setTitle] = useState("Title");
    const [videoid, setVideo] = useState("614339947");
    const [desc, setDesc] = useState("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores veniam recusandae est, eius nisi nobis? Quisquam nostrum repellat sequi tempore!");
    const [latestPage, setPage] = useState(true);
    var url = "https://player.vimeo.com/video/"+videoid+"?h=8f513583b1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479";
   
    var page = <iframe id={styles.video} src={url} frameBorder="0" allowFullScreen></iframe>

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

    if(latestPage){
        page = <div className={styles.poster}>
                    <h1 id={styles.posterTitle}>Latest Title</h1>
                    <button className={styles.button} onClick={()=>setPage(false)}>
                        <BsFillPlayFill size={30}/>&nbsp;
                        Listen now 
                    </button>
                </div>
    }

    return (
        <div style={{padding: "10vh 0px 0px 0px", display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div id={styles.podpage}>               
                {page}
                <div className={styles.podcontext}>
                    <h1 id={styles.titleFrame}>{title}</h1>
                    <p id={styles.descFrame}>{desc}</p>
                </div>
            </div>
            <div id={styles.hrline}></div>
            <h1 id={styles.allepi}>ALL EPISODES</h1>
            <div id={styles.grid}>
                <Episode new={true} title={"name1"} desc={"Lorem dfgiuh goiujh dtgohoi h Ipsum1"} imageurl={"https://picsum.photos/300/200"} videoid={"614339947"} setTitle={setTitle} setDesc={setDesc} setVideo={setVideo} setPage={setPage} scroll={scrollToTop()}/>
                <Episode new={false} title={"name2"} desc={"Lorem dgou ig ouihgo idh dgoijh oi Ipsum2"} imageurl={"https://picsum.photos/300/200"} videoid={"614334522"} setTitle={setTitle} setDesc={setDesc} setVideo={setVideo} setPage={setPage} scroll={scrollToTop()}/>
                <Episode new={false} title={"name3"} desc={"Lorem dghoij odgoij dgihj dghoij dgopihj Ipsum3"} imageurl={"https://picsum.photos/300/200"} videoid={"614273659"} setTitle={setTitle} setDesc={setDesc} setVideo={setVideo} setPage={setPage} scroll={scrollToTop()}/>
                <Episode new={false} title={"name4"} desc={"Lorem  poijdh poijdg hpodjh pojdghpoj dgIpsum4"} imageurl={"https://picsum.photos/300/200"} videoid={"614339947"} setTitle={setTitle} setDesc={setDesc} setVideo={setVideo} setPage={setPage} scroll={scrollToTop()}/>
                <Episode new={true} title={"name5"} desc={"Lorem h;oj thpijdg phoijg hiogjdh ipjdgihjioIpsum5"} imageurl={"https://picsum.photos/300/200"} videoid={"614334522"} setTitle={setTitle} setDesc={setDesc} setVideo={setVideo} setPage={setPage} scroll={scrollToTop()}/>
                <Episode new={false} title={"name5"} desc={"Lorem h;oj thpijdg phoijg hiogjdh ipjdgihjioIpsum5"} imageurl={"https://picsum.photos/300/200"} videoid={"614334522"} setTitle={setTitle} setDesc={setDesc} setVideo={setVideo} setPage={setPage} scroll={scrollToTop()}/>
                <Episode new={false} title={"name5"} desc={"Lorem h;oj thpijdg phoijg hiogjdh ipjdgihjioIpsum5"} imageurl={"https://picsum.photos/300/200"} videoid={"614334522"} setTitle={setTitle} setDesc={setDesc} setVideo={setVideo} setPage={setPage} scroll={scrollToTop()}/>
                <Episode new={true} title={"name5"} desc={"Lorem h;oj thpijdg phoijg hiogjdh ipjdgihjioIpsum5"} imageurl={"https://picsum.photos/300/200"} videoid={"614334522"} setTitle={setTitle} setDesc={setDesc} setVideo={setVideo} setPage={setPage} scroll={scrollToTop()}/>
                <Episode new={true} title={"name5"} desc={"Lorem h;oj thpijdg phoijg hiogjdh ipjdgihjioIpsum5"} imageurl={"https://picsum.photos/300/200"} videoid={"614334522"} setTitle={setTitle} setDesc={setDesc} setVideo={setVideo} setPage={setPage} scroll={scrollToTop()}/>
                <Episode new={false} title={"name5"} desc={"Lorem h;oj thpijdg phoijg hiogjdh ipjdgihjioIpsum5"} imageurl={"https://picsum.photos/300/200"} videoid={"614334522"} setTitle={setTitle} setDesc={setDesc} setVideo={setVideo} setPage={setPage} scroll={scrollToTop()}/>
                <Episode new={true} title={"name5"} desc={"Lorem h;oj thpijdg phoijg hiogjdh ipjdgihjioIpsum5"} imageurl={"https://picsum.photos/300/200"} videoid={"614334522"} setTitle={setTitle} setDesc={setDesc} setVideo={setVideo} setPage={setPage} scroll={scrollToTop()}/>
            </div>
        </div>
    )
}

export default PodcastPage
