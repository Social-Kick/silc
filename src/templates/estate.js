import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from "@contentful/rich-text-types";

import Layout from '../components/layout';
import estateStyles from "../styles/estate.module.scss"


export const query = graphql`
  query($reference: Date!) {
    contentfulEstate(reference: {eq: $reference}) {
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
      photos{
        file{
          url
        }
      }
    }
  }
`
const Text = ({ children }) => <p>{children}</p>;

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>
  },
  renderText: text => text.split('\n').flatMap((text, i) => [i > 0 && <br />, text])
}

const EstateDetail = props => {
  const estate = props.data.contentfulEstate;
  return (
    <Layout>
      <div className={estateStyles.gallery}></div>
      <div className={estateStyles.container}>
        <div className={estateStyles.gallery}>
          {estate.photos ? estate.photos.map((edge) => {
            return <img className={estateStyles.image} src={edge.file.url} alt="" />
          }): ''}
        </div>
        <h3>{estate.name}</h3>
        <p>€ {estate.price}</p>
        <p>Slaapkamers: {estate.bedrooms}</p>
        <p>Badkamers: {estate.bathrooms}</p>
        <p>Opp. woning: {estate.livingSpace}m<sup>2</sup></p>
        <p>Opp. terras: {estate.outdoorSpace}m<sup>2</sup></p>
        {estate.garden && <p>Tuin: {estate.gardenType}</p>}
        {estate.swimmingPool && <p>Zwembad: {estate.swimmingPoolType}</p>}
        <br />
        {documentToReactComponents(estate.description.json, options)}
      </div>
    </Layout>
  )
}

export default EstateDetail