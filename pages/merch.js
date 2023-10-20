import React from 'react'
import Head from 'next/head'
import styles from "../styles/Home.module.css";
import MerchForm from "../components/Merch/MerchForm";
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'

function MerchandisePage() {
    return (
        <div>
            <Head>
                <title>Daksh 2023 - Merchandise</title>
                <meta name="description" content="Merchandise for DAKSH 2023" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <Nav />
                <MerchForm />
                {/* <ComingSoon /> */}
                <Footer />
            </main>
        </div>
    )
}

export default MerchandisePage