import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import SchedulePage from "../components/Schedule/SchedulePage";

function Schedule() {
    return (
        <div>
            <Head>
                <title>UTSAV - Schedule</title>
                <meta name="description" content="Schedule of UTSAV 2k22" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <SchedulePage/>
            </main>
        </div>
    )
}

export default Schedule