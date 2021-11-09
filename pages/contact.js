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
                <title>Daksh 2022 - Contact</title>
                <meta name="description" content="Contact details of the coordinator, secretary, treasurer and heads of Daksh" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <Nav />
                <ContactPage />
                <Footer />
            </main>
        </div>
    )
}

export default Contact
