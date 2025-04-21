import React from 'react';
import styles from './Emigration.module.css';

interface EmigrationProps {
  imgSrc: string;
  imgAlt: string;
}

const Emigration: React.FC<EmigrationProps> = ({ imgSrc, imgAlt }) => {
  return (
    <div>
      <img src={imgSrc} className={styles['img-fluid']} alt={imgAlt} />
    </div>
  );
};

export default Emigration;



