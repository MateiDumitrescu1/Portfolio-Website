import React from "react";
import newStyles from "./TopLeftButtons.module.sass";
import menuIcon from "../assets/menu.png";


function TopLeftButtons({
    setCurrentWorkHovered,
	menuButtonPressed,
	currentWorkButtonPressed,
	planetButtonPressed,
	updateMenuButtonPressed,
	everythingButtonPressed,
}) {
	return (
		<div className={newStyles.container}>
			<button
				onClick={updateMenuButtonPressed}
				type="button"
				className={newStyles.menuButton}
			>
				<img src={menuIcon} alt="menu" />
			</button>
			{/* logo */}
			<div className={newStyles.logoContainer}>
				<p>Focus</p>
				<p>Efficiency</p>
				<p>Consisntency</p>
			</div>
			<button
				onClick={everythingButtonPressed}
                onMouseEnter={() => setCurrentWorkHovered(true)}
                onMouseLeave={() => setCurrentWorkHovered(false)}
				className={newStyles.currentWorkButton}
				type="button"
			>
				{!planetButtonPressed && !currentWorkButtonPressed && (
					<p>See my current work</p>
				)}
				{planetButtonPressed && !currentWorkButtonPressed && <p>Back</p>}
				{currentWorkButtonPressed && <p>Back Home</p>}
			</button>

		</div>
	);
}

export default TopLeftButtons;
