import React, { useState, useEffect } from "react";

// SASS files
import "./App.sass";
import "./index.sass";
import separatorStyles from "./components/Separator.module.sass";
// Components
import Menu from "./components/Menu";
import Hey from "./components/Hey";
import SolarSystem from "./components/SolarSystem";
import ProjectContent from "./components/ProjectContent";
import PreLoader from "./components/PreLoader";
import TopLeftButtons from "./components/TopLeftButtons";
import CurrentWork from "./components/CurrentWork";

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

	const [currentWorkHovered, setCurrentWorkHovered] = useState(false);

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
	// curent work function
	const EverythingButtonPressed = () => {
		if (currentWorkButtonPressed === true) {
			// now the current work section dissapears
			setCurrentWorkButtonPressed(false);
		} else if (planetButtonPressed === true) {
			// 
			setPlanetButtonPressed(false);
			setCurrentWorkButtonPressed(false);
		} else {
			// now we see the curent work section
			setCurrentWorkButtonPressed(true);
			setPlanetButtonPressed(false);
		}
	};

	// Pass buttonPressed as a prop to MainArea
	return (
		<>
		{ showLoader &&  <PreLoader /> }
		{ showmain && ( <main className="mainDivApp">
			<TopLeftButtons
				setCurrentWorkHovered={setCurrentWorkHovered}
				menuButtonPressed={menuButtonPressed}
				currentWorkButtonPressed={currentWorkButtonPressed}
				planetButtonPressed={planetButtonPressed}
				updateMenuButtonPressed={updateMenuButtonPressed}
				everythingButtonPressed={EverythingButtonPressed}
			/>
			<Menu menuButtonPressed={menuButtonPressed} />;
			<MainArea
				planetID={planetIdPressed}
				updateSetPlanetIdPressed={updateSetPlanetIdPressed}
				currentWorkButtonPressed={currentWorkButtonPressed}
				menuButtonPressed={menuButtonPressed}
				buttonFunction={updatePlanetButtonPressed}
				planetButtonPressed={planetButtonPressed}
			/>

			{ !planetButtonPressed &&
			<div id={separatorStyles.separatorBase}
			className={`${currentWorkHovered ? separatorStyles.show : ""}
			${currentWorkButtonPressed && separatorStyles.expandSeparator} `}>
				
			</div> }

			{ currentWorkButtonPressed && 
			<CurrentWork
				currentWorkButtonPressed={currentWorkButtonPressed}
			/> }

		</main> ) }
		</>
	);
}

export default App;