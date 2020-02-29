import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image'


import Layout from "../components/layout";
import RichText from "../utils/richText"

import styles from '../styles/pages/services.module.scss'

const Services = () => {
  const data = useStaticQuery(graphql`
  query{
    allContentfulServices{
      edges{
        node{
          title
          body{
            json
          }
          image{
            fluid(quality:100) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`)
  return (
    <Layout>
      <article>
        {data.allContentfulServices.edges.map((edge, i) => {
          const service = edge.node;
          return (
            <section key={i} className={styles.section}>
              <BackgroundImage fluid={service.image.fluid} className={styles.sectionLeft}></BackgroundImage>
              <div className={styles.sectionRight}>
                <h2>{service.title}</h2>
                <RichText text={service.body.json}></RichText>
              </div>
            </section>
          )
        })}
      </article>
    </Layout>
  );
}

export default Services;