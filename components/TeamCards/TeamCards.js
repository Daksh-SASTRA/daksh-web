import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from "next/link";
import styles from "./teamCards.module.css";
import TeamsData from "../config/teams.json";

function TeamCards() {
	const carousel_items = TeamsData;

	const [imageIdx, setImageIdx] = useState(0);

	var settings = {
		autoplay: true,
		centerMode: true,
		infinite: true,
		dots: true,
		arrows: false,
		autoplaySpeed: 3000,
		slidesToShow: 3,
		speed: 500,
		beforeChange: (current, next) => setImageIdx(next),
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					centerMode: true,
					centerPadding: "0px",
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 800,
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
		<>
			<div className={styles.cardRenderWrap}>
				<div
					className={styles.cardcarousel}
					id="cardcarousel"
					data-aos="fade-up"
				>
					<h4 className={styles.card_title}>Join Us</h4>
					<div className="slider-container">
						<Slider {...settings}>
							{carousel_items.map((item, idx) => {
								return (
									<div
										key={idx}
										className={
											imageIdx === idx ? styles.card_active : styles.card
										}
									>
										<div className={styles.img_container}>
											<img className={styles.img} src={item.src} />
										</div>
										<div className={styles.card__head}>
											{item.teamname.toUpperCase()}
										</div>
									</div>
								);
							})}
						</Slider>
					</div>
				</div>
			</div>
		</>
	);
}

export default TeamCards;
