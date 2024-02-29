import React, { useState, useEffect } from "react";
import "./App.sass";
import "./index.sass";
import Menu from "./components/Menu";
import Hey from "./components/Hey";
import SolarSystem from "./components/SolarSystem";
import ProjectContent from "./components/ProjectContent";
import Logo from "./components/Logo";
import styles from "./components/Menu.module.sass";
import heystyles from "./components/Hey.module.sass";
import PreLoader from "./components/PreLoader";

function MainArea({
	planetID,
	updateSetPlanetIdPressed,
	currentWorkButtonPressed,
	menuButtonPressed,
	buttonFunction,
	planetButtonPressed,
}) {
	return (
		<>
			<Hey
				menuButtonPressed={menuButtonPressed}
				timeGoDisappear={planetButtonPressed}
			/>
			<SolarSystem
				updateSetPlanetIdPressed={updateSetPlanetIdPressed}
				timeGoDisappear={planetButtonPressed || currentWorkButtonPressed}
				buttonFunction={buttonFunction}
			/>
			{ planetButtonPressed && <ProjectContent 
			planetID={planetID}
			menuButtonPressed={menuButtonPressed} />}
		</>
	);
}

function App() {
	const [menuButtonPressed, setMenuButtonPressed] = useState(false);

	const [showLoader, setShowLoader] = useState(true);
	const [showmain, setShowMain] = useState(false);
	useEffect(() => {
		// Simulate a loading time
		const timer = setTimeout(() => setShowLoader(false), 3000); // Adjust time as necessary
		return () => clearTimeout(timer);
	  }, []);
	useEffect(() => {
		// Simulate a loading time
		const timer = setTimeout(() => setShowMain(true), 2500); // Adjust time as necessary
		return () => clearTimeout(timer);
	  }, []);

	const [currentWorkButtonPressed, setCurrentWorkButtonPressed] =
		useState(false);
	const updateMenuButtonPressed = () => {
		setMenuButtonPressed(!menuButtonPressed);
	};
	const [planetButtonPressed, setPlanetButtonPressed] = useState(false);
	const [planetIdPressed, setPlanetIdPressed] = useState("");

	function updateSetPlanetIdPressed(planetID) {
		setPlanetIdPressed(planetID);
	}

	const updatePlanetButtonPressed = () => {
		if (planetButtonPressed === false) {
			setPlanetButtonPressed(true);
		}
		// turn the current work button into a back button
	};
	const currentWorkHover = (event) => {
		if (planetButtonPressed === false) {
			const sepDiv = document.getElementById("separatorDiv");
			sepDiv.classList.add("separatorApp");
		}
	};
	const stopCurrentWorkHover = (event) => {
		if (planetButtonPressed === false) {
			const sepDiv = document.getElementById("separatorDiv");
			sepDiv.classList.remove("separatorApp");
		}
	};
	// curent work function
	// curent work function
	const backButtonPressed = () => {
		if (currentWorkButtonPressed === true) {
			// now the current work section dissapears
			setCurrentWorkButtonPressed(false);
			DONTrenderWorkNowContent();
		} else if (planetButtonPressed === true) {
			setPlanetButtonPressed(false);
			setCurrentWorkButtonPressed(false);
		} else {
			// now we see the curent work section
			setCurrentWorkButtonPressed(true);
			setPlanetButtonPressed(false);
			const sepDiv = document.getElementById("separatorDiv");
			sepDiv.classList.add("separatorRenderApp");

			renderWorkNowContent();
		}
	};
	// curent work function
	// curent work function
	function renderWorkNowContent() {
		console.log();
		setTimeout(() => {
			const doingNowContainerAppEl = document.getElementById("nowContainerApp");
			doingNowContainerAppEl.classList.add("doingNowContainerApp");
		}, 300);
	}
	function DONTrenderWorkNowContent() {
		const sepDiv = document.getElementById("separatorDiv");
		sepDiv.classList.remove("separatorRenderApp");

		const doingNowContainerAppEl = document.getElementById("nowContainerApp");
		doingNowContainerAppEl.classList.remove("doingNowContainerApp");
	}
	const menuButtonLogoContainer = {
		display: "flex",
		flexFlow: "row",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "transparent",
		height: "15vh",
		width: "12em",
		marginLeft: "2em",
		marginTop: "2em",
	};
	// Pass buttonPressed as a prop to MainArea
	return (
		<>
		{ showLoader &&  <PreLoader /> }
		{ showmain && ( <main className="mainDivApp">
			<div style={menuButtonLogoContainer}>
				<button
					onClick={updateMenuButtonPressed}
					type="button"
					className={styles.menuButton}
				>
					<img src="src\assets\menu.png" alt="menu" />
				</button>
				<Logo />
			</div>
			<button
				onClick={backButtonPressed}
				onMouseEnter={currentWorkHover}
				onMouseLeave={stopCurrentWorkHover}
				className={heystyles.currentWorkButton}
				type="button"
			>
				{!planetButtonPressed && !currentWorkButtonPressed && (
					<p>See my current work</p>
				)}
				{planetButtonPressed && !currentWorkButtonPressed && <p>Back</p>}
				{currentWorkButtonPressed && <p>Back Home</p>}
			</button>
			<Menu menuButtonPressed={menuButtonPressed} />;
			<MainArea
				planetID={planetIdPressed}
				updateSetPlanetIdPressed={updateSetPlanetIdPressed}
				currentWorkButtonPressed={currentWorkButtonPressed}
				menuButtonPressed={menuButtonPressed}
				buttonFunction={updatePlanetButtonPressed}
				planetButtonPressed={planetButtonPressed}
			/>
			<div id="separatorDiv">
				
			</div>
			<div id="nowContainerApp">
				{ currentWorkButtonPressed && <div className="doingNowCardApp">
				<div className="imgContainerApp">
					<img src="src\assets\magichover.png" alt="Magic Hover" />
				</div>
					<div className="doingNowDescriptionApp"> 
						<h1>Recreating this hover effect...</h1>
						<h2 className={heystyles.gradient}>Why?</h2>
						<p>Because this effect is one of the most professionally
						implemented hovers I have ever seen</p>
					</div>
				</div>}
				
				{ currentWorkButtonPressed && <div id="midApp" className="doingNowCardApp">
				<div className="imgContainerApp">
					<img src="src\assets\components.webp" alt="Magic Hover" />
				</div>
					<div className="doingNowDescriptionApp"> 
						<h1>Building my own component library</h1>
						<h2 className={heystyles.gradient}>Why?</h2>
						<p>Amazin for learning. Fun. I want my products to stand out</p>
					</div>
				</div>}
				{ currentWorkButtonPressed && <div className="doingNowCardApp">
				<div className="imgContainerApp">
					<img src="src\assets\dotnet.png" alt="Magic Hover" />
				</div>
					<div className="doingNowDescriptionApp"> 
						<h1>Learnign .NET</h1>
						<h2 className={heystyles.gradient}>Why?</h2>
						<p>C# is cool and a lot of things are built with .NET!</p>
					</div>
				</div>}
				{ currentWorkButtonPressed && <div className="seeMoreOnGitHub">
					{/* biome-ignore lint/a11y/useAnchorContent: <explanation> */}
					<a href="https://github.com/MateiDumitrescu1" alt="GitHub">
						
					</a>
					<p>More on GitHub</p>
				</div>}
	
			</div>
		</main> ) }
		</>
	);
}

export default App;