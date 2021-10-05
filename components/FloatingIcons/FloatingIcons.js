import React from "react";
import Styles from "./floatingIcons.module.css";

import { TiSocialTwitter, TiSocialYoutube } from "react-icons/ti";
import { AiFillMediumCircle, AiOutlineInstagram } from "react-icons/ai";
import { RiFacebookCircleFill, RiLinkedinBoxFill } from "react-icons/ri";

function FloatingIcons() {
	return (
		<div className={Styles.floatingIcons}>
			<ul>
				<a
					href="https://www.instagram.com/daksh2k22/?hl=en"
					target="_blank"
					rel="noreferrer"
				>
					<li>
						<AiOutlineInstagram />
					</li>
				</a>
				<a
					href="https://daksh-blog.medium.com/"
					target="_blank"
					rel="noreferrer"
				>
					<li>
						<AiFillMediumCircle />
					</li>
				</a>
				<a
					href="https://www.linkedin.com/company/dakshsastra/"
					target="_blank"
					rel="noreferrer"
				>
					<li>
						<RiLinkedinBoxFill />
					</li>
				</a>
				<a
					href="https://twitter.com/Daksh2k22"
					target="_blank"
					rel="noreferrer"
				>
					<li>
						<TiSocialTwitter />
					</li>
				</a>
				<a
					href="https://www.youtube.com/channel/UCiFKilPCc87fcbIRh_tiPQA"
					target="_blank"
					rel="noreferrer"
				>
					<li>
						<TiSocialYoutube />
					</li>
				</a>
				<a
					href="https://www.facebook.com/daksh.sastra"
					target="_blank"
					rel="noreferrer"
				>
					<li>
						<RiFacebookCircleFill />
					</li>
				</a>
			</ul>
		</div>
	);
}

export default FloatingIcons;
