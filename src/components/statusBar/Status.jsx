import React from 'react';
import styles from './Status.module.css';

const Status = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.bar1} />
        <div className={styles.icon1}>
          <div className={styles.line1} />
          <div className={styles.line2} />
          <div className={styles.line3} />
        </div>
        <img className={styles.icon2} src="../../assets/wifi.png" alt="Icon 2" />
        <img className={styles.icon3} src="https://via.placeholder.com/18x11" alt="Icon 3" />
        <div className={styles.textContainer}>
          <div className={styles.text}>
            <span>9:4</span>
            <span>1</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;
