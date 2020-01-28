import React, { Component } from 'react';
import { Link } from "gatsby";
import { globalHistory as history } from '@reach/router';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMediaQuery } from 'react-responsive'

import headerStyles from "../styles/components/header.module.scss";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 })
  return isDesktop ? children : null
}
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
  return isTablet ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 })
  return isNotMobile ? children : null
}

const Nav = () => {
  return (
    <nav className={`${headerStyles.nav}`}>
      <ul className={headerStyles.navList}>
        <li>
          <Link activeClassName={headerStyles.active} to="/" className={headerStyles.navItem}>Home</Link>
        </li>
        <li>
          <Link activeClassName={headerStyles.active} to="estates" className={headerStyles.navItem}>Aanbod</Link>
        </li>
        <li>
          <Link activeClassName={headerStyles.active} to="blog" className={headerStyles.navItem}>Nieuws</Link>
        </li>
        <li>
          <Link activeClassName={headerStyles.active} to="contact" className={headerStyles.navItem}>Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

class Header extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      isExpanded: null,
      screenWidth: null
    };
  }

  componentDidMount = () => {
    window.addEventListener("resize", this.updateWindowDimensions());
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions)
  }

  updateWindowDimensions = () => {
    this.setState({
      screenWidth: window.innerWidth
    });
  }

  toggle = () => {
    this.setState(prevState => ({ isExpanded: !prevState.isExpanded }));
  }

  render() {
    const { location } = history;

    return (
      <header className={location.pathname === '/' ? headerStyles.indexHeader : ''}>
        <img className={headerStyles.logo} src="https://silcestates.com/wp-content/uploads/2019/07/logo-SILC-states.png" alt="logo"></img>


        <Mobile>
          {this.state.isExpanded && <Nav />}

          <button className={headerStyles.btn} onClick={this.toggle}>{
            this.state.isExpanded ? <FontAwesomeIcon icon={['fal', 'times']} /> : <FontAwesomeIcon icon={['fal', 'bars']} />}
          </button>
        </Mobile>

        <Default>
          <Nav />
        </Default>

      </header>
    )
  }
}


export default Header