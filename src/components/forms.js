import React from "react";

import styles from "../styles/components/forms.module.scss";

export const ContactForm = ({ estateReference }) => (
  <form name="estate-interest" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
    <input type="hidden" name="bot-field" />
    <input type="hidden" name="form-name" value="estate-interest" />
    <div className={styles.row}>
      <input type="text" name="firstname" placeholder="Voornaam" />
      <input type="text" name="lastname" placeholder="Naam" />
    </div>
    <div className={styles.row}>
      <input type="email" name="email" placeholder="E-mail" />
      <input type="text" name="phone" placeholder="Telefoon of GSM" />
    </div>
    <input type="hidden" name="estate-reference" value={estateReference} />
    <textarea placeholder="Opmerkingen" name="message" rows="5"></textarea>
    <button className={styles.btn} type="submit">Verzenden</button>
  </form>
)

export const CallRequest = ({ estateReference }) => {
  return (
    <form
      name="terugbelverzoek"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      netlify="true"
    >
      <input type="hidden" name="bot-field" />
      <input
        type="hidden"
        name="form-name"
        value="terugbelverzoek"
      />
      <input
        type="hidden"
        name="info"
        value={estateReference}
      />
      <input
        type="text"
        name="name"
        placeholder="Naam"
        required
      />
      <input
        type="text"
        name="phone"
        placeholder="GSM"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="E-mail"
        required
      />
      <button className={styles.btn} type="submit">Verzenden</button>
    </form>
  );
};

export const WijZoekenVoorJouForm = () => (
  <form name="zoekvraag" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
    <input type="hidden" name="bot-field" />
    <input type="hidden" name="form-name" value="zoekvraag" />
    <div className={styles.group} style={{ marginBottom: '1rem' }}>
        <input type="text" name="firstname" placeholder="Voornaam" required />
        <input type="text" name="lastname" placeholder="Achternaam" required />
        <input type="email" name="email" placeholder="E-mail" required />
        <input type="text" name="phone" placeholder="Telefoon of GSM" required />
    </div>
    <div className={styles.group}>
      <label for="region">Welke regio?</label>
      <select name="region">
        <option value="">regio</option>
        <option value="Costa Almeria">Costa Almeria</option>
        <option value="Costa Blanca Noord">Costa Blanca Noord</option>
        <option value="Costa Blanca Zuid">Costa Blanca Zuid</option>
        <option value="Costa Calida">Costa Calida</option>
        <option value="Costa del Sol">Costa del Sol</option>
      </select>
    </div>

    <div class={styles.group}>
      <label for="type">Wat zoek je?</label>
      <select name="type">
        <option value="">type</option>
        <option value="Villa">Villa</option>
        <option value="Appartement">Appartement</option>
        <option value="Woning">Woning</option>
      </select>
    </div>

    <div class={styles.group}>
      <label for="budget">Wat is je budget?</label>
      <select name="budget" required>
        <option value="">jouw budget</option>
        <option value="Tot €100.000">Tot €100.000</option>
        <option value="€100.000 - €200.00">€100.000 - €200.000</option>
        <option value="€100.000 - €200.00">€200.000 - €300.000</option>
        <option value="€100.000 - €200.00">€300.000 - €400.000</option>
        <option value="€100.000 - €200.00">Meer dan €400.000</option>
      </select>
    </div>

    <div class={styles.group}>
      <label for="timeperiod">Binnen welke termijn wil je iets kopen in Spanje</label>
      <select name="timeperiod" required>
        <option value="">jouw termijn</option>
        <option value="Minder dan 1 jaar">Minder dan 1 jaar</option>
        <option value="1 à 3 jaar">1 à 3 jaar</option>
        <option value="Meer dan 3 jaar">Meer dan 3 jaar</option>
      </select>
    </div>

    <textarea
      placeholder="Opmerkingen"
      name="message"
      rows="5"
    ></textarea>{' '}
    <button className={styles.btn} type="submit">
      Verzenden
    </button>
  </form>
)
