import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

// Assigned To Santhosh
// Background Colour - primaryBg

function footer() {
	return (
		<div className={styles.footer}>
			<div className={styles.footer_logo}>
				<Image src="/logo.png" width={400} height={200} alt="Daksh logo" />
			</div>
			<div className={styles.footer_links}>
				<h2>Quick Links</h2>
				<Link href="/">
					<a>Events and Workshops</a>
				</Link>
				<Link href="/">
					<a>Teams</a>
				</Link>
				<Link href="/">
					<a>Podcasts</a>
				</Link>
			</div>
			<div className={styles.footer_contact}>
				<h2>Contact</h2>
			</div>
		</div>
	);
}

export default footer;
