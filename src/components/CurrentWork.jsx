import React from "react";
import styles from "./CurrentWork.module.sass";
import "../App.sass";
import heystyles from "./Hey.module.sass";

import magichover from "../assets/magichover.png";
import components from "../assets/components.webp";
import dotnet from "../assets/dotnet.png";
import githubSeeMore from "../assets/githublogo.png";
function CurrentWork() {
	return (
		<div className={styles.container}>
			<div className="doingNowCardApp">
				<div className="imgContainerApp">
					<img src={magichover} alt="Magic Hover" />
				</div>
				<div className="doingNowDescriptionApp">
					<h1>Recreating this hover effect</h1>
					<h2 className={heystyles.gradient}>Why?</h2>
					<p>
						Because this effect is one of the most professionally implemented
						hovers I have ever seen
					</p>
				</div>
			</div>

			<div id="midApp" className="doingNowCardApp">
				<div className="imgContainerApp">
					<img src={components} alt="Magic Hover" />
				</div>
				<div className="doingNowDescriptionApp">
					<h1>Building my own component library</h1>
					<h2 className={heystyles.gradient}>Why?</h2>
					<p>
						Amazing for learning. Fun. I want my products to stand out and go
						from concept to real-life fast
					</p>
				</div>
			</div>

			<div className="doingNowCardApp">
				<div className="imgContainerApp">
					<img src={dotnet} alt="Magic Hover" />
				</div>
				<div className="doingNowDescriptionApp">
					<h1>Learning .NET</h1>
					<h2 className={heystyles.gradient}>Why?</h2>
					<p>C# is cool and a lot of things are built with .NET!</p>
				</div>
			</div>
			<div className="seeMoreOnGitHub">
				{/* biome-ignore lint/a11y/useAnchorContent: <explanation> */}
				<a href={githubSeeMore} alt="GitHub" />
				<p>More on GitHub</p>
			</div>
		</div>
	);
}

export default CurrentWork;
