import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Desktop } from "../utils/breakpoint"
import biv from "../images/logo-biv-1.png"
import cp from "../../static/cookie_policy.pdf"

import footerStyles from "../styles/components/footer.module.scss"

const Footer = () => {
  return (
    <footer className="no-print">
      <div className={footerStyles.topRow}>
        <div className={footerStyles.logo}>
          <img
            src="https://silcestates.com/wp-content/uploads/2019/07/logo_contouren_wit-copia-1.png"
            alt="silc logo"
          />
        </div>
        <div className={footerStyles.adress}>
          <p>Bruyninckx Vastgoed BV</p>
          <p>Rubensstraat 141</p>
          <p>2300 Turnhout</p>
        </div>
        <div className={footerStyles.contact}>
          <p>
            <FontAwesomeIcon icon={["fal", "phone"]} /> &nbsp;
            <a href="callto:014394787">014 39 47 78</a>
          </p>
          <p>
            <FontAwesomeIcon icon={["fal", "at"]} /> &nbsp;
            <a href="mailto:info@silcestates.eu">info@silcestates.eu</a>
          </p>
          <p>
            <FontAwesomeIcon icon={["fal", "building"]} /> &nbsp;BE 0881 663 286
          </p>
        </div>
        <div className={footerStyles.links}>
          <div className={footerStyles.social}>
            <a
              href="https://www.facebook.com/silcestatesbelgium/"
              target="__blank"
            >
              <FontAwesomeIcon
                icon={["fab", "facebook"]}
                color="white"
                size="lg"
              />
            </a>
            <a href="https://www.instagram.com/silc_estates/" target="__blank">
              <FontAwesomeIcon
                icon={["fab", "instagram"]}
                color="white"
                size="lg"
              />
            </a>
          </div>
        </div>
        <div className={footerStyles.biv}>
          <a
            href="https://www.biv.be/de-vastgoedmakelaar/deontologie-van-de-vastgoedmakelaar"
            target="__blank"
          >
            {" "}
            <img src={biv} height="40" alt="" />
          </a>
          <p>
            Beroepsinstituut van Vastgoedmakelaars (BIV) <br />
            Luxemburgstraat 16b <br />
            1000 Brussel <br />
          </p>
        </div>
        <div className={footerStyles.legal}></div>
      </div>
      <div className={footerStyles.legalRow}>
        <p>&copy;Copyright Bruyninckx Vastgoed BV {new Date().getFullYear()}</p>
        <Desktop>
          <p>●</p>
        </Desktop>
        <p>
          Proudly made by Social Kick
        </p>
        <Desktop>
          <p>●</p>
        </Desktop>
        <p>
          <a href="/privacy">Privacy policy</a>
        </p>
        <Desktop>
          <p>●</p>
        </Desktop>
        <p>
          <a href={cp} target="__blank">
            Cookie policy
          </a>
        </p>
        <Desktop>
          <p>●</p>
        </Desktop>
        <p>
          <a
            href="https://www.biv.be/de-vastgoedmakelaar/deontologie-van-de-vastgoedmakelaar"
            target="__blank"
          >
            BIV-Plichtenleer
          </a>
        </p>
        <Desktop>
          <p>●</p>
        </Desktop>
        <p>BIV 800 007 Bruyninckx Vastgoed BV</p>
        <Desktop>
          <p>●</p>
        </Desktop>
        <p>BIV 203 854 Carl Bruyninckx</p>
      </div>
      <div className={footerStyles.bottomRow}>
        <p>
          Polisnummer beroepsaansprakelijkheid Bruyninckx Vastgoed BV:
          730.390.160
        </p>
        <p className={footerStyles.spacer}>|</p>
        <p>Waarborgorganisme Bruyninckx Vastgoed BV: NV AXA Belgium</p>
        <p className={footerStyles.spacer}>|</p>
        <p>Gewaarborgde activiteit: bemiddelaar, makelaarij (België)</p>
      </div>
      <chat-widget
        location-id="DY92pnjIicYrLc8pVDzc"
        heading="Heb je een vraag?"
        sub-heading="Stel hieronder je vraag en we trachten je zo snel mogelijk te beantwoorden."
        prompt-msg="Hey! Heb je een vraag? Stuur ons hier een berichtje."
        legal-msg="Door te verzenden ga je akkoord met het ontvangen van sms of e-mails voor het opgegeven kanaal. Er kunnen tarieven worden gehanteerd."
        use-email-field="true"
        revisit-prompt-msg="Welkom terug {{name}}, Waarmee kunnen we je vandaag van dienst zijn?"
        support-contact="Silc Estates België"
        success-msg="Een van onze vertegenwoordigers neemt zo snel mogelijk contact met je op."
        thank-you-msg="Bedankt!"
        prompt-avatar="https://firebasestorage.googleapis.com/v0/b/highlevel-backend.appspot.com/o/locationPhotos%2FDY92pnjIicYrLc8pVDzc%2Fchat-widget-person?alt=media&token=a34f2c93-d738-45c7-a066-2c96a880246b"
      ></chat-widget>
      <script
        src="https://widgets.leadconnectorhq.com/loader.js"
        data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
      ></script>
    </footer>
  )
}

export default Footer
