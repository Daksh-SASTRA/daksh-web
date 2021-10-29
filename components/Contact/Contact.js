import React from 'react'

// Link was imported to test Link tag for emails but instead a tag was used since Link tag didnt get the custom styles
import Link from 'next/link'  

import styles from './contact.module.css'

function Contact() {
    return (
        <div className={`${styles.container} ${styles.flexCenter}`}>
            <div className={`${styles.contactHeadingMain} ${styles.flexCenter}`} data-aos="fade-down">
                C O N T A C T S
            </div>
            <div className={`${styles.contactContent} ${styles.flexCenter}`}>
                <div className={`${styles.contacts} ${styles.flexCenter}`} data-aos="fade-up">
                    <span className={`${styles.name} ${styles.pd-5}`}>Manthrini P</span>
                    <span className={`${styles.designation} ${styles.pd-5}`}>Student Coordinator</span> 
                    <a href="mailto:coordinator.daksh@sastra.ac.in" className={styles.email}>coordinator.daksh@sastra.ac.in</a>
                    {/* <span className={styles.phnNo}>+91 9884822554</span> */}
                </div>
                <div className={`${styles.contacts} ${styles.flexCenter}`} data-aos="fade-up" data-aos-delay="100">
                    <span className={`${styles.name} ${styles.pd-5}`}>Hariharan M</span>
                    <span className={`${styles.designation} ${styles.pd-5}`}>Student Secretary</span> 
                    <a href="mailto:chairman.daksh@sastra.ac.in" className={styles.email}>chairman.daksh@sastra.ac.in</a>   
                    {/* <span className={styles.phnNo}>+91 7397067957</span> */}
                </div>
                <div className={`${styles.contacts} ${styles.flexCenter}`} data-aos="fade-up"  data-aos-delay="200">
                    <span className={`${styles.name} ${styles.pd-5}`}>Lalitha K</span>
                    <span className={`${styles.designation} ${styles.pd-5}`}>Overall Technical Coordinator</span> 
                    <a href="mailto:lalitha.otcdaksh@gmail.com" className={styles.email}>lalitha.otcdaksh@gmail.com</a>   
                    {/* <span className={styles.phnNo}>+91 6379603262</span> */}
                </div>
                <div className={`${styles.contacts} ${styles.flexCenter}`} data-aos="fade-up"  data-aos-delay="300">
                    <span className={`${styles.name} ${styles.pd-5}`}>Harish Aravinda P</span>
                    <span className={`${styles.designation} ${styles.pd-5}`}>Treasurer</span> 
                    <a href="mailto:finance.daksh@sastra.ac.in" className={styles.email}>finance.daksh@sastra.ac.in</a>   
                    {/* <span className={styles.phnNo}>+91 9841419109</span> */}
                </div>
                <div className={`${styles.contacts} ${styles.flexCenter}`} data-aos="fade-up"  data-aos-delay="400">
                    <span className={`${styles.name} ${styles.pd-5}`}>Muthu Solayappan</span>
                    <span className={`${styles.designation} ${styles.pd-5}`}>Head, Promotions and Outreach</span> 
                    <a href="mailto:promotions.daksh@sastra.ac.in" className={styles.email}>promotions.daksh@sastra.ac.in</a>   
                    {/* <span className={styles.phnNo}>+91 9840495111</span> */}
                </div>
                <div className={`${styles.contacts} ${styles.flexCenter}`} data-aos="fade-up"  data-aos-delay="500">
                    <span className={`${styles.name} ${styles.pd-5}`}>Harsha Vardhan H</span>
                    <span className={`${styles.designation} ${styles.pd-5}`}>Head, Marketing and Shows</span> 
                    <a href="mailto:marketing.daksh@sastra.ac.in" className={styles.email}>marketing.daksh@sastra.ac.in</a>   
                    {/* <span className={styles.phnNo}>+91 7395958123</span> */}
                </div>
            </div>
        </div>
    )
}

export default Contact
