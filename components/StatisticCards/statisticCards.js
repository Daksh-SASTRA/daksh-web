import React from 'react'
import styles from './statisticCards.module.css'
import PropTypes from 'prop-types'

function statisticCards() {
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
statisticCards.propTypes = {
    s1: PropTypes.string.isRequired,
    s2: PropTypes.string.isRequired,
    s3: PropTypes.string.isRequired,
    i1: PropTypes.number.isRequired,
    i2: PropTypes.number.isRequired,
    i3: PropTypes.number.isRequired,
  };
  statisticCards.defaultProps = {
    s1:"10+ Events",
    s2:"100k Pool",
    s3:"Lorem ipsum dolor.",
    i1:3,
    i2:4,
    i3:5
  };
  
export default statisticCards
