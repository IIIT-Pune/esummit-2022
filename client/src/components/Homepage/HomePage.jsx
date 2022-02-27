import React, { useState, useEffect, useRef } from "react";
import "./Homepage.css";
import linesanddots from "../images/linesanddots.png";
import globe from "../images/dots.png";
import shine from "../images/shine.png";
import chatbot from "../images/Chatbot.png";
import NavBar from "./NavBar";

export default function Homepage() {
	const preScrollY = useRef(0);
	const [goingUp, setgoingUp] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			if (currentScrollY > 100) return;
			if (preScrollY.current < currentScrollY && goingUp) {
				setgoingUp(false);
			}
			if (preScrollY.current < currentScrollY && !goingUp) {
				setgoingUp(true);
			}
			preScrollY.current = currentScrollY;
			let value = window.scrollY;
			text.style.top = value * 2.25 + "px";
			text.style.opacity = 1 - value / 50;
			text.style.zIndex = 1;
			text.style.transitionTimingFunction = "ease-in-out";
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [goingUp, window.scrollY]);

	let text = document.getElementById("text");
	window.addEventListener("scroll", function () {});
	return (
		<div className="overflow-hidden">
			<div id="banner">
				<span id="text">E-SUMMIT</span>
			</div>
			<div className="images">
				<img className="lines" src={linesanddots} alt="linesanddots" />
				<img className="globe" src={globe} alt="globe" />
				<img className="shine" src={shine} alt="Shine" />
				<img className="chatbot" src={chatbot} alt="Chatbot" />
			</div>
		</div>
	);
}
