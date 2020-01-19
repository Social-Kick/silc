import React from 'react';

import cS from '../styles/pages/contact.module.scss'
import Layout from '../components/layout'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <Layout>
      <div className={cS.wrapper}>
        <div className={cS.content}>
          <div className={cS.header}>
            <div className={cS.card}>
              <h1>Contacteer ons</h1>
              <h2>Heb je nog vragen? Laat het ons weten!</h2>
            </div>
          </div>
          <div className={cS.body}>
            <div className={cS.card}>
              <div className={cS.row}>
                <FontAwesomeIcon icon={['fal', 'paper-plane']} size="4x" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nisi quod
                  temporibus qui eveniet repellat minima veniam.
                </p>
              </div>
              <form>
                <div size={cS.row}>
                  <input type="text" placeholder="Voornaam" />
                  <input type="text" placeholder="Naam" />
                </div>
                <div size={cS.row}>
                  <input type="text" placeholder="E-mail" />
                  <input type="text" placeholder="Telefoon of GSM" />
                </div>
                <textarea placeholder="Opmerkingen" rows="5"></textarea>
                <button type="submit">Verzenden</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;