import React from 'react'
import styles from './banner.module.css';
import homeStyles from "../../styles/Home.module.css";
import Link from 'next/link'
import Buttons from '../Buttons/Buttons'


function Banner() {
    return (
        <>
        <div className={styles.topcover}>
            <div className={styles.divbanner}>
                    <video className={homeStyles.bannervideo} autoPlay loop muted>
                    <source src="/bgvideo.mp4" type='video/mp4' />
                </video>
                <h1 className={`${styles.divbanner__headtext} ${styles.theme_text}`}  data-aos="fade-up"  data-aos-delay="200">
                    build <br/> things that <br/> matter.
                </h1>
                <h3 className={styles.divbanner__descriptiontext}  data-aos="fade-up"  data-aos-delay="400">
                    Daksh is Happening very soon
                </h3>
                {/* <Link href="#newsletter">
                    <a className={styles.divbanner__eveandwsbtn}>
                        Events and Workshops
                    </a>
                </Link > */}
                 {/* <Link href="#newsletter">
                     <div style={{marginTop: "1rem"}}  data-aos="fade-up"  data-aos-delay="600">
                         <Buttons text="Subscribe" radius="40px" />
                     </div>
                </Link > */}
            </div>
        </div>
   
   </>
    )
}

export default Banner
