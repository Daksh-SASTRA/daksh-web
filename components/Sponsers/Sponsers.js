import React, { useState, useEffect } from "react";
import styles from "./sponsers.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";

function Sponsers() {
	// const [delay, setDelay] = useState(1000);
	// useEffect(() => {

	//   setTimeout(()=> {console.log("Hello")},delay)
	// });
	const myDelay = (key) => {
		// function sleep(milliseconds) {
		//   const date = Date.now();
		//   let currentDate = null;
		//   do {
		//     currentDate = Date.now();
		//   } while (currentDate - date < milliseconds);
		// }
		var delay = key * 1000;
		setTimeout(() => {
			console.log("hello");
		}, delay);
	};
	var settings = {
		autoplay: true,
		infinite: true,
		dots: false,
		arrows: false,
		variableWidth: true,
		autoplaySpeed: 3000,
		speed: 500,
		mobileFirst: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		responsive: [
			{
				breakpoint: 770,
				settings: {
					centerMode: true,
					centerPadding: "0px",
					slidesToShow: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					centerMode: true,
					centerPadding: "0px",
					slidesToShow: 1,
				},
			},
		],
	};

	return (
		<section className={styles.sponsers} data-aos="fade-up">
			<h3 className={styles.sponsers__h3}>Sponsors</h3>
			<div className={styles.sponser_slider}>
				<Slider {...settings}>
					<div className={styles.sponsers__div}>
						<img
							className={styles.sponser_infinite}
							src="/sponsers/d2k23/Teg_new.png"
							alt="sponser-1"
							width="250px"
							height="150px"
						/>
					</div>
					<div className={styles.sponsers__div}>
						<img
							className={styles.sponser_infinite}
							src="/sponsers/d2k23/Aruba_Networks_logo_.png"
							alt="sponser-2"
							width="250px"
							height="150px"
						/>
					</div>
					<div className={styles.sponsers__div}>
						<img
							className={styles.sponser_infinite}
							src="/sponsers/d2k23/intel_1_API_.png"
							alt="sponser-3"
							width="250px"
							height="150px"
						/>
					</div>
					<div className={styles.sponsers__div}>
						<img
							className={styles.sponser_infinite}
							src="/sponsers/d2k23/Fortinet_.png"
							alt="sponser-4"
							width="250px"
							height="150px"
						/>
					</div>
					<div className={styles.sponsers__div}>
						<img
							className={styles.sponser_infinite}
							src="/sponsers/d2k23/tata_elxsi.png"
							alt="sponser-5"
							width="250px"
							height="150px"
						/>
					</div>
					<div className={styles.sponsers__div}>
						<img
							className={styles.sponser_infinite}
							src="/sponsers/d2k23/TATA-Communications-Logo_.png"
							alt="sponser-6"
							width="250px"
							height="150px"
						/>
					</div>
					<div className={styles.sponsers__div}>
						<img
							className={styles.sponser_infinite}
							src="/sponsers/d2k23/jump_trade_bg.jpg"
							alt="sponser-7"
							width="250px"
							height="150px"
						/>
					</div>
				</Slider>
			</div>
		</section>
	);
}
// https://picsum.photos/200/300
export default Sponsers;
