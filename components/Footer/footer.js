import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
import {
	TiSocialInstagram,
	TiSocialFacebook,
	TiSocialTwitter,
	TiSocialYoutube,
	TiSocialLinkedin,
} from "react-icons/ti";
import { AiOutlineMedium } from "react-icons/ai";

// Assigned To Santhosh
// Background Colour - primaryBg

function footer() {
	return (
		<div className={styles.footer}>
			<div className={styles.footer_logo}>
				<img
					src="/logo.png"
					style={{ width: "200px", height: "100px" }}
					alt="Daksh logo"
				/>
				<div id={styles.footer_icons}>
					<Link href="/">
						<a>
							<AiOutlineMedium className={styles.footer_icon} />
						</a>
					</Link>
					<Link href="/">
						<a>
							<TiSocialInstagram className={styles.footer_icon} />
						</a>
					</Link>
					<Link href="/">
						<a>
							<TiSocialFacebook className={styles.footer_icon} />
						</a>
					</Link>
					<Link href="/">
						<a>
							<TiSocialTwitter className={styles.footer_icon} />
						</a>
					</Link>
					<Link href="/">
						<a>
							<TiSocialYoutube className={styles.footer_icon} />
						</a>
					</Link>
					<Link href="/">
						<a>
							<TiSocialLinkedin className={styles.footer_icon} />
						</a>
					</Link>
				</div>
			</div>
			<div className={styles.footer_right}>
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
					<adress>
						<Link href="/">
							<a>Hari Haran</a>
						</Link>
						<br />
						<Link href="/">
							<a>chairman.daksh@sastra.ac.in</a>
						</Link>
						<br />
						<Link href="/">
							<a>+91 7397067957</a>
						</Link>
					</adress>
				</div>
			</div>
		</div>
	);
}

export default footer;
