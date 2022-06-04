import React, { useState, useEffect } from "react";
import styles from "./nav.module.css";
import { IoMenu } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import Link from "next/link";


function Nav() {
	const [navbarBg, setNavbarBg] = useState(false);

	//navbar scroll changeBackground function
	const changeBackground = () => {
		if (window.scrollY >= 50) {
			setNavbarBg(true);
		} else {
			setNavbarBg(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", changeBackground);
		return () => {
			window.removeEventListener("scroll", changeBackground);
		};
	}, []);

	const [navmenu, menuToggle] = useState(false);
	var hnav = (
		<div id={navmenu ? styles.vnav : styles.hnav}>
			{/* <div
				className={styles.navbutton}
				data-aos="fade-down"
				data-aos-delay="50"
			>
				<Link href="/schedule">
					<a className={styles.navlink}>Schedule</a>
				</Link>
			</div> */}
			<div
				className={styles.navbutton}
				data-aos="fade-down"
				data-aos-delay="200"
			>
				<Link href="/events-workshop?q=hackathons">
					<a className={styles.navlink}>Events/Workshops/Hackathons</a>
				</Link>
			</div>
			<div
				className={styles.navbutton}
				data-aos="fade-down"
				data-aos-delay="400"
			>
				<Link href="/teams">
					<a className={styles.navlink}>Teams</a>
				</Link>
			</div>
			<div
				className={styles.navbutton}
				data-aos="fade-down"
				data-aos-delay="600"
			>
				<Link href="/podcast">
					<a className={styles.navlink}>Podcasts</a>
				</Link>
			</div>
			<div
				className={styles.navbutton}
				data-aos="fade-down"
				data-aos-delay="600"
			>
				<Link href="https://daksh-blog.medium.com/">
					<a href="https://daksh-blog.medium.com/" target="blank" className={styles.navlink}>Blog</a>
				</Link>
			</div>
			<div
				className={styles.navbutton}
				data-aos="fade-down"
				data-aos-delay="600"
			>
				<Link href="/contact">
					<a className={styles.navlink}>Contact</a>
				</Link>
			</div>
		</div>
	);

	return (
		<nav id={styles.navbar} className={navbarBg ? styles.active : ""}>
			<Link href="/">
				<img
					id={styles.logo}
					src="/logo.png"
					data-aos="fade-down"
					data-aos-delay="200"
				/>
			</Link>
			{hnav}
			{navmenu ? (
				<div
					id={styles.menu}
					onClick={() => menuToggle(!navmenu)}
					data-aos="fade-down"
					data-aos-delay="200"
				>
					<MdClose size={35} />
				</div>
			) : (
				<div
					id={styles.menu}
					onClick={() => menuToggle(!navmenu)}
					data-aos="fade-down"
					data-aos-delay="200"
				>
					<IoMenu size={35} />
				</div>
			)}
		</nav>
	);
}

export default Nav;
