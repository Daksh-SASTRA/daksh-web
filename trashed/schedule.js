import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import SchedulePage from "../components/Schedule/SchedulePage";
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'
import ComingSoon from '../components/ComingSoon/ComingSoon';
function Schedule() {
    return (
        <div>
            <Head>
                <title>Daksh 2023 - Schedule</title>
                <meta name="description" content="Schedule of DAKSH 2023" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <Nav/>
                {/* <ComingSoon /> */}
                <SchedulePage/>
                <Footer/>
            </main>
        </div>
    )
}

export default Schedule