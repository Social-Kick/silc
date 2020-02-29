import React from 'react';

import cS from '../styles/pages/contact.module.scss'
import Layout from '../components/layout'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Default, Mobile } from "../utils/breakpoint";
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const Contact = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: {eq: "contact.jpg"}) {
        childImageSharp{
          fluid(maxWidth:1920, quality:100){
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <BackgroundImage fluid={data.file.childImageSharp.fluid} className={cS.wrapper}>
        <div className={cS.content}>
          <div className={cS.header}>
            <div className={cS.card}>
              <h1>Contacteer ons</h1>
              <h2>Heb je nog vragen? Laat het ons weten!</h2>
            </div>
          </div>
          <div className={cS.body}>
            <div className={cS.card}>
              <div className={cS.row}>
                <Default>
                  <FontAwesomeIcon icon={['fal', 'paper-plane']} color={"#505096"} size="4x" />
                </Default>
                <Mobile>
                  <FontAwesomeIcon icon={['fal', 'paper-plane']} size="3x" />
                </Mobile>
                <p>
                  Had je graag meer informatie gehad over één van onze projecten? 
                  Of had je graag een persoonlijk gesprek om te kijken wat het best bij jouw behoeften past? 
                  Aarzel dan niet om contact met ons op te nemen.
                </p>
              </div>
              <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />
                <div size={cS.row}>
                  <input type="text" name="firstname" placeholder="Voornaam" />
                  <input type="text" name="lastname" placeholder="Naam" />
                </div>
                <div size={cS.row}>
                  <input type="email" name="email" placeholder="E-mail" />
                  <input type="text" name="phone" placeholder="Telefoon of GSM" />
                </div>
                <textarea placeholder="Opmerkingen" name="message" rows="5"></textarea>
                <button className={cS.btn} type="submit">Verzenden</button>
              </form>
            </div>
          </div>
        </div>
      </BackgroundImage>
    </Layout>
  );
}

export default Contact;