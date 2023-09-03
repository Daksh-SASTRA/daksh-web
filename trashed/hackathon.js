import React from 'react';
import Head from 'next/head'

import styles from '../styles/Home.module.css'

import Hackathons from '../components/EventsWorkshop/Hackathons.js'

import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'

function Hackathon() {
    return (
        <div>
            <Head>
                <title>Daksh 2023 - Hackathons</title>
                <meta name="description" content="Hackathon events happening in Daksh SASTRA" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <Nav />
                <Hackathons/>
                <Footer />
            </main>
        </div>
    )
}

export default Hackathon;