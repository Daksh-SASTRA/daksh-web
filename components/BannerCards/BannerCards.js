import React,{useState} from 'react'
import styles from './bannercards.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from 'next/link';

function BannerCards() {
    const carousel_items=[
      {
        idx:0,
        description:"Podcasts",
        src:'/tech.png',
        buttonText:'view',
        href: "/podcast"
      },
      {
        idx:1,
        description:"Events",
        src:'/events.png',
        buttonText:'view',
        href: "/events-workshop"
      },
      {
        idx:2,
        description:"Workshops",
        src:'/workshop.png',
        buttonText:'view',
        href: "/events-workshop"
      },
      {
        idx:3,
        description:"Teams",
        src:'/team.png',
        buttonText:'view',
        href: "/teams"
      }
    ]

    const [imageIdx,setImageIdx] = useState(0);
    
    var settings = {
        autoplay: true,
        className: "center",
        centerMode: true,
        infinite: true,
        dots: true,
        arrows: false,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        speed: 500,
        beforeChange: (current,next) => setImageIdx(next),
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

   return(   
       <>
       <div className={styles.cardRenderWrap}>
          <div className={styles.cardcarousel} id="cardcarousel"  data-aos="fade-up">
            <Slider {...settings} >
                {carousel_items.map((item,idx)=>{
                  return (
                    <div className={imageIdx === idx ? styles.card_active : styles.card} key={idx}>
                      <div className={styles.center}>
                      <div className={styles.card__vectorimg}>
                        <img className={styles.vector} src={item.src}/>
                      </div>
                      <div className={styles.card__head}>{item.description}</div>
                      <Link href={item.href} >
                        <div className={styles.card__viewbtn}>{item.buttonText}</div>
                      </Link>
                      </div>
                    </div>
                  )
                })}               
              </Slider>
          </div>
        </div>
    
     </>
    );
   
}

export default BannerCards;
