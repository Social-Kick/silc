import React from 'react'

import footerStyles from "../styles/footer.module.scss"

const Footer = () => {
  return (
    <footer>
      <div className={`${footerStyles.block} ${footerStyles.contact}`}>
        <p className={footerStyles.title}>Silc Estates</p>
        <address>
          <p>Antoine Coppenslaan 27 bus 9</p>
          <p>2300 Turnhout</p>
          <p>GSM: 0032499756066</p>
          <p>info@socialkick.be</p>
        </address>
        <p>Proudly made by Digital Kick</p>
      </div>
    </footer>
  )
}

export default Footer