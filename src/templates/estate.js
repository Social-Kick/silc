import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"

import Layout from "../components/layout"
import estateStyles from "../styles/estate.module.scss"
import {
  FaBed,
  FaShower,
  FaRuler,
  FaTree,
  FaSwimmingPool,
} from "react-icons/fa"
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel"

export const query = graphql`
  query($reference: Date!) {
    contentfulEstate(reference: { eq: $reference }) {
      reference
      name
      price
      bedrooms
      bathrooms
      livingSpace
      outdoorSpace
      garden
      gardenType
      swimmingPool
      swimmingPoolType
      description {
        json
      }
      photos {
        file {
          url
        }
      }
    }
  }
`
const Text = ({ children }) => <p>{children}</p>

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
  },
  renderText: text =>
    text.split("\n").flatMap((text, i) => [i > 0 && <br />, text]),
}

let converter = Intl.NumberFormat("en")

const EstateDetail = props => {
  const estate = props.data.contentfulEstate
  return (
    <Layout>
      <div className={estateStyles.gallery}></div>
      <div className={estateStyles.container}>
        <div className={estateStyles.gallery}>
          <CarouselProvider
            naturalSlideHeight={100}
            naturalSlideWidth={125}
            totalSlides={estate.photos.length}
          >
            <Slider>
              {estate.photos
                ? estate.photos.map(edge => {
                    return (
                      <Slide index={0}>
                        <img src={edge.file.url} alt={edge.title} />
                      </Slide>
                    )
                  })
                : ""}
            </Slider>
          </CarouselProvider>
        </div>
        <h3>{estate.name}</h3>
        <p className={estateStyles.price}>€ {converter.format(estate.price)}</p>
        <br />
        <p>
          <FaBed />
          Slaapkamers:<b>{estate.bedrooms}</b>
        </p>
        <p>
          <FaShower />
          Badkamers:<b>{estate.bathrooms}</b>
        </p>
        <p>
          <FaRuler />
          Opp. woning:
          <b>
            {estate.livingSpace}m<sup>2</sup>
          </b>
        </p>
        <p>
          <FaRuler />
          Opp. terras:
          <b>
            {estate.outdoorSpace}m<sup>2</sup>
          </b>
        </p>
        {estate.garden && (
          <p>
            <FaTree />
            Tuin:<b>{estate.gardenType}</b>
          </p>
        )}
        {estate.swimmingPool && (
          <p>
            <FaSwimmingPool />
            Zwembad:<b>{estate.swimmingPoolType}</b>
          </p>
        )}
        <br />
        {documentToReactComponents(estate.description.json, options)}
      </div>
    </Layout>
  )
}

export default EstateDetail
