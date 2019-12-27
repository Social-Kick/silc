import React from "react"
import Layout from "../components/layout"

import indexStyles from "../styles/index.module.scss"

const Index = () => (
  <Layout>
    <article>
      <section className={indexStyles.hero}></section>
      <section className={indexStyles.section}>
        <div className={indexStyles.img}></div>
        <div className={indexStyles.content}>
          <h1>Bekijk ons aanbod huizen in Spanje</h1>
          <h2>Appartementen en villa's voor elk budget</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt,
            officia, mollitia doloremque distinctio quae ipsam sint, ad
            reprehenderit at obcaecati eius nesciunt natus magnam illo earum.
            Ullam provident vel sequi.
          </p>
        </div>
      </section>
      <section className={indexStyles.sectionReverse}>
        <div className={indexStyles.content}>
          <h1>Bezichtigingstrips Spanje</h1>
          <h2>Bezoek de projecten van uw dromen</h2>
          <p>
            Interesse in een huis in Spanje? Boek een verkenningstrip naar
            Spanje met Hip Estates. Gedurende drie dagen bezoeken we met u de
            projecten van uw dromen, we gidsen u door de regio, leggen de
            contacten, geven uitleg over de financiële en fiscale aspecten van
            een aankoop tweede verblijf in Spanje. Als u een villa of
            appartement koopt via Hip Estates, zorgen wij voor de volledige
            afhandeling van uw dossier, van aankoopcontract tot
            sleuteloverdracht. U overnacht in een luxe hotel. Een
            bezichtigingstrip is de ideale manier om het aanbod ter plaatse met
            eigen ogen te bekijken en de lokale sfeer op te snuiven.
          </p>
          <a href="#">Lees meer</a>
        </div>
        <div className={indexStyles.img}></div>
      </section>
      <section className={indexStyles.featured}>
        <h1 className="text-center">Spaanse Projecten in de Kijker</h1>
        <div className={indexStyles.gallery}>
          <div className={indexStyles.imageContainer}>
            <img
              src="https://www.hipestates.com/watermark//las-colinas-residences-027-ret-watermark5025525525530BOTTOM_RIGHT.jpg"
              alt=""
            />
            <div className={indexStyles.overlay}>Costa Blanca Zuid - €169.000</div>
          </div>
          <div className={indexStyles.imageContainer}>
            <img
              src="https://www.hipestates.com/watermark//las-colinas-residences-027-ret-watermark5025525525530BOTTOM_RIGHT.jpg"
              alt=""
            />
            <div className={indexStyles.overlay}>Costa Blanca Zuid - €169.000</div>
          </div>
          <div className={indexStyles.imageContainer}>
            <img
              src="https://www.hipestates.com/watermark//las-colinas-residences-027-ret-watermark5025525525530BOTTOM_RIGHT.jpg"
              alt=""
            />
            <div className={indexStyles.overlay}>Costa Blanca Zuid - €169.000</div>
          </div>
          <div className={indexStyles.imageContainer}>
            <img
              src="https://www.hipestates.com/watermark//las-colinas-residences-027-ret-watermark5025525525530BOTTOM_RIGHT.jpg"
              alt=""
            />
            <div className={indexStyles.overlay}>Costa Blanca Zuid - €169.000</div>
          </div>
        </div>
      </section>
    </article>
  </Layout>
)

export default Index
