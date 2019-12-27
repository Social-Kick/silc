import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/layout'
import estatesStyles from "./estates.module.scss"

const Estates = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulEstate{
        edges{
          node{
            name
            price
            bedrooms
            shortDescription{
              json
            }
            heroPhoto {
            title
            file {
              url
            }
           }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <div className={estatesStyles.search}></div>
      <div className={estatesStyles.estates}>
        {data.allContentfulEstate.edges.map((edge) => {

          const estateImgStyle = {
            backgroundImage: `url(${edge.node.heroPhoto.file.url})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }

          return (
            <div>
              <Link to={`/estate/`} className={estatesStyles.estateItem}>
                <div style={estateImgStyle}></div>
                <div className={estatesStyles.content}>
                  <h2>{edge.node.name}</h2>
                  <p>€ {edge.node.price}</p>
                  <p>{edge.node.bedrooms} Slaapkamers</p>
                  {documentToReactComponents(edge.node.shortDescription.json)}
                </div>
              </Link>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default Estates