import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/layout'
import estatesStyles from "../styles/estates.module.scss"

const Estates = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulEstate{
        edges{
          node{
            reference
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
              <Link to={`/estate/${edge.node.reference}`} className={estatesStyles.estateItem}>
                <div style={estateImgStyle} className={estatesStyles.heroImg}></div>
                <div className={estatesStyles.content}>
                  <h2>{edge.node.name}</h2>
                  <p className={estatesStyles.price}>€ {edge.node.price}</p>
                  <p className={estatesStyles.bedrooms}>{edge.node.bedrooms} Slaapkamers</p>
                  <br/>
                  {documentToReactComponents(edge.node.shortDescription.json)}
                  <br/>
                  <Link className={estatesStyles.detailsLink} to={`/estate/${edge.node.reference}`}>bekijk details</Link>
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