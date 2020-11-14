import React from 'react'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fal } from "@fortawesome/pro-light-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import CookieConsent from 'react-cookie-consent'
import { useStaticQuery, graphql } from "gatsby";

import Head from '../utils/head'
import Header from './header';
import Footer from './footer';
import layoutStyles from '../styles/components/layout.module.scss';
import '../styles/index.scss';

library.add(fal, fab);

const Layout = (props) => {
  const data = useStaticQuery(graphql`
  query{
    allContentfulLandingPaginaCosta {
      nodes {
        titel
      }
    }
  }
`)

  const costaMenuItems = data.allContentfulLandingPaginaCosta.nodes;

  return (
    <div className={layoutStyles.container}>
      <Head />
      <div className={layoutStyles.content}>
        <Header costaMenuItems={costaMenuItems} />
        {props.children}
      </div>
      <CookieConsent
        acceptOnScroll  
        location="bottom"
        buttonText="Ok!"
        cookieName="cookieConsent"
        style={{ background: "#fff", heigh: 'fit-content'}}
        buttonStyle={{ backgroundColor: "#4b4b6e", color:'#fff', fontSize: "11px" }}
        expires={150}
      >
        <span style={{ color: "#7d7d7d", fontSize: "12px"}}>Deze website maakt gebruik van cookies om gebruiksgemak te verbeteren.</span>
      </CookieConsent>
      <Footer />
    </div>
  )
}

export default Layout