import React from 'react'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Merch from "../../components/Merch/Merch";
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
// import ComingSoon from '../../components/ComingSoon/ComingSoon';
// import 
import front from '../../public/shirtpreview/Front.png'
import back from '../../public/shirtpreview/Back.png'

function MerchandisePage() {
    return (
        <div>
            <Head>
                <title>Daksh 2023 - Merchandise</title>
                <meta name="description" content="Merchandise for DAKSH 2023" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <Nav/>
                <Merch/>
                {/* <ComingSoon /> */}
                <Footer/>
            </main>
        </div>
    )
}

export default MerchandisePage