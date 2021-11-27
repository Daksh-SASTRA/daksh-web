import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import TeamsPage from "../components/Teams/TeamsPage";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";

function Teams() {
  return (
    <div>
      <Head>
        <title>DAKSH 2022 - Teams</title>
        <meta name="description" content="Daksh Teams" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Nav />
        <TeamsPage />
        <Footer />
      </main>
    </div>
  );
}

export default Teams;
