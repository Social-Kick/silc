import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import EstateList from '../components/estateList'
import SEO from '../utils/seo'

const Estates = ({ data: { allContentfulSilcEstate } }) => {
  const metaDescription = 'Ontdek ons uitgebreide aanbod aan appartementen, woningen en villa’s in Spanje.';
  return (
    <Layout>
      <SEO title={"Aanbod"} description={metaDescription} />
      <EstateList edges={allContentfulSilcEstate.edges} />
    </Layout >
  )
}
export default Estates;

export const data = graphql`
  query  {
    allContentfulSilcEstate(filter: {node_locale: {eq: "en-US"}}){
      edges{
        node{
          reference
          title
          minPrice
          maxPrice
          estateType
          bathrooms
          bedrooms
          region
          # heroImage{
          #   fluid {
          #     ...GatsbyContentfulFluid
          #   }
          # }
          virtualURL
          heroImage {
            file {
              url
            }
          }
        }
      }
    }
  }
`;