import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import eS from "../styles/estate.module.scss"
import Carousel from "../components/estate/carousel"
import RichText from "../components/estate/richText"

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

const EstateDetail = props => {
  const estate = props.data.contentfulSilcEstate
  return (
    <Layout>
      <Carousel images={estate.estateImages} />
      <article className={eS.container}>
        <section className={eS.title}>
          <h3>{estate.title}</h3>
          <p>{estate.reference}</p>
        </section>

        <section className={eS.price}>
          <p>€ {converter.format(estate.price)}</p>
        </section>

        <section className={eS.amentities}>
          {estate.amentities.map((edge, i) => {
            return (
              <div className={eS.amentity} key={i}>
                {edge}
              </div>
            )
          })}
        </section>

        <section className={eS.description}>
          <RichText text={estate.description.json} />
          <a target="__blank" className={eS.leaflet} href={estate.infographicPdf.file.url}>Bekijk de brochure</a>
        </section>

        <section className={eS.estateData}>
          
        </section>
      </article>
    </Layout>
  )
}

export default EstateDetail