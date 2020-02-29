import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import EstateList from '../components/estateList'

const Estates = ({ data: { allContentfulSilcEstate } }) => {
  return (
    <Layout>
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
          shortDescription{
            json
          }
          minPrice
          maxPrice
          estateType
          bathrooms
          bedrooms
          region
          heroImage{
            fluid(quality:100) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;