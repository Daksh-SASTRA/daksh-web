import React from 'react'
import styles from './sponsers.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from 'next/image'

function Sponsers() {
    var settings = {
        autoplay: true,
        infinite: true,
        dots: false,
        arrows: false,
        autoplaySpeed: 1000,
        variableWidth: true,
        speed: 500,
        mobileFirst:true,
        responsive: [
            {
              breakpoint: 770,
              settings: {
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 1
              },
            },
        ]
      };

    return (
        <section className={styles.sponsers} data-aos="fade-up">
                <h3 className={styles.sponsers__h3}>Sponsors</h3>
                <div className={styles.sponser_slider}>
                    <Slider {...settings} >
                      <div className={styles.sponsers__div}>
                        <img className={styles.sponser_infinite} src="/sponsers/A_S_creations-logo.png" alt="sponser-1"height="50px"/>
                      </div>
                      <div className={styles.sponsers__div}>
                        <img className={styles.sponser_infinite}  src="/sponsers/Algorythmlogo.png" alt="sponser-2" height="50px"/>
                      </div>
                      <div className={styles.sponsers__div}>
                        <img className={styles.sponser_infinite}  src="/sponsers/AST_Industries.png" alt="sponser-3" height="50px"/>
                      </div>
                      <div className={styles.sponsers__div}>
                        <img className={styles.sponser_infinite}  src="/sponsers/CodeForCause.png" alt="sponser-4" height="50px"/>
                      </div>
                      <div className={styles.sponsers__div}>
                        <img className={styles.sponser_infinite}  src="/sponsers/CodingBlocks-logo.png" alt="sponser-5" height="50px"/>
                      </div>
                      <div className={styles.sponsers__div}>
                        <img className={styles.sponser_infinite}  src="/sponsers/edvoy-logo.png" alt="sponser-6" height="50px"/>
                      </div>
                      <div className={styles.sponsers__div}>
                        <img className={`${styles.sponser_infinite} ${styles.blackBackground}`}  src="/sponsers/GrabOn.png" alt="sponser-7" height="50px"/>
                      </div>
                      <div className={styles.sponsers__div}>
                        <img className={styles.sponser_infinite}  src="/sponsers/MCD-logo.png" alt="sponser-8" height="50px"/>
                      </div>
                      <div className={styles.sponsers__div}>
                        <img className={styles.sponser_infinite}  src="/sponsers/OFFO_Merchandise.png" alt="sponser-9" height="50px"/>
                      </div>
                      <div className={styles.sponsers__div}>
                        <img className={styles.sponser_infinite}  src="/sponsers/SelfmadeNinjaAcademy.png" alt="sponser-10" height="50px"/>
                      </div>
                      <div className={styles.sponsers__div}>
                        <img className={`${styles.sponser_infinite} ${styles.blackBackground}`}  src="sponsers/Skill Vertex.png" alt="sponser-11" height="50px"/>
                      </div>
                      <div className={styles.sponsers__div}>
                        <img className={styles.sponser_infinite}  src="/sponsers/Tamopahaa.png" alt="sponser-12" height="50px"/>
                      </div>
                      <div className={styles.sponsers__div}>
                        <img className={styles.sponser_infinite}  src="/sponsers/ZAPPs-logo.png" alt="sponser-13" height="50px"/>
                      </div>
                      <div className={styles.sponsers__div}>
                        <img className={styles.sponser_infinite}  src="/sponsers/Zenminds_Gaming.png" alt="sponser-14" height="50px"/>
                      </div>
                    </Slider>
                </div>
        </section>
    )
}
// https://picsum.photos/200/300
export default Sponsers
