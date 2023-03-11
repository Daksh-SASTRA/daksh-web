import React from 'react'

import styles from "./comingsoon.module.css";

const ComingSoon =()=>{
    let shadow = "";
  for (let i = 0; i < 30; i++) {
    shadow += `${(shadow ? "," : "") + -i * 0.3}px ${i * 0.4}px 0px #DA0037`;
  }

  const shadowStyle = {
    textShadow: shadow
  };
  return (
    <div className={styles.container}>
    <div className={styles.text} style={shadowStyle}>
    COMING
    <br />
    SOON...
  </div>
    </div>
  );
}

export default ComingSoon;