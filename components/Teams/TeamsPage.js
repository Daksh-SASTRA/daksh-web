import React from 'react';
import styles from './teams.module.css';
import TeamsData from "../config/teams.json";
import ctstyles from "../Contact/contact.module.css";
import Image from 'next/image'
function TeamsPage() {
  return (
    <div className={`${styles.teams__container} ${ctstyles.flexCenter}`}>
      <div
        className={`${ctstyles.contactHeadingMain} ${ctstyles.flexCenter}`}
        data-aos="fade-down"
      >
        T E A M S
      </div>
      <div className={`${styles.teamsCards__container}`}>
        <div className={styles.teams__cards}>
          <img src="team/Creative-media.png" alt="creative media" />
          <p>Team Name</p>
          <p>Heads Name</p>
        </div>
        <div className={styles.teams__cards}>
          <img src="team/Creative-media.png" alt="creative media" />
          <p>Team Name</p>
          <p>Heads Name</p>
        </div>
        <div className={styles.teams__cards}>
          <img src="team/Creative-media.png" alt="creative media" />
          <p>Team Name</p>
          <p>Heads Name</p>
        </div>
      </div>
    </div>
  );
}

export default TeamsPage;
