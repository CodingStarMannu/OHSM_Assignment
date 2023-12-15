
import styles from './LogoSmall.module.css';

const LogoSmall = () => {
  return (
    <div className={styles.logoContainer}>
      <div className={styles.logoIcon}></div>
      <div className={styles.logoText}>OHSM</div>
    </div>
  );
};

export default LogoSmall;
