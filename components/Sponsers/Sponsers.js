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
                        <img className={styles.sponser_infinite} src="/sponsers/ABLEST.jpg" alt="sponser-1"height="60px"/>
                      </div>
                      <div className={styles.sponsers__div}>
                        <img className={styles.sponser_infinite}  src="/sponsers/AccessoriesPartner_Stichh.png" alt="sponser-2" height="60px"/>
                      </div>
                      <div className={styles.sponsers__div}>
                        <img className={styles.sponser_infinite}  src="/sponsers/AdventurePartner_FreeingIndia.jpeg" alt="sponser-3" height="60px"/>
                      </div>
                      <div className={styles.sponsers__div}>
                        <img className={styles.sponser_infinite}  src="/sponsers/BeveragePartner_GoldCup.jpg" alt="sponser-4" height="60px"/>
                      </div>
                      <div className={styles.sponsers__div}>
                        <img className={styles.sponser_infinite}  src="/sponsers/BluestreamIntegrated.png" alt="sponser-5" height="60px"/>
                      </div>
                      <div className={styles.sponsers__div}>
                        <img className={styles.sponser_infinite}  src="/sponsers/city_union_bank_logo_cub.png" alt="sponser-6" height="60px"/>
                      </div>
                      <div className={styles.sponsers__div}>
                        <img className={`${styles.sponser_infinite} ${styles.blackBackground}`}  src="/sponsers/CrunchPartner_Cornado.png" alt="sponser-7" height="60px"/>
                      </div>
                      <div className={styles.sponsers__div}>
                        <img className={styles.sponser_infinite}  src="/sponsers/EmbellishmentPartner_EyetexDazller.png" alt="sponser-8" height="60px"/>
                      </div>
                      <div className={styles.sponsers__div}>
                        <img className={styles.sponser_infinite}  src="/sponsers/EnergizePartner_Enerzal.jpg" alt="sponser-9" height="60px"/>
                      </div>
                      <div className={styles.sponsers__div}>
                        <img className={styles.sponser_infinite}  src="/sponsers/InvestmentPartner_TheInvestGuru.png" alt="sponser-10" height="60px"/>
                      </div>
                      <div className={styles.sponsers__div}>
                        <img className={`${styles.sponser_infinite} ${styles.blackBackground}`}  src="sponsers/MunchiesPartner.jpg" alt="sponser-11" height="60px"/>
                      </div>
                      <div className={styles.sponsers__div}>
                        <img className={styles.sponser_infinite}  src="/sponsers/PrintingPartner.jpg" alt="sponser-12" height="60px"/>
                      </div>
                      <div className={styles.sponsers__div}>
                        <img className={styles.sponser_infinite}  src="/sponsers/PublicationPartner_CleverFoxPublications.png" alt="sponser-13" height="60px"/>
                      </div>
                      <div className={styles.sponsers__div}>
                        <img className={styles.sponser_infinite}  src="/sponsers/RetrofitParnter_PopDots.jpg" alt="sponser-14" height="60px"/>
                      </div>
                      <div className={styles.sponsers__div}>
                        <img className={styles.sponser_infinite}  src="/sponsers/SanitatioPartner_RKDisposables.jpg" alt="sponser-15" height="60px"/>
                      </div>
                      <div className={styles.sponsers__div}>
                        <img className={styles.sponser_infinite}  src="/sponsers/StationeryPartner_MPMStationery.png" alt="sponser-16" height="60px"/>
                      </div>
                      <div className={styles.sponsers__div}>
                        <img className={styles.sponser_infinite}  src="/sponsers/TBILogo.png" alt="sponser-17" height="60px"/>
                      </div>
                      <div className={styles.sponsers__div}>
                        <img className={styles.sponser_infinite}  src="/sponsers/TechSolutionsPartner_CodentrixTechnologies.png" alt="sponser-18" height="60px"/>
                      </div>
                      <div className={styles.sponsers__div}>
                        <img className={styles.sponser_infinite}  src="/sponsers/ZAPPS-logo.png" alt="sponser-18" height="60px"/>
                      </div>
                    </Slider>
                </div>
        </section>
    )
}
// https://picsum.photos/200/300
export default Sponsers
