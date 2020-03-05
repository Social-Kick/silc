import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'

import Layout from "../components/layout"
import indexStyles from "../styles/pages/index.module.scss"
import SEO from "../utils/seo"

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
            minPrice
            maxPrice
            region
          }
        }
      }
      hero: file(relativePath: {eq: "hero.jpg"}) {
        childImageSharp{
          fluid(maxWidth:1920, quality:80){
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      logo: file(relativePath: {eq: "logo-silc.png"}) {
        childImageSharp{
          fixed(width:100 height:100){
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    } 
`)

  let converter = Intl.NumberFormat("nl")
  const imageData = data.hero.childImageSharp.fluid
  const logoData = data.logo.childImageSharp.fixed
  return (
    <Layout>
      <SEO title={"Home"}/>
      <article>
        <BackgroundImage
          Tag="section"
          fluid={imageData}
          className={indexStyles.hero}
        >
          <Img className={indexStyles.logo} fixed={logoData}/>
          <h1>SILC ESTATES</h1>
          <h2>Wij maken uw dromen waar!</h2>
          <Link to="/estates" className={indexStyles.cta}>Bekijk onze projecten</Link>
        </BackgroundImage>
        <section className={indexStyles.section}>
          <div data-sal="fade" data-sal-duration="1000" className={indexStyles.img}></div>
          <div data-sal="fade" data-sal-duration="1000" className={indexStyles.content}>
            <h1>Bekijk ons aanbod huizen in Spanje</h1>
            <h2>Appartementen en villa's voor elk budget</h2>
            <p>
              Ben jij op zoek naar jouw vaste plek onder de Spaanse zon? 
              Of ben je op zoek naar een interessante investering? 
              Of het nu gaat over een woning voor met de hele familie op vakantie te gaan of een opbrengsteneigendom, 
              SILC ESTATES is jouw professionele partner om op zoek te gaan naar de meest geschikte eigendom.
            </p>
            <Link to="/estates">Bekijk ons aanbod</Link>
          </div>
        </section>
        <section className={indexStyles.sectionReverse}>
          <div data-sal="fade" data-sal-duration="1000" className={indexStyles.content}>
            <h1>Bezichtigingstrips Spanje</h1>
            <h2>Bezoek de projecten van uw dromen</h2>
            <p>
              Interesse in een huis in Spanje? Boek een verkenningstrip naar Spanje met SILC ESTATES.
          </p>
            <Link to="/about">Lees meer</Link>
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
                    <div className={indexStyles.overlay}>{edge.node.title} <br /> € {converter.format(edge.node.minPrice)}</div>
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
