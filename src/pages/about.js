import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
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
    }
  `)

  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <Layout>
      <SEO title="Over ons" />
      <article>
        <section className={styles.team}>
          <h1>Wie zijn wij?</h1>
          <p>SILC ESTATES, professionals in multi-market en multi-channel vastgoedmarketing in Spanje.</p>
          <div className={styles.teamRow}>
            <div className={styles.person}>
              <img className={styles.personImg} src="https://silcestates.be/wp-content/uploads/2019/10/FOTO_STEFAN.jpg" alt="Stefan Noben" />
              <div className={styles.personTitle}>
                <h2>Stefan Noben</h2>
                <span>Commercieel directeur</span>
              </div>
              <p className={styles.personAbout} >
                Licentiaat in de Economie en Master in de Financiën met méér dan 20 jaar ervaring op de internationale vastgoedmarkt.
                De voorbije jaren was hij verantwoordelijk voor verschillende markten op europees niveau bij de beste Spaanse bouwpromotors.
              </p>
            </div>
            <div className={styles.person}>
              <img className={styles.personImg} src="https://silcestates.be/wp-content/uploads/2019/10/FOTO_CHEMA.jpg" alt="Chema Álvarez" />
              <div className={styles.personTitle}>
                <h2>Chema Álvarez</h2>
                <span>Algemeen directeur</span>
              </div>
              <p className={styles.personAbout}>
                Licentiaat in de Economie en een Bachelor Degree van de Jönköping International Business School.
                Meer dan 20 jaar ervaring op de internationale vastgoedmarkt. De voorbije jaren was hij verantwoordelijk voor
                verschillende markten op europees niveau bij de beste Spaanse bouwpromotors.
              </p>
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