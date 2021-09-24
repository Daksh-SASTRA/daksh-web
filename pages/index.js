import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Banner from '../components/Banner/banner'
import BannerCards from '../components/BannerCards/bannerCards'
import About from '../components/About/about'
import Sponsers from '../components/Sponsers/sponsers'
import Podcast from '../components/Podcast/podcast'
import StatisticCards from '../components/StatisticCards/statisticCards'
import Newsletter from '../components/Newsletter/newsletter'
import Nav from '../components/Nav/nav'
import Footer from '../components/Footer/footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Daksh SASTRA</title>
        <meta name="description" content="The international techno-management festival of SASTRA University" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Nav />
        <Banner />
        <BannerCards />
        <About />
        <Sponsers />
        <Podcast />
        <StatisticCards />
        <Newsletter />
        <Footer />
      </main>
    </div>
  )
}
