import React from "react";
import styles from "./PreLoader.module.sass";
import heystyles from "./Hey.module.sass";
function PreLoader() {
	return (
		<>
			<div className={styles.top}>
                <h1 className={heystyles.gradient} id={styles.poz1}>Focus</h1>
            </div>
			<div className={styles.bot}>
                <h1 id={styles.poz2}>Efficiency Consistency</h1>
            </div>
		</>
	);
}

export default PreLoader;
