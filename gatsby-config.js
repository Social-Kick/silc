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
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-SNLCMJMGZQ", "G-9V8H25G1TG"],
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          head: false,
          respectDNT: true,
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
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
        pixelId: '504798217455881',
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
        setup: options => ({
          ...options, // https://www.npmjs.com/package/rss#feedoptions to override any specs
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
                town: edge.node.stad,
                province: edge.node.provincie,
                latitude: edge.node.location && edge.node.location.lat || null,
                longitude: edge.node.location && edge.node.location.lon || null,
                beds: edge.node.bedrooms,
                baths: edge.node.bathrooms,
                pool: edge.node.amentities.includes('zwembad') ? '1' : '0',
                url: site.siteMetadata.siteUrl + '/estate/' + edge.node.reference.replace(/\s+/g, '-').toLowerCase(),
                images: edge.node.estateImages,
                desc: edge.node.description
              }));
            },
            query: `
              {
                allContentfulSilcEstate {
                  edges {
                    node {
                      id
                      updatedAt(formatString: "YYYY-MM-DD HH:MM:ss")
                      reference
                      minPrice
                      estateType
                      stad
                      provincie
                      location {
                        lat
                        lon
                      }
                      bedrooms
                      bathrooms
                      amentities
                      estateImages {
                        file {
                          url
                        }
                      }
                      description {
                        content {
                          content {
                            value
                          }
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
