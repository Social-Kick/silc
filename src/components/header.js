import React, { Component } from 'react';
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Mobile, Desktop } from "../utils/breakpoint"

import headerStyles from "../styles/components/header.module.scss";

const Nav = () => {
  return (
    <>
      <nav className={`${headerStyles.nav}`}>
        <ul className={headerStyles.navList}>
          <li>
            <Link activeClassName={headerStyles.active} to="/" className={headerStyles.navItem}>Home</Link>
          </li>
          <li>
            <Link activeClassName={headerStyles.active} to="/estates" className={headerStyles.navItem}>Aanbod</Link>
          </li>
          <li>
            <Link style={{ fontSize: '1.6rem' }} activeClassName={headerStyles.active} to="/trip" className={headerStyles.navItem}>Bezichtigingsreis</Link>
          </li>
          <li>
            <Link activeClassName={headerStyles.active} to="/about" className={headerStyles.navItem}>Over ons</Link>
          </li>
          <li>
            <Link activeClassName={headerStyles.active} to="/services" className={headerStyles.navItem}>Diensten</Link>
          </li>
          <li>
            <Link activeClassName={headerStyles.active} to="/blog" className={headerStyles.navItem}>Nieuws</Link>
          </li>
          {/* <li>
            <Link activeClassName={headerStyles.active} to="/tips" className={headerStyles.navItem}>Tips & Tricks</Link>
          </li> */}
          <li>
            <Link style={{ fontSize: '1.3rem' }} activeClassName={headerStyles.active} to="/wijzoekenvoorjou" className={headerStyles.navItem}>Wij zoeken voor jou</Link>
          </li>
          <li>
            <Link activeClassName={headerStyles.active} to="/contact" className={headerStyles.navItem}>Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

class Header extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      isExpanded: null,
    };
  }

  toggle = () => {
    this.setState(prevState => ({ isExpanded: !prevState.isExpanded }));
  }

  render() {
    return (
      <div>
        <header className="no-print">
          <Link to="/">
            <img className={headerStyles.logo} src="https://silcestates.com/wp-content/uploads/2019/07/logo-SILC-states.png" alt="logo"></img>
          </Link>

          <Mobile>
            <button className={headerStyles.btn} onClick={this.toggle}>
              <FontAwesomeIcon icon={['fal', 'bars']} />
            </button>
          </Mobile>
          <Desktop>
            <nav className={`${headerStyles.desktopNav}`}>
              <ul className={headerStyles.navList}>
                <li>
                  <Link activeClassName={headerStyles.active} to="/" className={headerStyles.navItem}>Home</Link>
                </li>
                <li>
                  <Link activeClassName={headerStyles.active} to="/estates" className={headerStyles.navItem}>Aanbod</Link>
                </li>
                <li>
                  <Link activeClassName={headerStyles.active} to="/trip" className={headerStyles.navItem}>Bezichtigingsreis</Link>
                </li>
                <li>
                  <Link activeClassName={headerStyles.active} to="/costa/costa-blanca-zuid" className={headerStyles.navItem}>Costa Blanca Zuid</Link>
                </li>
                <li>
                  <Link activeClassName={headerStyles.active} to="/about" className={headerStyles.navItem}>Over ons</Link>
                </li>
                <li>
                  <Link activeClassName={headerStyles.active} to="/services" className={headerStyles.navItem}>Diensten</Link>
                </li>
                <li>
                  <Link activeClassName={headerStyles.active} to="/blog" className={headerStyles.navItem}>Nieuws</Link>
                </li>
                <li>
                  <Link activeClassName={headerStyles.active} to="/tips" className={headerStyles.navItem}>Tips & Tricks</Link>
                </li>
                <li>
                  <Link activeClassName={headerStyles.active} to="/wijzoekenvoorjou" className={headerStyles.navItem}>Wij zoeken voor jou</Link>
                </li>
                <li>
                  <Link activeClassName={headerStyles.active} to="/contact" className={headerStyles.navItem}>Contact</Link>
                </li>
              </ul>
            </nav>
          </Desktop>
        </header>

        <Mobile>
          {this.state.isExpanded &&
            <div className={headerStyles.fullscreen}>
              <div className={headerStyles.topRow}>
                <img src="https://silcestates.com/wp-content/uploads/2019/07/logo_contouren_wit-copia-1.png" />
                <button onClick={this.toggle} className={headerStyles.closeFullscreen}><FontAwesomeIcon icon={['fal', 'times']} size={"2x"} /></button>
              </div>
              <Nav className={headerStyles.nav} />
            </div>
          }
        </Mobile>

      </div>
    )
  }
}


export default Header