import React from 'react';

import EstateCard from './estateCard';

import styles from '../../styles/components/estateGallery.module.scss';

const estateGallery = ({ estates }) => {
    console.log(estates);
    return (
        <div className={styles.gallery}>
            {estates.map(estate => <EstateCard estate={estate.node} />)}
        </div>
    );
}

export default estateGallery;