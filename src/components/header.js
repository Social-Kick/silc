import React, { Component, useState } from 'react';
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Mobile, Tablet, Desktop } from "../utils/breakpoint"
import chevronWhite from '../images/chevron-down-white.svg';
import chevron from '../images/chevron-down-purple.svg';

import headerStyles from "../styles/components/header.module.scss";

const Nav = ({ costaMenuItems }) => {
  const [toggleCosta, setToggleCosta] = useState(false);

  return (
    <React.Fragment>
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
            <div className={headerStyles.subMenuItem} onClick={() => setToggleCosta(!toggleCosta)}>
              Costa's
              <img src={chevronWhite} alt="chevron" className={headerStyles.chevron}/>
            </div>
            {toggleCosta && <ul className={headerStyles.subNavMenu}>
              {costaMenuItems.map(({ titel }) => {
                const formattedCostaReference = titel.replace(/\s+/g, '-').toLowerCase().replace('?', '').replace('#', '');
                return (
                  <li>
                    <Link style={{ fontSize: '1.4rem' }} activeClassName={headerStyles.active} to={`/costa/${formattedCostaReference}`} className={headerStyles.navItem}>{titel}</Link>
                  </li>
                );  
              })}
            </ul>}
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
    </React.Fragment>
  )
}

const Header = ({ costaMenuItems }) => {
  const [isExpanded, setIsExpanded] = useState(null);
  const [costaExpanded, setCostaExpanded] = useState(false);

  const toggle = () => {
    setIsExpanded(!isExpanded);
  }

  const toggleCosta = () => {
    setCostaExpanded(!costaExpanded);
  }

  return (
    <div>
      <header className="no-print">
        <Link to="/">
          <img className={headerStyles.logo} src="https://silcestates.com/wp-content/uploads/2019/07/logo-SILC-states.png" alt="logo"></img>
        </Link>

        <Mobile>
          <button className={headerStyles.btn} onClick={toggle}>
            <FontAwesomeIcon icon={['fal', 'bars']} />
          </button>
        </Mobile>
        <Tablet>
          <button className={headerStyles.btn} onClick={toggle}>
            <FontAwesomeIcon icon={['fal', 'bars']} />
          </button>
        </Tablet>
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
                <div className={headerStyles.subMenuItem} onClick={toggleCosta}>
                  Costa's
                  <img src={chevron} alt="chevron" className={headerStyles.chevron}/>
                </div>
                {costaExpanded && <ul className={headerStyles.subNavMenu}>
                  {costaMenuItems.map(({ titel }) => {
                    const formattedCostaReference = titel.replace(/\s+/g, '-').toLowerCase().replace('?', '').replace('#', '');
                    return (
                      <li>
                        <Link activeClassName={headerStyles.active} to={`/costa/${formattedCostaReference}`} className={headerStyles.navItem}>{titel}</Link>
                      </li>
                    );  
                  })}
                </ul>}
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

      <Tablet>
        {isExpanded &&
          <div className={headerStyles.fullscreen}>
            <div className={headerStyles.topRow}>
              <img src="https://silcestates.com/wp-content/uploads/2019/07/logo_contouren_wit-copia-1.png" />
              <button onClick={toggle} className={headerStyles.closeFullscreen}><FontAwesomeIcon icon={['fal', 'times']} size={"2x"} /></button>
            </div>
            <Nav costaMenuItems={costaMenuItems} className={headerStyles.nav} />
          </div>
        }
      </Tablet>
      <Mobile>
        {isExpanded &&
          <div className={headerStyles.fullscreen}>
            <div className={headerStyles.topRow}>
              <img src="https://silcestates.com/wp-content/uploads/2019/07/logo_contouren_wit-copia-1.png" />
              <button onClick={toggle} className={headerStyles.closeFullscreen}><FontAwesomeIcon icon={['fal', 'times']} size={"2x"} /></button>
            </div>
            <Nav costaMenuItems={costaMenuItems} className={headerStyles.nav} />
          </div>
        }
      </Mobile>

    </div>
  )
}


export default Header