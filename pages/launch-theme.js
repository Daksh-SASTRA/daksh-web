import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'
import Theme from '../components/Theme/Theme'
import { ToastContainer}from 'react-toastify';

function LaunchTheme() {
    return (
        <div>
            <ToastContainer style={{zIndex: 999999}}/>
            <Head>
                <title>Daksh 2022 - Launch Theme</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <main className={styles.main}>
                <Nav />
                <Theme />
                <Footer />
            </main>
        </div>
    )
}

export default LaunchTheme
