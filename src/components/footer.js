import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Desktop } from "../utils/breakpoint"
import biv from '../images/logo-biv-1.png'
import pp from '../../static/privacy_policy.pdf'
import cp from '../../static/cookie_policy.pdf'

import footerStyles from "../styles/components/footer.module.scss"

const Footer = () => {
  return (
    <footer className="no-print">
      <div className={footerStyles.topRow}>
        <div className={footerStyles.logo}>
          <img src="https://silcestates.com/wp-content/uploads/2019/07/logo_contouren_wit-copia-1.png" alt="silc logo" />
        </div>
        <div className={footerStyles.adress}>
          <p>Elimmo BV</p>
          <p>Ridderstraat 25 bus 5</p>
          <p>3500 Hasselt</p>
        </div>
        <div className={footerStyles.contact}>
          <p><FontAwesomeIcon icon={['fal', 'phone']} /> &nbsp;<a href="callto:0476 42 54 16">0476 42 54 16</a></p>
          <p><FontAwesomeIcon icon={['fal', 'at']} /> &nbsp;<a href="mailto:em@silcestates.com">em@silcestates.com</a></p>
          <p><FontAwesomeIcon icon={['fal', 'building']} /> &nbsp;BE0687 895 294</p>
        </div>
        <div className={footerStyles.links}>
          <div className={footerStyles.social}>
            <a href="https://www.facebook.com/silcestates/" target="__blank">
              <FontAwesomeIcon icon={['fab', 'facebook']} color="white" size="lg" />
            </a>
            <a href="" target="__blank">
              <FontAwesomeIcon icon={['fab', 'instagram']} color="white" size="lg" />
            </a>
            <a href="" target="__blank">
              <FontAwesomeIcon icon={['fab', 'linkedin']} color="white" size="lg" />
            </a>
          </div>
        </div>
        <div className={footerStyles.biv}>
          <a href="https://biv.be" target="__blank"> <img src={biv} height="40" alt="" /></a>
        </div>
        <div className={footerStyles.legal}>
        </div>
      </div>
      <div className={footerStyles.legalRow}>
        <p>&copy;Copyright Elimmo BV {new Date().getFullYear()}</p>
        <Desktop><p>●</p></Desktop>
        <p>Proudly made by <a href="https://socialkick.be">Social Kick</a></p>
        <Desktop><p>●</p></Desktop>
        <p><a href={pp} target="__blank">Privacy policy</a></p>
        <Desktop><p>●</p></Desktop>
        <p><a href={cp} target="__blank">Cookie policy</a></p>
        <Desktop><p>●</p></Desktop>

        <p>BIV 509931</p>
      </div>
      <div className={footerStyles.bottomRow}>
        <p>Polisnummer beroepsaansprakelijkheid ELIMMO: 730.390.160</p>
        <p className={footerStyles.spacer}>|</p>
        <p>Waarborgorganisme ELIMMO: NV AXA Belgium</p>
        <p className={footerStyles.spacer}>|</p>
        <p>Gewaarborgde activiteit: bemiddelaar, makelaarij</p>
      </div>
    </footer>
  )
}

export default Footer