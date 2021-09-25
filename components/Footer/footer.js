import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
import {
	TiSocialInstagramCircular,
	TiSocialFacebookCircular,
	TiSocialTwitterCircular,
	TiSocialYoutubeCircular,
} from "react-icons/ti";

// Assigned To Santhosh
// Background Colour - primaryBg

function footer() {
	return (
		<div className={styles.footer}>
			<div className={styles.footer_logo}>
				<Image src="/logo.png" width={400} height={200} alt="Daksh logo" />
				<div id={styles.footer_icons}>
					<Link href="/">
						<a>
							<TiSocialInstagramCircular className={styles.footer_icon} />
						</a>
					</Link>
					<Link href="/">
						<a>
							<TiSocialFacebookCircular className={styles.footer_icon} />
						</a>
					</Link>
					<Link href="/">
						<a>
							<TiSocialTwitterCircular className={styles.footer_icon} />
						</a>
					</Link>
					<Link href="/">
						<a>
							<TiSocialYoutubeCircular className={styles.footer_icon} />
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
							<a>XXX</a>
						</Link>
						<br />
						<Link href="/">
							<a>YYY</a>
						</Link>
						<br />
						<Link href="/">
							<a>ZZZ</a>
						</Link>
					</adress>
				</div>
			</div>
		</div>
	);
}

export default footer;
