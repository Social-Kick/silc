import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import { globalHistory as history } from '@reach/router';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Mobile, Desktop, Tablet } from "../utils/breakpoint";

import eS from "../styles/pages/estate.module.scss"
import '../styles/index.scss'

import Layout from "../components/layout"
import Map from "../components/map";
import RichText from "../utils/richText"
import SEO from '../utils/seo'
import TerugbelVerzoek from '../components/terugbelVerzoek';
import Modal from '../components/modal';
import { CallRequest, ContactForm } from '../components/forms';
import carl from '../images/terugbelverzoek/carl.jpg';

import { Slider } from "../components/slider";

export const query = graphql`
  query($reference: String!) {
    contentfulSilcEstate(reference: { eq: $reference }) {
      reference
      title
      minPrice
      maxPrice
      region
      description{
        json
      }
      location{
        lat
        lon
      }
      amentities
      estateType
      bedrooms
      bathrooms
      virtualURL
      heroImage {
        file {
          url
        }
      }
      estateImages{
        file{
          url
        }
      }
    }
  }
`

let converter = Intl.NumberFormat("nl")

function setIcon(edge) {
  switch (edge) {
    case "zwembad":
      return <FontAwesomeIcon icon={['fal', 'swimming-pool']} size="lg" />
    case "airconditioning":
      return <FontAwesomeIcon icon={['fal', 'wind']} size="lg" />
    case "terras/tuin":
      return <FontAwesomeIcon icon={['fal', 'trees']} size="lg" />
    default:
      break;
  }
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const EstateDetail = props => {
  const estate = props.data.contentfulSilcEstate
  const { location } = history;

  const [callRequestModal, setCallRequestModal] = useState(false);
  const metaDescription = `${estate.title} - ${estate.reference} - ${estate.minPrice}`;

  return (
    <div>
      <Layout>
        <SEO title={estate.title} description={metaDescription} />
        <div className="no-print">
          <Desktop>
            <div style={{ margin: '1rem 2.5rem', textDecoration: 'underline' }} >
              <Link to="/estates">Terug naar zoekresultaten</Link>
            </div>
            <Slider
              images={estate.estateImages.map((img) => { return (img.file.url) })}
              slidesPerPage={2.5}
              arrowLeft
              arrowRight
            />
          </Desktop>
          <Tablet>
            <Slider
              images={estate.estateImages.map((img) => { return (img.file.url) })}
              slidesPerPage={1.25}
              arrowLeft={false}
              arrowRight={false}
            />
          </Tablet>
          <Mobile>
            <div style={{ margin: '1rem 1rem', textDecoration: 'underline' }} >
              <Link to="/estates">Terug naar zoekresultaten</Link>
            </div>
            <Slider
              images={estate.estateImages.map((img) => { return (img.file.url) })}
              slidesPerPage={1.25}
              arrowLeft={false}
              arrowRight={false}
            />
          </Mobile>
        </div>

        <article className={eS.container}>
          <section className={eS.title}>
            <h3>{estate.title}</h3>
            <p>{estate.reference}</p>
            <p>{capitalizeFirstLetter(estate.estateType)} in {estate.region}</p>
          </section>

          <section className={eS.price}>
            {estate.virtualURL && <a className={eS.virtualUrl} target="__blank" href={estate.virtualURL}>Bekijk deze aanbieding virtueel</a>}
            {estate.minPrice !== estate.maxPrice ? <p>Van € {converter.format(estate.minPrice)} - € {converter.format(estate.maxPrice)}</p>
              :
              <p>€ {converter.format(estate.minPrice)}</p>
            }
          </section>

          {estate.heroImage && <img className={eS.heroImage} src={estate.heroImage.file.url} alt="" />}

          <section className={eS.estateData} >
            <div>
              <div className={eS.roomCard}>
                <FontAwesomeIcon icon={['fal', 'bed']} size="2x" className={eS.icon} />
                <p>SLAAPKAMERS</p>
                <span>{estate.bedrooms}</span>
              </div>
            </div>
            <div className={eS.verticalBorder}></div>
            <div>
              <div className={eS.roomCard}>
                <FontAwesomeIcon icon={['fal', 'bath']} size="2x" className={eS.icon} />
                <p>BADKAMERS</p>
                <span>{estate.bathrooms}</span>
              </div>
            </div>
            <div className={eS.verticalBorder}></div>
            {estate.amentities && <div className={eS.amentities}>
              {estate.amentities.map((edge, i) => {
                return (
                  <div className={eS.amentity} key={i}>
                    {setIcon(edge)}
                    <div key={i}>
                      <span>{capitalizeFirstLetter(edge)}</span>
                    </div>
                  </div>
                )
              })}
            </div>}
          </section>

          <section className={eS.description}>
            <RichText text={estate.description.json} />
            <button className={eS.print} onClick={() => typeof window !== `undefined` ? window.print() : null}>Print brochure</button>
          </section>

          <section className={`${eS.map} no-print`}>
            <Map
              location={estate.location}
              googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyD1mwgTRr5QHIbuwZAmq-FVUm8EdyTXy5A&v=3.exp&libraries=geometry,drawing,places`}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </section>

          <section className={`${eS.forms} no-print`}>
            <div className={eS.callRequest}>
              <TerugbelVerzoek imageSrc={carl} toggleCallRequestModal={() => setCallRequestModal(true)}>
                  Heb jij graag een gesprek met Carl, onze zaakvoerder? Maak dan
                  hier een terugbelverzoek aan en Carl neemt contact met je op.
              </TerugbelVerzoek>
            </div>
            <div className={eS.contactForm}>
              <h2>Interesse in deze aanbieding? Laat het ons weten!</h2>
              <ContactForm estateReference={location.href} />
            </div>
          </section>
        </article>
        <Modal
          isOpen={callRequestModal}
          handleClose={() => setCallRequestModal(false)}
          title="Maak een terugbelverzoek"
          style={{ width: "600px" }}
        >
          <CallRequest estateReference={location.href} />
        </Modal>
      </Layout>
    </div>
  )
}

export default EstateDetail