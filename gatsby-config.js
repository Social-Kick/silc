const path = require('path')
module.exports = {
  siteMetadata: {
    title: `SILC Estates`,
    description: `Website van SILC Estates`,
    author: `Social Kick`,
    siteUrl: "https://silcestates.eu/",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-159937922-1",
        head: false,
        anonymize: true,
        reszpectDNT: true,
        pageTransitionDelay: 0,
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-scroll-reveal`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-emotion`,
    },
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
        spaceId: `0689dhj78nlz`,
        accessToken: `Y1gwhxl6z3qZl6W_8gb5qOrAoxEsc6oems2rsYOAqBQ`
      }
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: '2884813458228227',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        commonmark: true,
        footnotes: true,
        pedantic: true,
        gfm: true,
      },
    },
    {
      resolve: `gatsby-kyero-feed`,
      options: {
        setup(ref) {
          const ret = ref.query.site.siteMetadata.rssMetadata;
          ret.allMarkdownRemark = ref.query.allMarkdownRemark;
          ret.generator = "GatsbyJS Advanced Starter";
          return ret;
        },
        query: `
        {
          site {
            siteMetadata {
              title
              siteUrl
              description
            }
          }
        }
      `,
      setup: options => ({
        ...options, // https://www.npmjs.com/package/rss#feedoptions to override any specs
        disable_cdata: true,
        title: options.query.site.title,
        description: options.query.site.description,
        site_url: options.query.site.siteUrl
      }),
        feeds: [
          {
            serialize: ({ query: { site, allContentfulSilcEstate } }) => {
              return allContentfulSilcEstate.edges.map(edge => ({
                id: edge.node.id,
                date: edge.node.updatedAt,
                ref: edge.node.reference,
                price: edge.node.minPrice,
                type: edge.node.estateType,
                latitude: edge.node.location.lat,
                longitude: edge.node.location.lon,
                beds: edge.node.bedrooms,
                baths: edge.node.bathrooms,
                pool: edge.node.amentities.includes('zwembad') ? '1' : '0',
                url: site.siteMetadata.siteUrl + '/estate/' + edge.node.reference.replace(/\s+/g, '-').toLowerCase(),
                virtual_tour_url: edge.node.virtualURL,
                images: edge.node.estateImages
              }));
            },
            query: `
              {
                allContentfulSilcEstate {
                  edges {
                    node {
                      id
                      updatedAt(formatString: "YYYY-MM-DD HH:MM:SS")
                      reference
                      minPrice
                      estateType
                      location {
                        lat
                        lon
                      }
                      bedrooms
                      bathrooms
                      amentities
                      virtualURL
                      estateImages {
                        file {
                          url
                        }
                      }
                    }
                  }
                }
              }
            `,
            output: "/estates/rss.xml",
            title: "Silc Estate RSS feed",
          },
        ],
      },
    },
  ],
}
