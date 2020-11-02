import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import BackgroundImage from 'gatsby-background-image'

import styles from '../../styles/components/estateCard.module.scss';

const EstateCard = ({ estate }) => {
    const converter = Intl.NumberFormat("nl");
    const formattedReference = estate.reference.replace(/\s+/g, '-').toLowerCase()

    /* return (
        <div className={styles.estateCardWrapper}>
            <Img className={styles.image} fluid={estate.heroImage.fluid} alt="" />
            <div className={styles.estateCardContentWrapper}>
                <p className={styles.title}>{estate.title}</p>
                <p className={styles.ref}>{formattedReference}</p>
                <p className={styles.price}>Vanaf € {converter.format(estate.minPrice)}</p>
                <Link to={`/estate/${formattedReference}`} className={styles.detailsLink}>bekijk details</Link>
            </div>
        </div>
    ); */
    return (
        <Link to={`/estate/${formattedReference}`}>
          <div className={styles.imageContainer}>
            <BackgroundImage Tag="div" style={{ width: '100%', height: '100%' }} fluid={estate.heroImage.fluid} className={styles.child} />
            <div className={styles.overlay}>
              <div>{estate.title}</div>
              <div className={styles.overlay__price}>Vanaf € {converter.format(estate.minPrice)}</div>
            </div>
          </div>
        </Link>
      )
};

export default EstateCard;