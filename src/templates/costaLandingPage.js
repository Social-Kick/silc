import React from 'react';
import { graphql, navigate } from 'gatsby';
import BackgroundImage from 'gatsby-background-image'

import Layout from '../components/layout';
import EstateGallery from '../components/estateGallery/estateGallery';
import SEO from '../utils/seo';

import styles from '../styles/pages/columnPage.module.scss';

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
      allContentfulSilcEstate(limit: 4, filter: {region: {eq: $regio}}) {
        edges {
          node {
            heroImage {
              fluid(quality: 100) {
                ...GatsbyContentfulFluid
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

          {(costaPageData?.column1Photo || costaPageData?.column1) && <div className={styles.card}>
            {costaPageData?.column1Photo && <BackgroundImage Tag={'div'} fluid={costaPageData.column1Photo.fluid} alt="" />}
            {costaPageData?.column1 && <div className={styles.content} dangerouslySetInnerHTML={{ __html: costaPageData.column1.childMarkdownRemark.html }} />}
          </div>}
          {(costaPageData?.column2Photo || costaPageData?.column2) && <div className={styles.card}>
            {costaPageData?.column2Photo && <BackgroundImage Tag={'div'} fluid={costaPageData.column2Photo.fluid} alt="" />}
            {costaPageData?.column2 && <div className={styles.content} dangerouslySetInnerHTML={{ __html: costaPageData.column2.childMarkdownRemark.html }} />}
          </div>}
          {(costaPageData?.column3Photo || costaPageData?.column3) && <div className={styles.card}>
            {costaPageData?.column3Photo && <BackgroundImage Tag={'div'} fluid={costaPageData.column3Photo.fluid} alt="" />}
            {costaPageData?.column3 && <div className={styles.content} dangerouslySetInnerHTML={{ __html: costaPageData.column3.childMarkdownRemark.html }} />}
          </div>}
          {(costaPageData?.column4Photo || costaPageData?.column4) && <div className={styles.card}>
            {costaPageData?.column4Photo && <BackgroundImage Tag={'div'} fluid={costaPageData.column4Photo.fluid} alt="" />}
            {costaPageData?.column4 && <div className={styles.content} dangerouslySetInnerHTML={{ __html: costaPageData.column4.childMarkdownRemark.html }} />}
          </div>}
          {(costaPageData?.column5Photo || costaPageData?.column5) && <div className={styles.card}>
            {costaPageData?.column5Photo && <BackgroundImage Tag={'div'} fluid={costaPageData.column5Photo.fluid} alt="" />}
            {costaPageData?.column5 && <div className={styles.content} dangerouslySetInnerHTML={{ __html: costaPageData.column5.childMarkdownRemark.html }} />}
          </div>}
          <div className={styles.cardFooter}>
            <div className={styles.content}>
              <h2>Benieuwd naar het aanbod van SILC Estates aan de {costaPageData.titel}?</h2>
              <div className={[styles.textCenter, styles.mb2].join(' ')}>
                <button className={[styles.btnPrimary, styles.btnCta].join(' ')} onClick={() => { navigate(`/estates`, { state: { query: { region: costaPageData.regio }}}) }}>Klik hier</button>
              </div>
              <div className={styles.cardFooterContent}>
                <EstateGallery estates={estatesData} />
              </div>
            </div>
          </div>
        </section>
      </article>
    </Layout>
  );
}

export default CostaLandingPage;