const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const estateTemplate = path.resolve('./src/templates/estate.js')
  const res = await graphql(`
    query {
      allContentfulSilcEstate{
        edges{
          node{
            reference
          }
        }
      }
    }
  `)

  res.data.allContentfulSilcEstate.edges.forEach((edge) => {
    let formattedReference = edge.node.reference.replace(/\s+/g, '-').toLowerCase()
    createPage({
      component: estateTemplate,
      path: `/estate/${formattedReference}`,
      context: {
        reference: edge.node.reference
      }
    })
  })
}