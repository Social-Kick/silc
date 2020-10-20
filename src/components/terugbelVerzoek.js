import React from 'react';

import styles from '../styles/components/terugbelVerzoek.module.scss';

export const TerugbelVerzoek = props => {
    return (
        <div className={styles.callRequest}>
            <div className={styles.avatar}>
                <img src={props.imageSrc} alt="afbeelding terugbelpersoon" />
            </div>
                <h3>Terugbelverzoek</h3>
            <p>
                {props.children}
            </p>
            <button onClick={props.toggleCallRequestModal}>Maak een verzoek</button>
        </div>
    )
}

export default TerugbelVerzoek;