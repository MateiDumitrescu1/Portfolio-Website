import React from 'react'
import {useEffect, useState} from 'react'
import styles from './ProjectContent.module.sass'
function ProjectContent() {
  const [animate, setAnimate] = useState(false)
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