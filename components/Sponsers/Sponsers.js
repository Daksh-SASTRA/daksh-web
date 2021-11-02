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
                      <div className="sponser__div">
                        <img className={styles.sponser_infinite} src="/sponsers/A_S_creations-logo.png" alt="sponser-1"height="75px"/>
                      </div>
                      <div className="sponser__div">
                        <img className={styles.sponser_infinite}  src="/sponsers/Algorythmlogo.png" alt="sponser-2" height="75px"/>
                      </div>
                      <div className="sponser__div">
                        <img className={styles.sponser_infinite}  src="/sponsers/CodingBlocks-logo.png" alt="sponser-3" height="75px"/>
                      </div>
                      <div className="sponser__div">
                        <img className={styles.sponser_infinite}  src="/sponsers/edvoy-logo.png" alt="sponser-4" height="75px"/>
                      </div>
                      <div className="sponser__div">
                        <img className={styles.sponser_infinite}  src="/sponsers/MCD-logo.png" alt="sponser-5" height="75px"/>
                      </div>
                      <div className="sponser__div">
                        <img className={styles.sponser_infinite}  src="/sponsers/ZAPPs-logo.png" alt="sponser-6" height="75px"/>
                      </div>
                      <div className="sponser__div">
                        <img className={styles.sponser_infinite}  src="/sponsers/ZM-logo.png" alt="sponser-7" height="75px"/>
                      </div>
                    </Slider>
                </div>
        </section>
    )
}
// https://picsum.photos/200/300
export default Sponsers
