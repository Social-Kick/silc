import React from 'react';
import Layout from '../components/layout';
import SEO from '../utils/seo';

import styles from '../styles/pages/trip.module.scss'

const trip = () => {
  return (
    <Layout>
      <SEO title="Bezichtigingsreis" />
      <article className={styles.trip}>
        <section>
          <h1>Bezichtigingsreis</h1>
          <p>
            Immo kopen in Spanje doe je niet ondoordacht. Indien u interesse hebt in één of meerdere projecten, organiseert Silc Estates individuele bezichtigingsreizen om u de kans te geven een écht doordachte keuze te maken.
          <br />
            We bezoeken zowel de projecten als de omgeving, zodat u goed kan inschatten waar u precies terechtkomt.
        </p>
        </section>
        <section className={styles.cardWrapper}>
          <div className={styles.card}>
            <img src="https://www.tmbenelux.eu/wp-content/uploads/2015/09/slider-COB074001-555x400.jpg" alt="" />
            <div className={styles.content}>
              <h2>Individueel programma</h2>
              <p>
                Voor het vertrek zoeken we samen met u uit welke projecten
                voor u het meest geschikt zijn. Op basis daarvan maken we een
                planning op om de locaties en projecten van uw keuze te gaan
                bezoeken. Een bezichtigingsreis duurt in de meeste gevallen
                2 à 3 dagen, afhankelijk van het aantal te bekijken projecten.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <img src="https://www.tmbenelux.eu/wp-content/uploads/2015/08/zenia-boulevard-omgeving1-555x400.jpg" alt="" />
            <div className={styles.content}>
              <h2>Aandacht voor de omgeving</h2>
              <p>
                Voor het vertrek zoeken we samen met u uit welke projecten
                voor u het meest geschikt zijn. Op basis daarvan maken we een
                planning op om de locaties en projecten van uw keuze te gaan
                bezoeken. Een bezichtigingsreis duurt in de meeste gevallen
                2 à 3 dagen, afhankelijk van het aantal te bekijken projecten.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <img src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="" />
            <div className={styles.content}>
              <h2>Verblijf in klassehotels</h2>
              <p>
                Voor het vertrek zoeken we samen met u uit welke projecten
                voor u het meest geschikt zijn. Op basis daarvan maken we een
                planning op om de locaties en projecten van uw keuze te gaan
                bezoeken. Een bezichtigingsreis duurt in de meeste gevallen
                2 à 3 dagen, afhankelijk van het aantal te bekijken projecten.
                  </p>
            </div>
          </div>
        </section>
      </article>
    </Layout>
  );
}

export default trip;