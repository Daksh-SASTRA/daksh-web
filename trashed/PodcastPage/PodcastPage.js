import styles from "./podcastpage.module.css";
import Episode from "./Episode";
import { useState } from "react";

function PodcastPage({ bannerImage, albumData, currentVideoData }) {
  const [latestPage, setPage] = useState(true);
  function scrollToTop() {
    if (!latestPage) {
      if (process.browser) {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    }
  }

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const podcastDetails = currentVideoData.description
    .split("|")
    .map((e) => e.trim());
  const [description, guestName, hostName] = podcastDetails;
  const releaseDate = new Date(currentVideoData["release_time"].substr(0, 10));
  const dateString = `${
    months[releaseDate.getMonth()]
  } ${releaseDate.getDate()}, ${releaseDate.getFullYear()}`;

  return (
    <div>
      {latestPage ? (
        <button className={styles.posterBtn} onClick={() => setPage(false)}>
          <img
            src={bannerImage}
            className={styles.poster}
            alt={currentVideoData.name}
          />
        </button>
      ) : (
        <iframe
          id={styles.video}
          src={`https://player.vimeo.com/video/${currentVideoData.uri}?autoplay=1`}
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      )}
      <div id={styles.podpage} data-aos="fade-up">
        <div className={styles.podcontext}>
          <p className={styles.PodcastDate}>{dateString}</p>
          <h1 id={styles.titleFrame}>{currentVideoData.name}</h1>
          <p id={styles.descFrame}>{description}</p>
          <div className={styles.podcastSpeakers}>
            <div>
              <h3>Guest</h3>
              <p>{guestName}</p>
            </div>
            <div className={styles.hostSection}>
              <h3>Host</h3>
              <p>{hostName}</p>
            </div>
          </div>
        </div>
      </div>
      <div id={styles.hrline}></div>
      <h1 id={styles.allepi}>ALL EPISODES</h1>
      <div id={styles.grid}>
        {albumData.map((video) => {
          const releaseDate = new Date(video["release_time"].substr(0, 10));
          const isNew =
            new Date().getTime() - releaseDate.getTime() < 2629800000;
          const [description] = video.description
            .split("|")
            .map((e) => e.trim());
          return (
            <Episode
              new={isNew}
              title={video.name}
              desc={description}
              imageurl={video.picture}
              videoid={video.uri}
              scroll={scrollToTop()}
              key={video.uri}
            />
          );
        })}
      </div>
    </div>
  );
}

export default PodcastPage;
