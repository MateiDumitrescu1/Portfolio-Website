import React, { useState, useEffect } from "react";
import styles from "./Hey.module.sass";
import '../index.sass'
import { css,  keyframes } from "@emotion/react";
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import codepen from '../assets/codepen.png'
import insta from '../assets/insta.png'

function Hey({menuButtonPressed, timeGoDisappear }) {
	
	const purple = {
		
		color: '#7209b7',
		fontWeight: 'bold',
	};
	const delftblue = {
		position: 'relative',
		color: '#00A6D6',
		fontWeight: 'bold',
		display: 'inline'
	};
	const words = ["learning", "growing", "creating", "building", "improving"];
	const [currentWordIndex, setCurrentWordIndex] = useState(0);
	useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentWordIndex((currentWordIndex) => (currentWordIndex + 1) % words.length);
        }, 3000);

        // Clear the interval on component unmount
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array means this effect runs only once on mount

	return (
		<div
			className={`${styles.heyContainer} ${
				timeGoDisappear ? styles.heyDisappear : ""
			} 
		${menuButtonPressed ? styles.moveHeyRight : ""}`}
		>
			
			<div className={styles.greeting}>
				<h1>Hey👋 I'm <span style={purple}>Matei</span>.</h1>
				<h1>I'm a <span className={styles.gradient}>software engineer</span> and maτhemaτician focused on <span className="changeWord">{words[currentWordIndex]}</span></h1>
				<h2>Currently <span className="changeWord">{words[currentWordIndex]}</span> at 
				<div style={delftblue}> TU Delft 
					{/* biome-ignore lint/a11y/useAnchorContent: <explanation> */}
<a id={styles.TUDelftLink} href="https://www.tudelft.nl/en/onderwijs/opleidingen/bachelors/computer-science-and-engineering/bachelor-of-computer-science-and-engineering" />
				</div></h2>
			</div>
			<div className={styles.socialMediaSection}>
				<a href="https://github.com/MateiDumitrescu1">
					<img src={github} alt="GitHub" />
				</a>
				<a href="https://www.linkedin.com/in/matei-dumitrescu-999a14292/">
					<img src={linkedin} alt="LinkedIn" />
				</a>
				<a href="https://codepen.io/your-work">
					<img src={codepen} alt="CodePen" />
				</a>
				<a className={styles.socialMediaNoFilter} href="https://www.instagram.com/matei.dumitrescu.7792/">
					<img src={insta} alt="Instagram" />
				</a>
				
			</div>
		</div>
	);
}

export default Hey;
