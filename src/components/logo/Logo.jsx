
import React from 'react';
import styles from './Logo.module.css';

const Logo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.background} />
      <div className={styles.textContainer}>OHSM</div>
    </div>
  );
};

export default Logo;
