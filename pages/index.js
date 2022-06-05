import Head from "next/head";
import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/Home.module.css";
import Banner from "../components/Banner/Banner";
import BannerCards from "../components/BannerCards/BannerCards";
import About from "../components/About/About";
import Sponsers from "../components/Sponsers/Sponsers";
import Podcast from "../components/Podcast/Podcast";
import StatisticCards from "../components/StatisticCards/StatisticCards";
import Newsletter from "../components/Newsletter/Newsletter";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import FloatingIcons from "../components/FloatingIcons/FloatingIcons";
import Loader from "../components/Loader/Loader";
import { ToastContainer } from "react-toastify";


export default function Home() {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);
  return (
    <div className={styles.container}>
      <ToastContainer style={{ zIndex: 999999 }} />
      <Head>
        <title>Daksh 2022</title>
        <meta
          name="description"
          content="DAKSH is the annual techno management fest of Sastra University. Ever since its establishment it has been a platform for a multitude of students and aspirants to unravel their talents and showcase their technical prowess. We’ve grown together as a fest since our inception providing students with the finest exposure and skill. This edition of Daksh aims at creating a virtual forum bringing together the eccentric minded and celebrating technology."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {loader ? (
        <Loader />
      ) : (
        <main className={styles.main}>
          <FloatingIcons />
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
      )}
    </div>
  );
}
