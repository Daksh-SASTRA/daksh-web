import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav/nav'
import Footer from '../components/Footer/footer'
import PodcastPage from '../components/PodcastPage/podcastPage'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Daksh SASTRA - Podcast</title>
        <meta name="description" content="The international techno-management festival of SASTRA University" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Nav />
        <h1>
          Podcasts
        </h1>
        <PodcastPage />
        <Footer />
      </main>
    </div>
  )
}
