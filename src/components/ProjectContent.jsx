import React from "react";
import { useEffect, useState } from "react";
import styles from "./ProjectContent.module.sass";
function ProjectContent({ planetID, menuButtonPressed }) {
	const [animate, setAnimate] = useState(false);
	const actualPlanetID = planetID.split("_")[1];
	console.log(actualPlanetID);
	useEffect(() => {
		const projectContentContainer = document.getElementById(
			styles.projectContentContainerID,
		);
		if (menuButtonPressed) {
			projectContentContainer.style.transform = "translateX(10em)";
		} else {
			// Reset the transform when menuButtonPressed is false
			projectContentContainer.style.transform = "";
		}
	}, [menuButtonPressed]); // This effect runs on menuButtonPressed changes
	useEffect(() => {
		setAnimate(true);
	}, []);
	return (
		<div
			id={styles.projectContentContainerID}
			className={`${animate ? styles.projectContentContainerExpand : ""}`}
		>
			ProjectContent
			{actualPlanetID === "planet0" && (
				<>
					<div className={styles.techContainer}>
						<div id={styles.reactLogo}> </div>

						<div id={styles.sassLogo}> </div>
					</div>{" "}
					&&
					<div className={styles.projectsContainer}> </div>
				</>
			)}
		</div>
	);
}

export default ProjectContent;
