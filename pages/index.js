import Head from "next/head";
import React, { useState, useEffect } from "react";
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
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { ToastContainer}from 'react-toastify';

export default function Home() {
	const [loader, setloader] = useState(true);

	useEffect(() => {
		if(loader){
			setTimeout(()=>{
				setloader(false);
			},2000)
		}
		return () => {
			setloader(false);
		}
	}, [])
	return (
		<div className={styles.container}>
			<ToastContainer style={{zIndex: 999999}}/>
			<Head>
				<title>Daksh 2022</title>
				<meta
					name="description"
					content="The international techno-management festival of SASTRA University"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className={loader ? styles.loaderActive : styles.loaderNone}>
				<img src="/logoshort.png" height="100"/>
				<Loader type="ThreeDots" color="white" height={80} width={80} />
			</div>

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
		</div>
	);
}
