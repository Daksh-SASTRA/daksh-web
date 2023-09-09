import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import specificStyles from '../styles/Common.module.css'
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'

function PrivacyPolicy() {
    return (
        <div>
            <Head>
                <title>Daksh 2023</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <Nav />
                <div className={specificStyles.container}>
                    <div className={specificStyles.heading}>Privacy Policy</div>
                    <div className={`${specificStyles.content} ${specificStyles.normalContent}`}>
                        DAKSH, SASTRA DEEMED UNIVERSITY(“we”, ”our”, or “us”) collects personal information that we obtain from visitors to the <a href='/'>daksh.sastra.edu</a>. The page informs you of our policies about the collection, use and disclosure of your data when you use our service. We use your data to improve the service. By using the service you agree to the collection and use of information in accordance with the policy.
                        <br /><br />
                        {/* Information we collect:<br /> */}
                        We collect the following informations for various purposes such as to provide and improve your experience<br />
                        Name<br />
                        Email Address<br />
                        Phone number<br />
                        Cookie Data<br /><br />
                        We use cookies and similar tracking technologies to track web activity on our website and to store certain data on your computer.
                        Cookies are small chunks of essential data that are sent by the website to your web browser and stored in your device. These cookies are a way used by us to improve and hone our service and your user experience.
                        You can always instruct your browser to not accept the incoming cookies, or to notify you whenever a cookie is sent and stored. But refusing cookies may lead to the unavailability of some services provided by us.
                        The cookies we send are majorly used for saving and remembering your login data, and session cookies which are used to operate our service during each login.
                        <br /><br />
                        Usage of Information:<br />
                        We use the collected information to:<br />
                        - Register you for the selected tech events and competitions<br />
                        - To notify you about changes to our service<br />
                        - To provide customer care and service<br />
                        - To rectify technical issues that arise<br />
                        <br />
                        Security of data:<br />
                        We understand that the security of your data is of utmost importance and while we comply with every security measure and protocol possible from our side, it is to be practically remembered that no data travelling through the Internet is 100% safe and protected and hence, we cannot guarantee the absolute security of the data.
                    </div>
                </div>
                <Footer />
            </main>
        </div>
    )
}

export default PrivacyPolicy
