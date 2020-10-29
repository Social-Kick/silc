import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import BackgroundImage from 'gatsby-background-image'

import Layout from '../components/layout';
import SEO from '../utils/seo';

import styles from '../styles/pages/columnPage.module.scss'

const Trip = () => {
  const data = useStaticQuery(graphql`
    query{
      allContentfulTrip {
        edges {
          node {
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
          }
        }
      }
    }
  `)

  const tripData = data.allContentfulTrip.edges[0].node

  return (
    <Layout>
      <SEO title="Bezichtigingsreis" />
      <article className={styles.columnPage}>
        <section className={styles.hero} dangerouslySetInnerHTML={{ __html: tripData.abovePhotos.childMarkdownRemark.html }}></section>
        <section className={styles.cardWrapper}>
          <div className={styles.card}>
            <BackgroundImage Tag={'div'} fluid={tripData.column1Photo.fluid} alt="" />
            <div className={styles.content} dangerouslySetInnerHTML={{ __html: tripData.column1.childMarkdownRemark.html }} />
          </div>
          <div className={styles.card}>
            <BackgroundImage Tag={'div'} fluid={tripData.column2Photo.fluid} alt="" />
            <div className={styles.content} dangerouslySetInnerHTML={{ __html: tripData.column2.childMarkdownRemark.html }} />
          </div>
          <div className={styles.card}>
            <BackgroundImage Tag={'div'} fluid={tripData.column3Photo.fluid} alt="" />
            <div className={styles.content} dangerouslySetInnerHTML={{ __html: tripData.column3.childMarkdownRemark.html }} />
          </div>
        </section>
      </article>
    </Layout>
  );
}

export default Trip;