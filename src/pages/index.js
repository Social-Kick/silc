import React from "react"
import Layout from "../components/layout"

import indexStyles from "./index.module.scss"

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
    </article>
  </Layout>
)

export default Index
