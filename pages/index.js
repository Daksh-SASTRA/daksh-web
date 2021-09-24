import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Daksh SASTRA</title>
        <meta name="description" content="The international techno-management festival of SASTRA University" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Daksh
        </h1>

        <p className={styles.description}>
          Build things that matter.
        </p>
      </main>
    </div>
  )
}
