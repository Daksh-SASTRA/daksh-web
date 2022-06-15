import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import SchedulePage from "../components/Schedule/SchedulePage";
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'

function Schedule() {
    return (
        <div>
            <Head>
                <title>Daksh 2022 - Schedule</title>
                <meta name="description" content="Schedule of UTSAV 2022" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <Nav/>
                <SchedulePage/>
                <Footer/>
            </main>
        </div>
    )
}

export default Schedule