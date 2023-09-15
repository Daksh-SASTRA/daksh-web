import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'
import ContactPage from '../components/Contact/Contact'
import Image from 'next/image'

function Contact() {
    return (
        <div>
            <Head>
                <title>Daksh 2023</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <Nav />
                <div className={styles.error__section}>
                    <Image width={1600} height={1200} src="/404.svg" alt="404 Image"/>
                </div>
                <Footer />
            </main>
        </div>
    )
}

export default Contact
