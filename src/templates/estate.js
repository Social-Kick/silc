import React from "react"
import { graphql } from "gatsby"
import { globalHistory as history } from '@reach/router';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Mobile, Default } from "../utils/breakpoint";

import eS from "../styles/pages/estate.module.scss"
import '../styles/index.scss'

import Layout from "../components/layout"
import Map from "../components/map";
import RichText from "../utils/richText"

import Slider from "../components/Slider";

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
      yearOfConstruction
      sizeLivingSpace
      sizeTerrace
      sizeOfPlot
      sizeSolarium
      estateImages{
        file{
          url
        }
      }
      infographicPdf{
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
    case "uitzicht":
      return <FontAwesomeIcon icon={['fal', 'cloud-sun']} size="lg" />
    case "tuin":
      return <FontAwesomeIcon icon={['fal', 'tree']} size="lg" />
    case "zwembad":
      return <FontAwesomeIcon icon={['fal', 'swimming-pool']} size="lg" />
    case "verwarming":
      return <FontAwesomeIcon icon={['fal', 'fire']} size="lg" />
    case "airconditioning":
      return <FontAwesomeIcon icon={['fal', 'wind']} size="lg" />
    case "parkeerplaats":
      return <FontAwesomeIcon icon={['fal', 'parking']} size="lg" />
    case "berging":
      return <FontAwesomeIcon icon={['fal', 'boxes']} size="lg" />
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

  return (
    <div>
      <Layout>
        <Default>
          <Slider
            images={estate.estateImages.map((img) => { return (img.file.url) })}
            slidesPerPage={2.5}
            arrowLeft
            arrowRight
          />
        </Default>
        <Mobile>
          <Slider
            images={estate.estateImages.map((img) => { return (img.file.url) })}
            slidesPerPage={1.25}
            arrowLeft={false}
            arrowRight={false}
          />
        </Mobile>
        <article className={eS.container}>
          <section className={eS.title}>
            <h3>{estate.title}</h3>
            <p>{estate.reference}</p>
            <p>{capitalizeFirstLetter(estate.estateType)}</p>
          </section>

          <section className={eS.price}>
            {estate.maxPrice ? <p>Van €{converter.format(estate.minPrice)} - €{converter.format(estate.maxPrice)}</p>
            :
              <p>€ {converter.format(estate.minPrice)}</p>
            }
          </section>

          <section className={eS.estateData}>
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
            <div className={eS.details}>
              <p><b>Bouwjaar:</b> {estate.yearOfConstruction}</p>
              {estate.sizeLivingSpace > 0 && <p><b>Woning:</b> {estate.sizeLivingSpace} M<sup>2</sup></p>}
              {estate.sizeTerrace > 0 && <p><b>Terras:</b> {estate.sizeTerrace} M<sup>2</sup></p>}
              {estate.sizeOfPlot > 0 && <p><b>Perceel:</b> {estate.sizeOfPlot} M<sup>2</sup></p>}
              {estate.sizeSolarium > 0 && <p><b>Solarium:</b> {estate.sizeSolarium} M<sup>2</sup></p>}
            </div>
          </section>

          <section className={eS.description}>
            <RichText text={estate.description.json} />
            {estate.infographicPdf && <a target="__blank" className={eS.leaflet} href={estate.infographicPdf.file.url}>Bekijk de brochure</a>}
          </section>

          <section className={eS.amentities}>
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
          </section>

          <section className={eS.map}>
            <Map
              location={estate.location}
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDgMROM_H8cvr9WZ-0gU1D53yC-C74D4wM&v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </section>

          <section className={eS.contactForm}>
            <h2>Interesse in deze woning? Laat het ons weten!</h2>
            <form name="estate-interest" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="estate-interest" />
              <div className={eS.row}>
                <input type="text" name="firstname" placeholder="Voornaam" />
                <input type="text" name="lastname" placeholder="Naam" />
              </div>
              <div className={eS.row}>
                <input type="email" name="email" placeholder="E-mail" />
                <input type="text" name="phone" placeholder="Telefoon of GSM" />
              </div>
              <input type="hidden" name="estate-reference" value={location.href} />
              <textarea placeholder="Opmerkingen" name="message" rows="5"></textarea>
              <button className={eS.btn} type="submit">Verzenden</button>
            </form>
          </section>
        </article>
      </Layout>
    </div>
  )
}

export default EstateDetail