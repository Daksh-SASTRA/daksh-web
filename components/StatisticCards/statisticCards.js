import React from 'react'
import styles from './statisticCards.module.css'
import PropTypes from 'prop-types'


// Assigned To Sai Prasanna
// Background Colour - secondaryBg

function statisticCards(props) {
    const decorwhite=(s,i)=>{
       return s.substring(0,i);
    }
    const decorgrey=(s,i)=>{
       return s.substring(i,s.length);
    }
    return (
        <div className={styles.container}>
            <div className={`${styles.item} ${styles.item1}`} >
            <p>{decorwhite(props.s1,props.i1)}<br /><span>{decorgrey(props.s1,props.i1)}</span></p>
        </div><div className={styles.item}>
        <p>{decorwhite(props.s2,props.i2)}<br /><span>{decorgrey(props.s2,props.i2)}</span></p>
            </div><div className={`${styles.item} ${styles.item3}`}>
            <p>{decorwhite(props.s3,props.i3)}<br /><span>{decorgrey(props.s3,props.i3)}</span></p>
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
