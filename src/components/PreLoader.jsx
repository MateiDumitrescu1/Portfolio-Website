import React from "react";
import styles from "./PreLoader.module.sass";
import { useState, useEffect, useRef} from "react";
import heystyles from "./Hey.module.sass";
function PreLoader() {
	const [mousePosition, setMousePosition] = useState({ topX:0, topY:0, botX:0, botY:0 });
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
		};
		window.addEventListener("mousemove", handleMouseMove);
		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);
	const backgroundSpotlightTop = {
		backgroundImage: `radial-gradient(circle 160px at ${mousePosition.topX}px ${mousePosition.topY}px, rgba(247,37,133,0.3) 0%, rgba(0, 0, 0, 0.3) 100%)`,
	  };
	  const backgroundSpotlightBot = {
		backgroundImage: `radial-gradient(circle 160px at ${mousePosition.botX}px ${mousePosition.botY}px, rgba(255, 255, 255, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%)`,
	  };
	return (
		<>
			<div ref={topRef} style={backgroundSpotlightTop} className={styles.top}>
                <h1 className={heystyles.gradient} id={styles.poz1}>Focus</h1>
            </div>
			<div ref={botRef} style={backgroundSpotlightBot} className={styles.bot}>
                <h1 id={styles.poz2}>Efficiency Consistency</h1>
            </div>
			{/* fac un div care sa fie un spotlight gradient miscat odata cu mouse ul */}
			
		</>
	);
}

export default PreLoader;
