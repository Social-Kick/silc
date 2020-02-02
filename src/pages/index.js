import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

import Layout from "../components/layout"
import indexStyles from "../styles/pages/index.module.scss"

const Index = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulSilcEstate(filter: {isFeatured: {eq: true}}){
        edges{
          node{
            reference
            title
            heroImage{
              file{
                url
              }
            }
            price
            region
          }
        }
      }
      file(relativePath: {eq: "hero.jpg"}) {
        childImageSharp{
          fluid(maxWidth:1920, quality:100){
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    } 
`)

  let converter = Intl.NumberFormat("nl")
  const imageData = data.file.childImageSharp.fluid
  return (
    <Layout>
      <article>
        <BackgroundImage
          Tag="section"
          fluid={imageData}
          className={indexStyles.hero}
        >
          <h1>SILC ESTATES</h1>
          <h2>Wij maken uw dromen waar!</h2>
        </BackgroundImage>
        <section className={indexStyles.section}>
          <div data-sal="fade" data-sal-duration="1000" className={indexStyles.img}></div>
          <div data-sal="fade" data-sal-duration="1000" className={indexStyles.content}>
            <h1>Bekijk ons aanbod huizen in Spanje</h1>
            <h2>Appartementen en villa's voor elk budget</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt,
              officia, mollitia doloremque distinctio quae ipsam sint, ad
              reprehenderit at obcaecati eius nesciunt natus magnam illo earum.
              Ullam provident vel sequi.
          </p>
            <Link to="/estates">Bekijk ons aanbod</Link>
          </div>
        </section>
        <section className={indexStyles.sectionReverse}>
          <div data-sal="fade" data-sal-duration="1000" className={indexStyles.content}>
            <h1>Bezichtigingstrips Spanje</h1>
            <h2>Bezoek de projecten van uw dromen</h2>
            <p>
              Interesse in een huis in Spanje? Boek een verkenningstrip naar
              Spanje met Hip Estates. Gedurende drie dagen bezoeken we met u de
              projecten van uw dromen, we gidsen u door de regio, leggen de
              contacten, geven uitleg over de financiële en fiscale aspecten van
              een aankoop tweede verblijf in Spanje.
          </p>
            <a href="/">Lees meer</a>
          </div>
          <div data-sal="fade" data-sal-duration="1000" className={indexStyles.img2}></div>
        </section>
        <section data-sal="fade" data-sal-duration="1000" className={indexStyles.featured}>
          <h2 className="text-center">Projecten in de Kijker</h2>
          <div className={indexStyles.gallery}>
            {data.allContentfulSilcEstate.edges.map((edge, i) => {
              let formattedReference = edge.node.reference.replace(/\s+/g, '-').toLowerCase()
              const estateImgStyle = {
                width: '100%',
                height: '100%',
                backgroundImage: `url(${edge.node.heroImage.file.url})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }
              return (
                <Link to={`/estate/${formattedReference}`} key={i}>
                  <div key={i} className={indexStyles.imageContainer}>
                    <div className={indexStyles.child} style={estateImgStyle}></div>
                    <div className={indexStyles.overlay}>{edge.node.title} <br /> € {converter.format(edge.node.price)}</div>
                  </div>
                </Link>
              )
            })}
          </div>
        </section>
      </article>
    </Layout>
  )
}

export default Index
