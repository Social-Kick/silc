import React from 'react';
import { Link, navigate } from 'gatsby';
import Img from 'gatsby-image';

import styles from '../styles/components/estateCard.module.scss';

const EstateCard = ({ estate }) => {
    const converter = Intl.NumberFormat("nl");
    const formattedReference = estate.reference.replace(/\s+/g, '-').toLowerCase()
    console.log(estate);
    return (
        <div class={styles.estateCardWrapper}>
            <Img className={styles.image} fluid={estate.heroImage.fluid} alt="" />
            <div class={styles.estateCardContentWrapper}>
                <p className={styles.title}>{estate.title}</p>
                <p className={styles.ref}>{formattedReference}</p>
                <p className={styles.price}>Vanaf € {converter.format(estate.minPrice)}</p>
                <Link to={`/estate/${formattedReference}`} className={styles.detailsLink}>bekijk details</Link>
            </div>
        </div>
    );
};

export default EstateCard;