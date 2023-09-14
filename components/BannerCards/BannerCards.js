import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from "next/link";
import styles from "./bannercards.module.css";
import Image from "next/image"

function BannerCards() {
	const carousel_items = [
		{
			idx: 0,
			description: "Teams",
			src: "/team.webp",
			buttonText: "view",
			href: "/teams",
		},
		{
			idx: 1,
			description: "Events",
			src: "/events.webp",
			buttonText: "view",
			href: "/",
		},
		{
			idx: 2,
			description: "Workshops",
			src: "/workshop.webp",
			buttonText: "view",
			href: "/",
		},
		{
			idx: 3,
			description: "Blog",
			src: "/tech.webp",
			buttonText: "view",
			href: "/",
		},
	];

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
				breakpoint: 1000,
				settings: {
					centerMode: true,
					centerPadding: "0px",
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 600,
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
					<Slider {...settings}>
						{carousel_items.map((item, idx) => {
							return (
								<div
									className={
										imageIdx === idx ? styles.card_active : styles.card
									}
									key={idx}
								>
									<div className={styles.center}>
										<div className={styles.card__vectorimg}>
											<Image width={500} height={500} alt={item.description} className={styles.vector} src={item.src} />
										</div>
										<div className={styles.card__head}>{item.description}</div>
										<Link passHref href={item.href}>
											<div className={styles.card__viewbtn}>
												{item.buttonText}
											</div>
										</Link>
									</div>
								</div>
							);
						})}
					</Slider>
				</div>
			</div>
		</>
	);
}

export default BannerCards;
