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
        {TeamsData.map((e, i) => {
          return (
            <div key={i} className={styles.teams__cards}>
              <img src={e.src} alt={e.teamname} />
              <p className={styles.teams__teamname}>{e.teamname}</p>
              <p className={styles.teams__heads_names}>{e.heads}</p>
            </div>
          );
          
        })}

        {/* <div className={styles.teams__cards}>
          <img src="team/Creative-media.png" alt="creative media" />
          <p className={styles.teams__teamname}>Team Name</p>
          <p className={styles.teams__heads_names}>Heads Name</p>
        </div> */}
      </div>
    </div>
  );
}

export default TeamsPage;
