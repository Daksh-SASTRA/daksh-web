import Head from "next/head";
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

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Daksh SASTRA</title>
				<meta
					name="description"
					content="The international techno-management festival of SASTRA University"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

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
