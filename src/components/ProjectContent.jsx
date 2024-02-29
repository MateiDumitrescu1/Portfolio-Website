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
		const projectContentSecondStableContainer = document.getElementById(
			styles.projectContentSecondStableContainer,
		);
		if (menuButtonPressed) {
			projectContentContainer.style.transform = "translateX(10em)";
			projectContentSecondStableContainer.style.transform = "translateX(10em)";
		} else {
			// Reset the transform when menuButtonPressed is false
			projectContentContainer.style.transform = "";
			projectContentSecondStableContainer.style.transform = "";
		}
	}, [menuButtonPressed]); // This effect runs on menuButtonPressed changes
	useEffect(() => {
		setAnimate(true);
	}, []);
	return (
		<>
			<div
				id={styles.projectContentContainerID}
				className={`${animate ? styles.projectContentContainerExpand : ""}`}
			>
				
				
			</div>
			<div
				className={`${animate ? styles.StableContainerAnimate : ""}`}
				id={styles.projectContentSecondStableContainer}
			> 
			{actualPlanetID === "planet0" && (
					<>
						<div className={styles.techContainer}>
							<div className={styles.teachStackLogo} id={styles.reactLogo}> </div>

							<div className={styles.teachStackLogo} id={styles.sassLogo}> </div>

							<div className={styles.teachStackLogo} id={styles.tailwindLogo}> </div>

							<div className={styles.teachStackLogo} id={styles.tsLogo}> </div>

							<div className={styles.teachStackLogo} id={styles.emotion}>Emotion</div>
						</div>
						
						<div className={styles.projectsContainer}> 
							<div className={styles.projectCard}>
								<div className={styles.imageProjectStack}> 
									<img src="src/assets/default_image.png" alt="imgDefault" />
									<img src="src/assets/default_image.png" alt="imgDefault" />
								</div>
								<div className={styles.projectCardContent}>Coming real soon...</div>
							</div>
						</div>
					</>
				)}
				{actualPlanetID === "planet1" && (
					<>
						<div className={styles.techContainer}>
							
						</div>
						
						<div className={styles.projectsContainer}> 
							<div className={styles.projectCard}>
								<div className={styles.imageProjectStack}> 
									<img src="src/assets/default_image.png" alt="imgDefault" />
									<img src="src/assets/default_image.png" alt="imgDefault" />
								</div>
								<div className={styles.projectCardContent}>Backend coming real soon...</div>
							</div>
						</div>
					</>
				)}
				{actualPlanetID === "planet2" && (
					<>
						<div className={styles.techContainer}>
							
						</div>
						
						<div className={styles.projectsContainer}> 
							<div className={styles.projectCard}>
								<div className={styles.imageProjectStack}> 
									<img src="src/assets/default_image.png" alt="imgDefault" />
									<img src="src/assets/default_image.png" alt="imgDefault" />
								</div>
								<div className={styles.projectCardContent}>.NET projects coming real soon...</div>
							</div>
						</div>
					</>
				)}
				{actualPlanetID === "planet3" && (
					<>
						<div className={styles.techContainer}>
							
						</div>
						
						<div className={styles.projectsContainer}> 
							<div className={styles.projectCard}>
								<div className={styles.imageProjectStack}> 
									<img src="src/assets/default_image.png" alt="imgDefault" />
									<img src="src/assets/default_image.png" alt="imgDefault" />
								</div>
								<div className={styles.projectCardContent}>Java ecosystem coming real soon...</div>
							</div>
						</div>
					</>
				)}
				{actualPlanetID === "ISS" && (
					<>
						<div className={styles.techContainer}>
							
						</div>
						
						<div className={styles.projectsContainer}> 
							<div className={styles.projectCard}>
								<div className={styles.imageProjectStack}> 
									<img src="src/assets/default_image.png" alt="imgDefault" />
									<img src="src/assets/default_image.png" alt="imgDefault" />
								</div>
								<div className={styles.projectCardContent}>A software project is coming real soon...</div>
							</div>
						</div>
					</>
				)}
				</div>
		</>
	);
}

export default ProjectContent;
