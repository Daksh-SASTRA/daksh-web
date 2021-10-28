import React from 'react'
import styles from './banner.module.css'
import Link from 'next/link'
import Buttons from '../Buttons/Buttons'


function Banner() {
    return (
        <>
        <div className={styles.topcover}>
            <div className={styles.divbanner}>
                <h1 className={styles.divbanner__headtext}  data-aos="fade-up"  data-aos-delay="200">
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
            <div className={styles.divbannerfadebtm}>
            </div>
        </div>
   
   </>
    )
}

export default Banner
