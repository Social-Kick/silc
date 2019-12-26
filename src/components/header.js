import React from "react"

import headerStyles from "./header.module.scss"

const Header = () => (
  <header>
    <img src="https://silcestates.com/wp-content/uploads/2019/07/logo-SILC-states.png" alt="logo" height="80"></img>
    <nav className={headerStyles.nav}>
      <ul className={headerStyles.navList}>
        <li className={headerStyles.navItem}>Home</li>
        <li className={headerStyles.navItem}>Onze Project</li>
        <li className={headerStyles.navItem}>Over ons</li>
        <li className={headerStyles.navItem}>Wij zoeken voor u</li>
        <li className={headerStyles.navItem}>Wonen in Spanje</li>
        <li className={headerStyles.navItem}>Bezichtigingsprijs</li>
        <li className={headerStyles.navItem}>Nieuws</li>
        <li className={headerStyles.navItem}>Aankoopgids</li>
        <li className={headerStyles.navItem}>Contact</li>
      </ul>
    </nav>
  </header>
)

export default Header