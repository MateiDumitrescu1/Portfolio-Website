import React from "react";
import styles from "./Hey.module.sass";
function Hey({menuButtonPressed, timeGoDisappear }) {
	// pass in the boolean timeGoDisappear. at beg this is false
	// disappearClass = class to add to heyContainer if its time to disappear
	// console.log(disappearClass);
	return (
		<div
			className={`${styles.heyContainer} ${
				timeGoDisappear ? styles.heyDisappear : ""
			} 
		${menuButtonPressed ? styles.moveHeyRight : ""}`}
		>
			
			<div className={styles.greeting}>
				<h1>Hey👋 I'm Matei.</h1>
				<h1>I'm a software engineer and mathematician focused on learning</h1>
				<h2>Currently learning at TU Delft</h2>
			</div>
			<div className={styles.socialMediaSection}>
				<a href="https://github.com/MateiDumitrescu1">
					<img src="src/assets/github.png" alt="GitHub" />
				</a>
				<a href="https://codepen.io/your-work">
					<img src="src/assets/linkedin.png" alt="LinkedIn" />
				</a>
				<a href="https://codepen.io/your-work">
					<img src="src/assets/codepen.png" alt="CodePen" />
				</a>
				<a className={styles.biggerMailLogo} href="https://codepen.io/your-work">
					<img src="src/assets/gmail.png" alt="Gmail" />
				</a>
				<a className={styles.socialMediaNoFilter} href="https://codepen.io/your-work">
					<img src="src/assets/insta.png" alt="Instagram" />
				</a>
				
			</div>
		</div>
	);
}

export default Hey;
