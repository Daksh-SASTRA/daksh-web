import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import specificStyles from '../styles/Common.module.css'
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'

function RandC() {
    return (
        <div>
            <Head>
                <title>Daksh 2023</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <Nav />
                <div className={specificStyles.container}>
                    <div className={specificStyles.heading}>Ship and Delivery Policy</div>
                    <div className={`${specificStyles.content} ${specificStyles.normalContent}`}>
                        Category: Financial Affairs<br />
                        Effective Date: 01/09/2023<br /><br />

                        This policy outlines the DAKSH&#39;s standards for shipping, accepting delivery and receiving processes and responsibilities.<br /><br />

                        Shipping arrangements:<br />

                        i.  DAKSH may engage some third parties, hereinafter referred to as “Suppliers”, to transport and deliver event materials, equipment, and supplies to the event venue.
                        <br />
                        ii. DAKSH will provide Suppliers with clear and accurate instructions regarding the delivery date, time and location
                        <br /><br />
                        Responsibilities of Suppliers:
                        <br />
                        i. Suppliers shall package all items securely to prevent damage during transit. DAKSH shall not be responsible for any damage caused by inadequate packing.
                        <br />
                        ii. Suppliers shall ensure that event items are delivered to the specified event venue on or before the designated delivery date and time.
                        <br />
                        iii. Suppliers shall promptly communicate any delays or issues that might affect timely delivery of items to the event venue.
                        <br /><br />
                        Acceptance of Deliveries:
                        <br />
                        i. Upon delivery, the designated representative of DAKSH will inspect the items for any visible damage or discrepancies between the delivered items and the order.
                        <br />
                        ii. If any items are found to be damaged or missing, DAKSH shall document the issues and notify the Supplier within 24 hours of delivery.
                        <br /><br />
                        Liability and Claims:
                        <br />
                        i. DAKSH shall not be liable for any loss, damage or delay caused by Suppliers or other third parties involved in the shipping and delivery process.
                        <br />
                        ii. Suppliers shall be solely responsible for addressing any claims related to loss or damage during transportation.
                        Adjustments to Delivery Arrangement:
                        <br /><br />
                        In the event of any changes to the shipping schedule, delivery location, or other relevant details, both parties shall promptly communicate and mutually agree upon the revised arrangements. By engaging in shipping and delivery services for DAKSH, signatories from both parties acknowledge and agree to abide by these Shipping and Delivery Conditions.
                    </div>
                </div>
                <Footer />
            </main>
        </div>
    )
}

export default RandC
