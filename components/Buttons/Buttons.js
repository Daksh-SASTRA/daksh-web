import React from 'react'
import styles from './buttons.module.css'



function Buttons(props) {
    return (
           <a className={styles.global_button} style={{borderRadius: props.radius}} >{props.text}</a>
    )
}

export default Buttons