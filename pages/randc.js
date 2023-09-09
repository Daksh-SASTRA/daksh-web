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
                    <div className={specificStyles.heading}>Refund and Cancellation</div>
                    <div className={specificStyles.content}>
                        Refund and Cancellation Policies for DAKSH Event:
                        <br />
                        1. Refund Policy:<br />
                        - Refund on cancellation is not available.
                        - Refunds cannot be claimed if you miss the registered event due to unforeseen circumstances or cancellation due to change of mind prior to the event.
                        - However, the registered participants have the liberty to transfer their purchase to any other individual under the organization(Shortly, once purchased, you can only choose to transfer your purchase or cancel them).
                        - If any registered event gets cancelled by DAKSH due to any unavoidable circumstances, the registered participants will be provided with a full refund.
                        - DAKSH does not entertain requests for refunds on any other scenarios, so choose wise.
                        <br />
                        2. Cancellation Policy:<br />
                        - DAKSH reserves the right to cancel or reschedule the event due to unforeseen circumstances, including insufficient registrations or force majeure.
                        - In the event of cancellation by DAKSH, registered participants will receive a full refund.
                        - DAKSH is not responsible for any additional expenses incurred by participants, such as travel or accommodation costs, due to event cancellation or rescheduling.
                        <br />
                        3. No-show Policy:<br />
                        - Participants who do not attend the event and do not request a refund or transfer will not be eligible for a refund.
                        <br />
                        4. Transfer of Credits Policy:<br />
                        - While refunds are not available, we offer the flexibility of transferring your registration to a colleague or peer within your organization.
                        - Should your plans change, you can ensure that your investment in DAKSH is maximized by allowing someone else to benefit from the event.
                        - To initiate the transfer, kindly provide us with the necessary details of the new participant, and we'll facilitate the process smoothly.
                        - Your commitment to DAKSH is appreciated, and we're thrilled to welcome both you and your chosen representative to our event.
                        <br />
                        5. Modification of Policies:<br />
                        - DAKSH reserves the right to modify these refund and cancellation policies as necessary. Any changes will be communicated to registered participants through email or the official event website.
                        <br />
                        Thank you for understanding and being part of DAKSH's dynamic community!
                    </div>
                </div>
                <Footer />
            </main>
        </div>
    )
}

export default RandC
