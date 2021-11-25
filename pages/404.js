import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'
import ContactPage from '../components/Contact/Contact'

function Contact() {
    return (
        <div>
            <Head>
                <title>Daksh 2022</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <Nav />
                <div className={styles.error__section}>
                    <img src="/404.svg" alt="404 Image" width="50%"/>
                </div>
                <Footer />
            </main>
        </div>
    )
}

export default Contact
