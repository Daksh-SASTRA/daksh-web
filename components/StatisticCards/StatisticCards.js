import React from 'react'
import styles from './statisticCards.module.css'

function StatisticCards() {
    return (
        <div className={styles.container}>
            <div className={styles.item} >
              <p>10+<br/><span>Events</span></p>
            </div>
            <div className={styles.item}>
              <p>100K<br/><span>Prices Pool</span></p>
            </div>
            <div className={styles.item}>
              <p>3+<br/><span>Workshops</span></p>
            </div>
        </div>
    )
}
  
export default StatisticCards
