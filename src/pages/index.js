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
              fluid{
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
      hero: file(relativePath: {eq: "hero.jpg"}) {
        childImageSharp{
          fluid(quality:60){
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      logo: file(relativePath: {eq: "logo-silc.png"}) {
        childImageSharp{
          fixed(width:200 height:200){
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    } 
`)

  let converter = Intl.NumberFormat("nl")
  const imageData = data.hero.childImageSharp.fluid
  const logoData = data.logo.childImageSharp.fixed
  const homeContent = data.allContentfulHomeContent
  return (
    <Layout>
      <SEO title={"Home"} />
      <article>
        <BackgroundImage
          Tag="section"
          fluid={imageData}
          className={indexStyles.hero}
        >
          <Img className={indexStyles.logo} fixed={logoData} />
          <h2>Wij maken uw dromen waar!</h2>
          <Link to="/estates" className={indexStyles.cta}>Bekijk onze projecten</Link>
        </BackgroundImage>
        {homeContent.edges.map((edge, i) => {
          const isOdd = (i % homeContent.edges.length) === 1 ? false : true;
          return (
            <section data-sal="fade" data-sal-duration="1000" key={i} className={isOdd ? indexStyles.section : indexStyles.sectionReverse}>
              <BackgroundImage fluid={edge.node.image.fluid}/>
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
