import React from 'react'
import Layout from '../components/layout'
import SEO from '../utils/seo'

import { WijZoekenVoorJouForm } from '../components/forms';
import styles from '../styles/pages/wijzoekenvoorjou.module.scss'

const WijZoekenVoorJou = () => {
  const metaDescription = 'Wij gaan voor jou op zoek naar je droomwoning in Spanje. Of het nu gaat om een appartement, woning of villa, SILC Estates is de partner voor de aankoop van Spaans vastgoed.';
  return (
    <Layout>
      <SEO title='Wij zoeken voor jou' description={metaDescription} />
      <article className={styles.wrapper}>
        <div className={styles.hero}>
          <h1>Wij zoeken voor jou</h1>
        </div>
        <section className={styles.intro}>
          <h2>
            Vind je in ons aanbod niet helemaal wat je wil? <br /> Of ben je op
            zoek naar een verblijf met specifieke eisen?
          </h2>
          <p>
            Geen probleem, bij SILC Estates gaan we met plezier naar jouw
            droomwoning op zoek. <br />
            Van rustig gelegen villa's op wandelafstand van de zee tot
            vastgoedinvesteringen aan een bruisende kust.
          </p>
        </section>
        <section className={styles.form}>
          <WijZoekenVoorJouForm />
        </section>
      </article>
    </Layout>
  )
}

export default WijZoekenVoorJou
