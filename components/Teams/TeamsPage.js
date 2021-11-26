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
          let num = i * 100;
          let delay = num.toString();

          return (
            <div
              key={i}
              className={styles.teams__cards}
              data-aos="fade-up"
              data-aos-delay={delay}
            >
              <img
                className={styles.teams__teamimg}
                src={e.src}
                alt={e.teamname}
              />
              <p className={styles.teams__teamname}>{e.teamname}</p>
              <p className={styles.teams__heads_names}>{e.heads}</p>
            </div>
          );
        })}

       
      </div>
    </div>
  );
}

export default TeamsPage;
