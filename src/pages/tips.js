import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import RichText from '../utils/richText'

import styles from '../styles/pages/tips.module.scss'

const Tips = ({ data: { allContentfulTips } }) => {
  const tips = allContentfulTips.edges
  return (
    <Layout>
      <article className={styles.wrapper}>
        <div className={styles.hero}>
          <h1>Onze Tips en Tricks</h1>
        </div>
        <section className={styles.intro}>
          <p>Houdt u van Spanje en wil u er een vaste stek om op vakantie te gaan? Of hebt u uw leven lang gewerkt en wil u nu genieten van uw welverdiende rust? U hebt beslist om uw spaargeld te investeren in een woning in Spanje?</p>
          <br />
          <p>Wij sommen negen factoren op waar u best rekening mee houdt bij het kiezen van een locatie</p>
        </section>
        <section className={styles.tipsWrapper}>
          {tips.map(({ node: tip }) => (
            <div className={styles.tip}>
              <div className={styles.tipNr}>{tip.number}</div>
              <h3>{tip.title}</h3>
              <RichText text={tip.text.json} />
            </div>
          ))}
        </section>
      </article>
    </Layout>
  )
}

export default Tips

export const data = graphql`
  {
    allContentfulTips(sort: {fields: [number], order: ASC}) {
      edges {
        node {
          title
          text {
            json
          }
          number
        }
      }
    }
  }
`