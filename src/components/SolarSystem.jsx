import React from 'react'
import styles from './SolarSystem.module.sass'
function SolarSytem({timeGoDisappear,buttonFunction}) {
  if(!timeGoDisappear) {
      resetOrbits();
  }
  function resetOrbits() {
    const orbits = document.querySelectorAll(`.${styles.orbitLineExpand}`);
    for(let i = 0; i < orbits.length; i++) {
      orbits[i].classList.remove(`${styles.orbitLineExpand}`);
    }
  }
  function expandOrbit(event) {
    //convert from orbit it to planet id
    const orbitIdToExpand = event.target.id.replace('planet', 'orbit');
    const planets = document.querySelectorAll(`.${styles.planet}`);
    const orbits = document.querySelectorAll(`.${styles.orbitLine}`);
    for(let i = 0; i < orbits.length; i++) {
      if(orbits[i].id === orbitIdToExpand) {
        const thisOrbit = orbits[i];
        thisOrbit.classList.add(`${styles.orbitLineExpand}`);
      }
    }
  }
    const handlePlanetClick = (event) => {
    // we update the button state in the parent component
    // we expand the orbit
    buttonFunction();
    expandOrbit(event);
  }
  return (
    <div className={ `${styles.solarContainer} 
    ${timeGoDisappear ? styles.solarDisappear : ''} `  }>
      <div id={styles.orbit0} className={`${styles.orbitLine}`}>
        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <div onClick={handlePlanetClick} id={styles.planet0} className={styles.planet}>
0
        </div>
      </div>
      <div id={styles.orbit1} className={styles.orbitLine}>
        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <div onClick={handlePlanetClick} id={styles.planet1} className={styles.planet}>
1
        </div>
      </div>
      <div id={styles.orbit2} className={styles.orbitLine}>
        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <div onClick={handlePlanetClick} id={styles.planet2} className={styles.planet}>
2
        </div>
      </div>
      <div id={styles.orbit3} className={styles.orbitLine}>
        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <div onClick={handlePlanetClick} id={styles.planet3} className={styles.planet}>
3
        </div>
      </div>
      <div id={styles.ISS}>
        <div id={styles.actual_ISS_SVG}>

        </div>
      </div>
    </div>
  )
}

export default SolarSytem