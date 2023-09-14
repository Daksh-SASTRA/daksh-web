import React from "react";
import Link from "next/link";
import styles from "./about.module.css";
import Buttons from "../Buttons/Buttons";
import Image from "next/image";
function About() {
	return (
		<section className={styles.about}>
			<div className={styles.row__about} data-aos="fade-up">
				<div className={styles.col_lg_6}>
					<div className={styles.text_container__about}>
						<h3 className={`${styles.about__h3} ${styles.theme_text}`}>
							About Us
						</h3>
						<p className={styles.about__p}>
							Instituted in 2007, DAKSH is the annual techno management fest of
							Sastra University. Ever since its establishment it has been a
							platform for a multitude of students and aspirants to unravel
							their talents and showcase their technical prowess. We&apos;ve grown
							together as a fest since our inception providing students with the
							finest exposure and skill. This edition of Daksh aims at creating
							a virtual forum bringing together the eccentric minded and
							celebrating technology.
						</p>
						{/* <Link href="#newsletter">
                            <a className={styles.button__about} >  Teams </a>
                        </Link> */}
						<Link href="/teams" passHref>
							<div>
								<div className={styles.teams_btn}>Teams &#x2794;</div>
								{/* <Buttons text="TEAMS" radius="10px" /> */}
							</div>
						</Link>
					</div>
				</div>
				<div className={styles.col_lg_6}>
					<div className={styles.image_container__about}>
						<Image
							width={400}
							height={400}
							className={styles.about__img_fluid}
							src="/welding.webp"
							alt="dummy image"
						/>
						{/* <iframe className={styles.about__video_size}  src="https://www.youtube.com/embed/pFL37QpQ5t0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
					</div>
				</div>
			</div>
		</section>
	);
}
// width="560" height="315"
export default About;
