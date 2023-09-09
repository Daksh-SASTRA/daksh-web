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
                    <div className={`${specificStyles.content} ${specificStyles.normalContent}`}>
                        1. Refund Policy:<br />
                        - Refund on cancellation is not available.<br />
                        - Refunds cannot be claimed if you miss the registered event due to unforeseen circumstances or cancellation due to change of mind prior to the event.<br />
                        - However, the registered participants have the liberty to transfer their purchase to any other individual under the organization(Shortly, once purchased, you can only choose to transfer your purchase or cancel them).<br />
                        - If any registered event gets cancelled by DAKSH due to any unavoidable circumstances, the registered participants will be provided with a full refund.<br />
                        - DAKSH does not entertain requests for refunds on any other scenarios, so choose wise.<br />
                        <br />
                        2. Cancellation Policy:<br />
                        - DAKSH reserves the right to cancel or reschedule the event due to unforeseen circumstances, including insufficient registrations or force majeure.<br />
                        - In the event of cancellation by DAKSH, registered participants will receive a full refund.<br />
                        - DAKSH is not responsible for any additional expenses incurred by participants, such as travel or accommodation costs, due to event cancellation or rescheduling.<br />
                        <br />
                        3. No-show Policy:<br />
                        - Participants who do not attend the event and do not request a refund or transfer will not be eligible for a refund.<br />
                        <br />
                        4. Transfer of Credits Policy:<br />
                        - While refunds are not available, we offer the flexibility of transferring your registration to a colleague or peer within your organization.<br />
                        - Should your plans change, you can ensure that your investment in DAKSH is maximized by allowing someone else to benefit from the event.<br />
                        - To initiate the transfer, kindly provide us with the necessary details of the new participant, and we will facilitate the process smoothly.<br />
                        - Your commitment to DAKSH is appreciated, and we are thrilled to welcome both you and your chosen representative to our event.<br />
                        <br />
                        5. Modification of Policies:<br />
                        - DAKSH reserves the right to modify these refund and cancellation policies as necessary. Any changes will be communicated to registered participants through email or the official event website.<br />
                        <br />
                        Thank you for understanding and being part of DAKSH&#39;s dynamic community!
                    </div>
                </div>
                <Footer />
            </main>
        </div>
    )
}

export default RandC
