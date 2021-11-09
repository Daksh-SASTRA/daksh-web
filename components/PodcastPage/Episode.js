import styles from "./podcastpage.module.css";
import { AiFillPlayCircle } from "react-icons/ai";

function Episode(props) {
  const params = new URLSearchParams();
  params.append("id", props.videoid);
  return (
    <div className={styles.episode} data-aos="fade-up">
      <img src={props.imageurl} alt={props.title} className={styles.eimg} />
      <div id={styles.episodeContext}>{props.title.substr(0, 50)}</div>
      <div className={props.new ? styles.ribbon : styles.noRibbon}>New</div>
      <div className={styles.overlay}>
        <a href={"/podcast?" + params.toString()} className={styles.watchnow}>
          <AiFillPlayCircle /> Watch Now
        </a>
      </div>
    </div>
  );
}

export default Episode;
