import React from 'react';
import { graphql, compose } from 'gatsby';
import Img from 'gatsby-image';
import BackgroundImage from 'gatsby-background-image'

import Layout from '../components/layout';
import EstateCard from '../components/estateCard';
import SEO from '../utils/seo';

import styles from '../styles/pages/columnPage.module.scss'

export const pageQuery = graphql`
    query($title: String!, $regio: String!) {
      contentfulLandingPaginaCosta(titel: {eq: $title}) {
        id
        titel
        regio
        abovePhotos {
          childMarkdownRemark {
            html
          }
        }
        column1Photo {
          fluid(quality: 100) {
            ...GatsbyContentfulFluid
          }
        }
        column1 {
          childMarkdownRemark {
            html
          }
        }
        column2Photo {
          fluid(quality: 100) {
            ...GatsbyContentfulFluid
          }
        }
        column2 {
          childMarkdownRemark {
            html
          }
        }
        column3Photo {
          fluid(quality: 100) {
            ...GatsbyContentfulFluid
          }
        }
        column3 {
          childMarkdownRemark {
            html
          }
        }
        column4Photo {
          fluid(quality: 100) {
            ...GatsbyContentfulFluid
          }
        }
        column4 {
          childMarkdownRemark {
            html
          }
        }
        column5Photo {
          fluid(quality: 100) {
            ...GatsbyContentfulFluid
          }
        }
        column5 {
          childMarkdownRemark {
            html
          }
        }
      }
      allContentfulSilcEstate(limit: 3, filter: {region: {eq: $regio}}) {
        edges {
          node {
            heroImage {
              fluid(quality: 100) {
                src
              }
              file {
                url
              }
            }
            title
            reference
            minPrice
          }
        }
      }
    }
  `

const CostaLandingPage = props => {

  const costaPageData = props.data.contentfulLandingPaginaCosta;
  const estatesData = props.data.allContentfulSilcEstate.edges;

  return (
    <Layout>
      <SEO title={costaPageData.titel} />
      <article className={styles.columnPage}>
        <section className={styles.hero} dangerouslySetInnerHTML={{ __html: costaPageData.abovePhotos.childMarkdownRemark.html }}></section>
        <section className={styles.cardWrapper}>
          <div className={styles.card}>
            <BackgroundImage Tag={'div'} fluid={costaPageData.column1Photo.fluid} alt="" />
            <div className={styles.content} dangerouslySetInnerHTML={{ __html: costaPageData.column1.childMarkdownRemark.html }} />
          </div>
          <div className={styles.card}>
            <BackgroundImage Tag={'div'} fluid={costaPageData.column2Photo.fluid} alt="" />
            <div className={styles.content} dangerouslySetInnerHTML={{ __html: costaPageData.column2.childMarkdownRemark.html }} />
          </div>
          <div className={styles.card}>
            <BackgroundImage Tag={'div'} fluid={costaPageData.column3Photo.fluid} alt="" />
            <div className={styles.content} dangerouslySetInnerHTML={{ __html: costaPageData.column3.childMarkdownRemark.html }} />
          </div>
          <div className={styles.card}>
            <BackgroundImage Tag={'div'} fluid={costaPageData.column4Photo.fluid} alt="" />
            <div className={styles.content} dangerouslySetInnerHTML={{ __html: costaPageData.column4.childMarkdownRemark.html }} />
          </div>
          <div className={styles.card}>
            <BackgroundImage Tag={'div'} fluid={costaPageData.column5Photo.fluid} alt="" />
            <div className={styles.content} dangerouslySetInnerHTML={{ __html: costaPageData.column5.childMarkdownRemark.html }} />
          </div>
          <div className={styles.cardFooter}>
            <div className={styles.content}>
              <h2>Benieuwd naar het aanbod van SILC Estates aan de {costaPageData.titel}?</h2>
              <div className={styles.cardFooterContent}>{estatesData.map(estate => <EstateCard className={styles.estateCard} estate={estate.node}/>)}</div>
            </div>
          </div>
        </section>
      </article>
    </Layout>
  );
}

export default CostaLandingPage;