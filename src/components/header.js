import React, { Component } from 'react';
import { Link } from "gatsby";
import { globalHistory as history } from '@reach/router';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import headerStyles from "../styles/components/header.module.scss";

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
      <div>
        <header className={location.pathname === '/' ? headerStyles.indexHeader : ''}>
          <img className={headerStyles.logo} src="https://silcestates.com/wp-content/uploads/2019/07/logo-SILC-states.png" alt="logo"></img>

          <button className={headerStyles.btn} onClick={this.toggle}>
            <FontAwesomeIcon icon={['fal', 'bars']}/>
          </button>

        </header>

        {this.state.isExpanded &&
          <div className={headerStyles.fullscreen}>
            <div className={headerStyles.topRow}>
              <img src="https://silcestates.com/wp-content/uploads/2019/07/logo_contouren_wit-copia-1.png" />
              <button onClick={this.toggle} className={headerStyles.closeFullscreen}><FontAwesomeIcon icon={['fal', 'times']} size={"2x"} /></button>
            </div>
            <Nav className={headerStyles.nav}/>
          </div>
        }
      </div>
    )
  }
}


export default Header