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
          <li><Link activeClassName={headerStyles.active} to="/" className={headerStyles.navItem}>Home</Link></li>
          <li><Link activeClassName={headerStyles.active} to="estates" className={headerStyles.navItem}>Aanbod</Link></li>
          <li><Link activeClassName={headerStyles.active} to="blog" className={headerStyles.navItem}>Nieuws</Link></li>
          <li><Link activeClassName={headerStyles.active} to="contact" className={headerStyles.navItem}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header