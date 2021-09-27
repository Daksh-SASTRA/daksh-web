import React from 'react'
import styles from './bannercards.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// Assigned To Sivapriya
// Background Colour - primaryBg

function bannerCards() {

    var settings = {
       
        className: "center",
        centerMode: true,
        infinite:true,
        slidesToShow: 1.69,
        speed: 500,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '10px',
                slidesToShow: 1
              },

              
            },
        ]
       
      };

   return(   
       <>
     
       
       <div className={styles.cardRenderWrap}>
      
       <div className={styles.cardcarousel} id="cardcarousel">
           
            <Slider {...settings} >
                
                <div className={styles.card}  >
                    <div className={styles.card__vectorimg}>
                        <img className={styles.vector} src="/tech.png"/>
                    </div>
                    <div className={styles.card__head}>Events</div>
                    <div className={styles.card__viewbtn}>view</div>
                </div>

                <div className={styles.card}>
                    <div className={styles.card__vectorimg}>
                        <img className={styles.vector} src="/tech.png"/>
                    </div>
                    <div className={styles.card__head}>Workshops</div>
                    <div className={styles.card__viewbtn}>view</div>
                </div>

                <div className={styles.card} >
                    <div className={styles.card__vectorimg}>
                        <img className={styles.vector} src="/tech.png"/>
                    </div>
                    <div className={styles.card__head}>Podcasts</div>
                    <div className={styles.card__viewbtn}>view</div>
                </div>      
             
              </Slider>
             
            
        </div>
       
        </div>
    
     </>
    );
   
}

export default bannerCards;
