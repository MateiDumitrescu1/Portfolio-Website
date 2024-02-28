import React from 'react'
import {useEffect, useState} from 'react'
import styles from './ProjectContent.module.sass'
function ProjectContent({menuButtonPressed}) {
  const [animate, setAnimate] = useState(false)
  useEffect(() => {
    const projectContentContainer = document.getElementById(styles.projectContentContainerID);
    if (menuButtonPressed) {
      projectContentContainer.style.transform = 'translateX(10em)';
    } else {
      // Reset the transform when menuButtonPressed is false
      projectContentContainer.style.transform = '';
    }
  }, [menuButtonPressed]); // This effect runs on menuButtonPressed changes
  useEffect(() => {
    setAnimate(true)
  }, []);
  return (
    <div id={styles.projectContentContainerID} className={`${animate ? styles.projectContentContainerExpand : ''}`}>
      ProjectContent
    </div>
  );
}

export default ProjectContent