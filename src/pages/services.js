import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

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
            file{
              url
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
          const serviceImageStyle = {
            backgroundImage: `url(${service.image.file.url})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }
          return (
            <section key={i} className={styles.section}>
              <div className={styles.sectionLeft} style={serviceImageStyle}></div>
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