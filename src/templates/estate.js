import React from "react"
import { graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import eS from "../styles/pages/estate.module.scss"
import '../styles/index.scss'

import Layout from "../components/layout"
import Carousel from "../components/carousel"
import Map from "../components/map";
import RichText from "../utils/richText"


export const query = graphql`
  query($reference: String!) {
    contentfulSilcEstate(reference: { eq: $reference }) {
      reference
      title
      price
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
  return (
    <Layout>
      <Carousel images={estate.estateImages} />
      <article className={eS.container}>
        <section className={eS.title}>
          <h3>{estate.title}</h3>
          <p>{estate.reference}</p>
          <p>{capitalizeFirstLetter(estate.estateType)}</p>
        </section>

        <section className={eS.price}>
          <p>€ {converter.format(estate.price)}</p>
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
            <p><b>Woning:</b> {estate.sizeLivingSpace} M<sup>2</sup></p>
            <p><b>Terras:</b> {estate.sizeTerrace} M<sup>2</sup></p>
            <p><b>Perceel:</b> {estate.sizeOfPlot} M<sup>2</sup></p>
            <p><b>Solarium:</b> {estate.sizeSolarium} M<sup>2</sup></p>
          </div>
        </section>

        <section className={eS.description}>
          <RichText text={estate.description.json} />
          <a target="__blank" className={eS.leaflet} href={estate.infographicPdf.file.url}>Bekijk de brochure</a>
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
            location = {estate.location}
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDgMROM_H8cvr9WZ-0gU1D53yC-C74D4wM&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </section>
      </article>
    </Layout>
  )
}

export default EstateDetail