import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/pages/about.module.scss'
import Layout from '../components/layout'
import RichText from '../utils/richText';
import SEO from '../utils/seo'

const About = () => {
  const data = useStaticQuery(graphql`
    query{
      allContentfulWhyChooseSilc{
        edges{
          node{
            title
            body{
              json
            }
          }
        }
      }
      carl:file(relativePath: { eq: "team/carl.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ingrid:file(relativePath: { eq: "team/ingrid.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      em:file(relativePath: { eq: "team/em.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <Layout>
      <SEO title="Over ons" />
      <article>
        <section className={styles.team}>
          <h1>Ons Team</h1>
          <div className={styles.teamRow}>
            <div className={styles.person}>
              <Img className={styles.personImg} fluid={data.carl.childImageSharp.fluid} alt="Carl Bruyninckx" />
              <div className={styles.personTitle}>
                <h2>Carl Bruyninckx</h2>
                <span>Bestuurder</span>
              </div>
            </div>
            <div className={styles.person}>
              <Img className={styles.personImg} fluid={data.em.childImageSharp.fluid} alt="Em Phan" />
              <div className={styles.personTitle}>
                <h2>Em Phan</h2>
                <span>Erkend Vastgoedmakelaar</span>
              </div>
            </div>
            <div className={styles.person}>
              <Img className={styles.personImg} fluid={data.ingrid.childImageSharp.fluid} alt="Ingrid Eeckelaers" />
              <div className={styles.personTitle}>
                <h2>Ingrid Eeckelaers</h2>
                <span>Office Manager</span>
              </div>
            </div>
          </div>

        </section>
        <section className={styles.whySilc}>
          <div className={styles.whyLeft}>
            <h1>Waarom SILC ESTATES?</h1>
          </div>
          <div className={styles.accordion}>
            {data.allContentfulWhyChooseSilc.edges.map((edge, i) => {
              return (
                <div key={i} onClick={() => setSelectedItem(i)} className={styles.item}>
                  <div className={styles.heading}>
                    {selectedItem === i ? <FontAwesomeIcon className={styles.toggleIcon} icon={['fal', 'chevron-up']} /> : <FontAwesomeIcon className={styles.toggleIcon} icon={['fal', 'chevron-down']} />}
                    <div className={styles.title}>{edge.node.title}</div>
                  </div>
                  <div className={styles.content} style={{ display: selectedItem === i ? 'block' : 'none' }}>
                    <RichText text={edge.node.body.json}></RichText>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </article>
    </Layout>
  );
}

export default About;