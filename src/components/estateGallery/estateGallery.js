import React from 'react';

import EstateCard from './estateCard';

import styles from '../../styles/components/estateGallery.module.scss';

const estateGallery = ({ estates }) => {
    return (
        <div className={styles.gallery}>
            {estates.map((estate, i) => <EstateCard key={i} estate={estate.node} />)}
        </div>
    );
}

export default estateGallery;