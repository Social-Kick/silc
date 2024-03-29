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
    let formattedReference = edge.node.reference.replace(/\s+/g, '-').toLowerCase();

    createPage({
      component: estateTemplate,
      path: `/estate/${formattedReference}`,
      context: {
        reference: edge.node.reference
      }
    })
  })


  const blogTemplate = path.resolve('./src/templates/blogPost.js')
  const resBlog = await graphql(`
    query{
      allContentfulBlog{
        edges{
          node{
            title
          }
        }
      }
    }
  `)

  resBlog.data.allContentfulBlog.edges.forEach((edge) => {
    let formattedReference = edge.node.title.replace(/\s+/g, '-').toLowerCase()
    if (formattedReference.includes('?')) formattedReference = formattedReference.split('?').join('')
    if (formattedReference.includes('#')) formattedReference = formattedReference.split('#').join('')
    createPage({
      component: blogTemplate,
      path: `/blog/${formattedReference}`,
      context: {
        title: edge.node.title
      }
    })
  })

  const costaTemplate = path.resolve('./src/templates/costaLandingPage.js');
  const resCosta = await graphql(`
    query{
      allContentfulLandingPaginaCosta {
        edges {
          node {
            titel
          }
        }
      }
    }
  `);

  resCosta.data.allContentfulLandingPaginaCosta.edges.forEach((edge) => {
    const formattedCostaReference = edge.node.titel.replace(/\s+/g, '-').toLowerCase().replace('?', '').replace('#', '');
    createPage({
      component: costaTemplate,
      path: `/costa/${formattedCostaReference}`,
      context: {
        title: edge.node.titel
      }
    })
  });
}