import React from "react";
import styles from "./Hey.module.sass";
function Hey({menuButtonPressed,timeGoDisappear}) {
	// pass in the boolean timeGoDisappear. at beg this is false
	// disappearClass = class to add to heyContainer if its time to disappear
	// console.log(disappearClass);
	return (
		<div className={`${styles.heyContainer} ${timeGoDisappear ? 
		styles.heyDisappear : '' } 
		${menuButtonPressed ? styles.moveHeyRight : ''}`}>
			
			<div className={styles.greeting}>
				<h1>Hey👋 I'm Matei.</h1>
        <h1>I'm a software engineer and mathematician focused
        on learning</h1>
        <h2>Currently learning at TU Delft</h2>
			</div>
		</div>
	);
}

export default Hey;

