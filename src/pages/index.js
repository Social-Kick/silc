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
              fluid(quality: 100){
                ...GatsbyContentfulFluid
              }
            }
            minPrice
            maxPrice
            region
          }
        }
      }
      allContentfulHomeContent {
        edges {
          node {
            id
            title
            subTitle
            link
            linkName
            text{
              text
            }
            image{
              fluid(maxHeight: 440){
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
      hero: file(relativePath: {eq: "hero.jpeg"}) {
        childImageSharp{
          fluid(quality:100 maxWidth:1920){
            ...GatsbyImageSharpFluid
          }
        }
      }
      logo: file(relativePath: {eq: "logo-silc.png"}) {
        childImageSharp{
          fixed(width:200 height:200){
            ...GatsbyImageSharpFixed
          }
        }
      }
    } 
`)

  let converter = Intl.NumberFormat("nl")
  const imageData = data.hero.childImageSharp.fluid
  const logoData = data.logo.childImageSharp.fixed
  const homeContent = data.allContentfulHomeContent
  const metaDescription = 'Welkom op de website van SILC Estates België. Als vastgoedspecialist in Spanje beschikken wij over een enorm uitgebreid aanbod woningen, appartementen en villa’s in Spanje. Zowel voor het luxe segment als de middenklasse.';
  return (
    <Layout>
      <SEO title={"Home"} description={metaDescription} />
      <article>
        <BackgroundImage
          Tag="section"
          fluid={imageData}
          className={indexStyles.hero}
        >
          <Img className={indexStyles.logo} fixed={logoData} />
          <h2>Jouw droom in Spanje!</h2>
          <Link to="/estates" className={indexStyles.cta}>Bekijk onze projecten</Link>
        </BackgroundImage>
        {homeContent.edges.map((edge, i) => {
          const isOdd = (i % homeContent.edges.length) === 1 ? false : true;
          return (
            <section data-sal="fade" data-sal-duration="1000" key={i} className={isOdd ? indexStyles.section : indexStyles.sectionReverse}>
              <BackgroundImage className={indexStyles.img} fluid={edge.node.image.fluid} />
              <div className={indexStyles.content}>
                <h1>{edge.node.title}</h1>
                <h2>{edge.node.subTitle}</h2>
                <p>
                  {edge.node.text.text}
                </p>
                {edge.node.link && <Link to={edge.node.link}>{edge.node.linkName}</Link>}
              </div>
            </section>
          )
        })}
        <section data-sal="fade" data-sal-duration="1000" className={indexStyles.featured}>
          <h2 className="text-center">Projecten in de kijker</h2>
          <div className={indexStyles.gallery}>
            {data.allContentfulSilcEstate.edges.map((edge, i) => {
              let formattedReference = edge.node.reference.replace(/\s+/g, '-').toLowerCase()
              return (
                <Link to={`/estate/${formattedReference}`} key={i}>
                  <div key={i} className={indexStyles.imageContainer}>
                    <BackgroundImage Tag="div" style={{ width: '100%', height: '100%' }} fluid={edge.node.heroImage.fluid} className={indexStyles.child} />
                    <div className={indexStyles.overlay}>
                      <div>{edge.node.title}</div>
                      <div className={indexStyles.overlay__price}>Vanaf € {converter.format(edge.node.minPrice)}</div>
                    </div>
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
