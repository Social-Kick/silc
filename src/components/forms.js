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
      <input className={styles.standardInput} type="hidden" name="bot-field" />
      <input
        className={styles.standardInput}
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
        className={styles.standardInput}
        type="text"
        name="name"
        placeholder="Naam"
        required
      />
      <input
        className={styles.standardInput}
        type="text"
        name="phone"
        placeholder="GSM"
        required
      />
      <input
        className={styles.standardInput}
        type="email"
        name="email"
        placeholder="E-mail"
        required
      />
      <button className={styles.btn} type="submit">Verzenden</button>
    </form>
  );
};
