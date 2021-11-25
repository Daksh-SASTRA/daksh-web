import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'
import EventsWorkshop from '../components/EventsWorkshop/EventsWorkshop'

function Events() {
    return (
        <div>
            <Head>
                <title>Daksh 2022 - Events/Workshop</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <Nav />
                <EventsWorkshop />
                <Footer />
            </main>
        </div>
    )
}

export default Events
