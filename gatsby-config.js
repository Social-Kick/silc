const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `SILC Estates`,
    description: `Website van SILC Estates`,
    author: `Digital Kick`,
    siteUrl: "https://silcestates.netlify.com/",
  },
  plugins: [
    "gatsby-plugin-sass",
    // "gatsby-image",
    "gatsby-plugin-react-helmet",
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    `gatsby-plugin-scroll-reveal`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: 'gatsby-background-image',
      options: {
        specialChars: '/:',
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
  ],
}
