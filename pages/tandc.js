import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import specificStyles from '../styles/Common.module.css'
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'

function TandC() {
    return (
        <div>
            <Head>
                <title>Daksh 2023</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <Nav />
                <div className={specificStyles.container}>
                    <div className={specificStyles.heading}>Terms and Conditions</div>
                    <div className={`${specificStyles.content} ${specificStyles.normalContent}`}>
                        1.	Acceptance of Terms:<br />
                        By accessing and using the DAKSH Technical Fest website(&#34;Website&#34;), you agree to comply with and be bound by these Terms and Conditions. If you do not agree to these terms, please refrain from using the Website.
                        <br />
                        2.	User Conduct:<br />
                        When using the Website, you agree to:<br />
                        - Abide by all applicable laws and regulations. <br />- Refrain from posting or transmitting any content that is defamatory, offensive, or infringing on others&#39; rights. <br />- Not engage in any activity that disrupts or interferes with the proper functioning of the website.
                        <br />
                        3. Registration and Accounts:<br />
                        Certain areas of the Website may require registration. You agree to provide accurate and complete information during the registration process. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
                        <br />
                        4.Judging criteria:<br />
                        At the Daksh Technical Fest, a fair and transparent judging process is essential to recognize talent, innovation, and creativity. The judging criteria for various competitions and events are designed to evaluate participants based on specific parameters.<br />
                        Please note that the judging criteria may vary depending on the specific competition or event. Participants are encouraged to review the competition guidelines and criteria provided for each competition to understand the evaluation process.<br />
                        The judging process will be impartial, and decisions made by the panel of judges will be final.
                        <br />
                        5. Prize Distribution
                        At the Daksh , we believe in recognizing and rewarding excellence. We&#39;re excited to announce a range of exciting prizes for various competitions and events. Participants who demonstrate exceptional skills and innovation will have the opportunity to win the following prizes:<br />
                        &nbsp;&nbsp;5.1. Cash Prizes<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;Outstanding performers will have the chance to win attractive cash prizes. The cash prize amounts will vary depending on the competition and category.<br />
                        &nbsp;&nbsp;5.2. Certificates<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;All participants will receive participation certificates to acknowledge their involvement in the Daksh .
                        <br />
                        Please note that the prize distribution is subject to change and may vary from competition to competition. The decisions of the judges and organizers will be final.
                        We encourage all participants to put their best foot forward and compete for these exciting rewards!.
                        <br />
                        6.Intellectual Property:<br />
                        All content and materials on the Website, including but not limited to text, images, logos, and graphics, are protected by copyright and other intellectual property laws. You may not reproduce, distribute, modify, or otherwise use any content without the express written permission of Sastra University.
                        <br />
                        7. Limitation of Liability:<br />
                        SASTRA DEEMED UNIVERSITY and its affiliates shall not be liable for any direct, indirect, incidental, consequential, or special damages arising out of or in any way connected with your use of the website.
                        <br />
                        8. Disclaimer:<br />
                        The content on the Website is provided for informational purposes only. Sastra University makes no representations or warranties of any kind, whether express or implied, regarding the accuracy, reliability, or completeness of the content.
                        <br />
                        9.Privacy:<br />
                        Your use of the website is also governed by our <a href='/privacypolicy'>Privacy Policy</a>, which outlines how we collect, use, and protect your personal information. For further details, refer our  privacy policy section.
                    </div>
                </div>
                <Footer />
            </main>
        </div>
    )
}

export default TandC
