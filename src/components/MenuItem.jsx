import React from 'react'
import styles from './Menu.module.sass'
function MenuItem({title,underlineLength}) {

    const underlinedDiv = {
        position: 'absolute',
        width: `${underlineLength}em`,
        height: '2px',
        backgroundColor: 'white',
        left: '0.5em',
        
    }
  return (
    <div className={styles.menuItem}>
        <p>{title}</p>
        <div className={styles.underlineD} style={underlinedDiv} />
    </div>
  )
}

export default MenuItem