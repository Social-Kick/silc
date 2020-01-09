import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import estatesStyles from "../styles/estates.module.scss"

const Estates = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulSilcEstate(filter: {node_locale: {eq: "en-US"}}){
        edges{
          node{
            reference
            title
            shortDescription{
              json
            }
            price
            estateType
            heroImage{
              file{
                url
              }
            }
          }
        }
      }
    }
  `)

  let converter = Intl.NumberFormat("nl")

  return (
    <Layout>
      <div className={estatesStyles.search}></div>
      <div className={estatesStyles.estates}>
        {data.allContentfulSilcEstate.edges.map((edge, i) => {
          let formattedReference = edge.node.reference.replace(/\s+/g, '-').toLowerCase()

          const estateImgStyle = {
            backgroundImage: `url(${edge.node.heroImage.file.url})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }

          return (
            <div key={i}>
              <Link to={`/estate/${formattedReference}`} className={estatesStyles.estateItem}>
                <div style={estateImgStyle} className={estatesStyles.heroImg}></div>
                <div className={estatesStyles.content}>
                  <h2>{edge.node.title}</h2>
                  <p className={estatesStyles.price}>Vanaf&nbsp;&nbsp;€ {converter.format(edge.node.price)}</p>
                  <Link className={estatesStyles.detailsLink} to={`/estate/${formattedReference}`}>bekijk details</Link>
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