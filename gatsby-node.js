const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const estateTemplate = path.resolve('./src/templates/estate.js')
  const res = await graphql(`
    query {
      allContentfulEstate{
        edges{
          node{
            reference
          }
        }
      }
    }
  `)

  res.data.allContentfulEstate.edges.forEach((edge) => {
    createPage({
      component: estateTemplate,
      path: `/estate/${edge.node.reference}`,
      context: {
        reference: edge.node.reference
      }
    })
  })
}