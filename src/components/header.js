import React from "react"
import { Link } from "gatsby"
import { globalHistory as history } from '@reach/router'

import headerStyles from "../styles/header.module.scss"

const Header = () => {
  const { location } = history
  return (
    <header className={location.pathname === '/' ? headerStyles.indexHeader : ''}>
      <img className={headerStyles.logo} src="https://silcestates.com/wp-content/uploads/2019/07/logo-SILC-states.png" alt="logo"></img>
      <nav className={headerStyles.nav}>
        <ul className={headerStyles.navList}>
          <li><Link to="/" className={headerStyles.navItem}>Home</Link></li>
          <li><Link to="estates" className={headerStyles.navItem}>Aanbod</Link></li>
          {/* <li className={headerStyles.navItem}>Onze Projecten</li>
          <li className={headerStyles.navItem}>Over ons</li>
          <li className={headerStyles.navItem}>Wij zoeken voor u</li>
          <li className={headerStyles.navItem}>Wonen in Spanje</li>
          <li className={headerStyles.navItem}>Bezichtigingsprijs</li>
          <li className={headerStyles.navItem}>Nieuws</li>
          <li className={headerStyles.navItem}>Aankoopgids</li> */}
          <li><Link to="contact" className={headerStyles.navItem}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header