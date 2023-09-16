import React from 'react'

// Link was imported to test Link tag for emails but instead a tag was used since Link tag didnt get the custom styles
import Link from 'next/link'
import Image from 'next/image'
import styles from './contact.module.css'

function Contact() {
    return (
        <div className={`${styles.container} ${styles.flexCenter}`}>
            <div className={`${styles.contactHeadingMain} ${styles.flexCenter}`} data-aos="fade-down">
                C O N T A C T S
            </div>
            <div className={`${styles.contactContent} ${styles.flexCenter}`}>
                <div className={`${styles.contacts} ${styles.flexCenter}`} data-aos="fade-up">
                    <span><Image width={150} height={150} src="/coreteam/vaishnavibalaji.webp" alt="Vaishnavi Balaji" /></span>
                    <span className={`${styles.name} ${styles.pd - 5}`}>Vaishnavi Balaji</span>
                    <span className={`${styles.designation} ${styles.pd - 5}`}>Operation & Logistics</span>
                    <a href="mailto:coordinator.daksh@sastra.ac.in" className={styles.email}>coordinator.daksh@sastra.ac.in</a>
                    {/* <span className={styles.phnNo}>+91 9884822554</span> */}
                </div>
                <div className={`${styles.contacts} ${styles.flexCenter}`} data-aos="fade-up" data-aos-delay="100">
                    <span><Image width={150} height={150} src="/coreteam/priyankabudivarthi.webp" alt="Priyanka Budivarthi" /></span>
                    <span className={`${styles.name} ${styles.pd - 5}`}>Priyanka Budivarthi</span>
                    <span className={`${styles.designation} ${styles.pd - 5}`}>Student Chairperson</span>
                    <a href="mailto:chairman.daksh@sastra.ac.in" className={styles.email}>chairman.daksh@sastra.ac.in</a>
                    {/* <span className={styles.phnNo}>+91 7397067957</span> */}
                </div>
                <div className={`${styles.contacts} ${styles.flexCenter}`} data-aos="fade-up" data-aos-delay="300">
                    <span><Image width={150} height={150} src="/coreteam/saiaravind.webp" alt="Sai Aravind" /></span>
                    <span className={`${styles.name} ${styles.pd - 5}`}>Sai Aravind G</span>
                    <span className={`${styles.designation} ${styles.pd - 5}`}>Treasurer</span>
                    <a href="mailto:finance.daksh@sastra.ac.in" className={styles.email}>finance.daksh@sastra.ac.in</a>
                    {/* <span className={styles.phnNo}>+91 9841419109</span> */}
                </div>
                <div className={`${styles.contacts} ${styles.flexCenter}`} data-aos="fade-up" data-aos-delay="400">
                    <span><Image width={150} height={150} src="/coreteam/akshayramakrishnan.webp" alt="Akshay B R" /></span>
                    <span className={`${styles.name} ${styles.pd - 5}`}>Akshay B R</span>
                    <span className={`${styles.designation} ${styles.pd - 5}`}>Promotions & External Relations</span>
                    <a href="mailto:promotions.daksh@sastra.ac.in" className={styles.email}>promotions.daksh@sastra.ac.in</a>
                    {/* <span className={styles.phnNo}>+91 9840495111</span> */}
                </div>
                <div className={`${styles.contacts} ${styles.flexCenter}`} data-aos="fade-up" data-aos-delay="500">
                    <span><Image width={150} height={150} src="/coreteam/athithyanarayanan.webp" alt="Athithya Narayanan B" /></span>
                    <span className={`${styles.name} ${styles.pd - 5}`}>Athithya Narayanan B</span>
                    <span className={`${styles.designation} ${styles.pd - 5}`}>Marketing and Shows</span>
                    <a href="mailto:marketing.daksh@sastra.ac.in" className={styles.email}>marketing.daksh@sastra.ac.in</a>
                    {/* <span className={styles.phnNo}>+91 7395958123</span> */}
                </div>
                <div className={`${styles.contacts} ${styles.flexCenter}`} data-aos="fade-up" data-aos-delay="200">
                    <span><Image width={150} height={150} src="/coreteam/busamsaisneha.webp" alt="Busam Sai Sneha" /></span>
                    <span className={`${styles.name} ${styles.pd - 5}`}>Busam Sai Sneha</span>
                    <span className={`${styles.designation} ${styles.pd - 5}`}>Overall Technical Coordinator</span>
                    <a href="mailto:otc.daksh@sastra.ac.in" className={styles.email}>otc.daksh@sastra.ac.in</a>
                    {/* <span className={styles.phnNo}>+91 6379603262</span> */}
                </div>
            </div>
        </div>
    )
}

export default Contact
