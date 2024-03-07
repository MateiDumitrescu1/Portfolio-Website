import React, { useState, useEffect, useRef } from "react";
import styles from "./PreLoader.module.sass";
import heystyles from "./Hey.module.sass";

function PreLoader() {
	const [mousePosition, setMousePosition] = useState({
		topX: 0,
		topY: 0,
		botX: 0,
		botY: 0,
	});
	const [isMouseInside, setIsMouseInside] = useState(false); // New state variable
	const topRef = useRef(null);
	const botRef = useRef(null);

	useEffect(() => {
		const handleMouseMove = (e) => {
			const topRect = topRef.current.getBoundingClientRect();
			const botRect = botRef.current.getBoundingClientRect();

			const mouseX = e.clientX;
			const mouseY = e.clientY;
			setMousePosition({
				topX: mouseX - topRect.left,
				topY: mouseY - topRect.top,
				botX: mouseX - botRect.left,
				botY: mouseY - botRect.top,
			});
			setIsMouseInside(true); // Update the flag when mouse moves
		};

		const handleMouseEnter = () => setIsMouseInside(true); // Set true when mouse enters
		const handleMouseLeave = () => setIsMouseInside(false); // Set false when mouse leaves

		window.addEventListener("mousemove", handleMouseMove);
		window.addEventListener("mouseenter", handleMouseEnter); // Listen for mouse enter
		window.addEventListener("mouseleave", handleMouseLeave); // Listen for mouse leave

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
			window.removeEventListener("mouseenter", handleMouseEnter);
			window.removeEventListener("mouseleave", handleMouseLeave);
		};
	}, []);

	const backgroundSpotlightTop = {
		backgroundImage: isMouseInside
			? `radial-gradient(circle 160px at ${mousePosition.topX}px ${mousePosition.topY}px, rgba(247,37,133,0.2) 0%, rgba(0, 0, 0, 0.2) 100%)`
			: "none",
	};
	const backgroundSpotlightBot = {
		backgroundImage: isMouseInside
			? `radial-gradient(circle 160px at ${mousePosition.botX}px ${mousePosition.botY}px, rgba(255, 255, 255, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%)`
			: "none",
	};

	return (
		<>
			<div ref={topRef} style={backgroundSpotlightTop} className={styles.top}>
				<h1 className={heystyles.gradient} id={styles.poz1}>
					Focus
				</h1>
			</div>
			<div ref={botRef} style={backgroundSpotlightBot} className={styles.bot}>
				<h1 id={styles.poz2}>Efficiency Consistency</h1>
			</div>
		</>
	);
}

export default PreLoader;
