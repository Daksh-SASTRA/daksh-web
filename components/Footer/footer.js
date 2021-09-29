import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
import {
	TiSocialTwitter,
	TiSocialYoutube,
} from "react-icons/ti";
import { AiFillMediumCircle, AiOutlineInstagram} from "react-icons/ai";
import {RiFacebookCircleFill, RiLinkedinBoxFill} from "react-icons/ri";


function footer() {
	return (
		<div className={styles.footer}>
			<div className={styles.footer_logo}>
				<img
					src="/logo.png"
					style={{ width: "175px" }}
					alt="Daksh logo"
				/>
				<div id={styles.footer_icons}>
					<a href="https://www.instagram.com/daksh2k22/?hl=en" target="_blank">
						<AiOutlineInstagram className={styles.footer_icon} />
					</a>
					<a href="https://daksh-blog.medium.com/" target="_blank">
						<AiFillMediumCircle className={styles.footer_icon} />
					</a>
					<a href="https://www.linkedin.com/company/dakshsastra/" target="_blank">
						<RiLinkedinBoxFill className={styles.footer_icon} />
					</a>
					<a href="https://twitter.com/Daksh2k22" target="_blank">
						<TiSocialTwitter className={styles.footer_icon} />
					</a>
					<a href="https://www.youtube.com/channel/UCiFKilPCc87fcbIRh_tiPQA" target="_blank">
						<TiSocialYoutube className={styles.footer_icon} />
					</a>
					<a href="https://www.facebook.com/daksh.sastra" target="_blank">
						<RiFacebookCircleFill className={styles.footer_icon} />
					</a>
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
					<Link href="/podcast">
						<a>Podcasts</a>
					</Link>
				</div>
				<div className={styles.footer_contact}>
					<h2>Contact</h2>
					<div>
						<Link href="mailto:chairman.daksh@sastra.ac.in" target="blank">
							<a>Hari Haran
							<br />
							chairman.daksh@sastra.ac.in
							<br />
							+91 7397067957</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default footer;
