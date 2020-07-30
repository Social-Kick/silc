import React from 'react'

import Layout from '../components/layout'

import img1 from '../images/tips/img1.jpeg'
import img2 from '../images/tips/img2.jpeg'
import img3 from '../images/tips/img3.jpeg'

import styles from '../styles/pages/tips.module.scss'

const Tips = () => {
  return (
    <Layout>
      <article className={styles.wrapper}>
        <div className={styles.hero}>
          <h1>Onze Tips en Tricks</h1>
        </div>
        <section>
          <p>
            Op deze pagina kan je meer tips & tricks vinden over waar je aan moet denken wanneer je overweegt om een woning of tweede verblijf in Spanje aan te kopen. Onze experten helpen je graag verder tijdens een vrijblijvend gesprek. <br />
            <br />
            Ben je toch al benieuwd naar wat je kan verwachten? Lees dan zeker even  de tips die hieronder opgesomd staan.
          </p>
        </section>
        <section className={styles.threeCol}>
          <div>
            <img src={img1} alt="" />
            <h2>De makelaar, uw vriend</h2>
            <p>
              Even voor de duidelijkheid, een makelaar is jouw bondgenoot in heel dit avontuur. Hij  behartigt jouw belangen en zijn ultieme doel is om jou het meest geschikte pand aan te bieden. Heb je in aanloop van je aankoop vragen? Of zelf na de aankoop de makelaars van SILC Estates blijven volledig voor u klaar staan. <br /><br />
              Denk je er over na om een huis aan te kopen zonder makelaar? Dit raden we ten zeerste af, wij weten waar je op moet letten om  geen kat in een zak  te kopen. Zorg er dus voor dat je bij je makelaar een  goed gevoel en een gevoel van vertrouwen hebt.
            </p>
          </div>
          <div>
            <img src={img2} alt="" />
            <h2>Elke euro gespaard is meegenomen</h2>
            <p>
              Met dit motto gaan we voor u op zoek naar uw woning in Spanje van uw dromen. Het gebeurd echter nog dat mensen panden aan veel lagere prijzen kunnen terugvinden. Je denkt dit is te mooi om waar te zijn, en dat is het ook. Laat je niet verleiden door extreem lage bedragen want meestal zit hier ook een addertje onder het gras. <br /> <br />
              Met de SILC Kwaliteitsgarantie kan u er vanop aan dat elk pand dat wij verkopen gecontroleerd is op maar liefst meer dan 50 kwaliteitspunten. Aarzel niet om aan één van onze medewerkers meer info te vragen over de kwaliteit van de panden
            </p>
          </div>
          <div>
            <img src={img3} alt="" />
            <h2>Administratie daarna genieten</h2>
            <p>
              Met een verhuis of aankoop van een tweede verblijf in Spanje komen veel administratieve formaliteiten kijken. Het is heel belangrijk dat je deze zorgvuldig uitvoert om zo zeker niet na enkele maanden voor onverwachte verassingen komen te staan. <br /><br />
              Ook hierin kunnen onze specialisten jou bijstaan. Op deze manier probeert SILC Estates een 360° ervaring en ondersteuning  aan te bieden.
            </p>
          </div>
        </section>
      </article>
    </Layout>
  )
}

export default Tips