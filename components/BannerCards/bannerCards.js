import React,{useState} from 'react'
import styles from './bannercards.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// Assigned To Sivapriya
// Background Colour - primaryBg

function bannerCards() {
    const carousel_items=[
      {
        idx:0,
        description:"Events",
        src:'/tech.png',
        buttonText:'view'
      },
      {
        idx:1,
        description:"Workshops",
        src:'/tech.png',
        buttonText:'view'
      },
      {
        idx:2,
        description:"Podcasts",
        src:'/tech.png',
        buttonText:'view'
      }
    ]

    const [imageIdx,setImageIdx]=useState(0);
    
    var settings = {
       
        className: "center",
        centerMode: true,
        infinite:true,
        slidesToShow: 3,
        speed: 500,
        beforeChange:(current,next)=>setImageIdx(next),
        
        responsive: [
            {
              breakpoint: 770,
              settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: true,
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
      
       <div className={styles.cardcarousel} id="cardcarousel">
           
            <Slider {...settings} >
                {carousel_items.map((item,idx)=>{
                  return(
                   <div className={styles.card} key={idx}>
                   <div className={styles.card__vectorimg}>
                       <img className={styles.vector} src={item.src}/>
                   </div>
                   <div className={styles.card__head}>{item.description}</div>
                   <div className={styles.card__viewbtn}>{item.buttonText}</div>
               </div>
                  )
                })}               
              </Slider>
             
            
        </div>
       
        </div>
    
     </>
    );
   
}

export default bannerCards;
