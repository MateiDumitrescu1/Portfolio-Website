import React from 'react'
import styles from './Menu.module.sass'
import Logo from './Logo'
import MenuItem from './MenuItem'
function Menu({menuButtonPressed}) {
  return (
    <div className= { `${styles.menuContainer}
    ${menuButtonPressed ? styles.menuContainerExpanded : 
    styles.menuContainerColapsed}` }>
        
        <MenuItem title="home" underlineLength={2.5}/> 
        <MenuItem title="about me" underlineLength={4.2}/>
        <MenuItem title="my work" underlineLength={3.7}/>
        <MenuItem title="cv" underlineLength={0.9}/>
    </div>
  )
}

export default Menu

// the menu border moves slightly on hover 
// ON hove for each m,enu item:
// 3. other text becomes a bit gray and faded out