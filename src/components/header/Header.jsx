
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.Header}>
      <div className={styles.Left}>
        <div className={styles.Ohsm}>OHSM</div>
      </div>
      <div className={styles.ButtonsGroup}>
        {/* Navigation Items */}
        <div className={styles.MenuItem}>Solutions</div>
        <div className={styles.MenuItem}>Company</div>
        <div className={styles.MenuItem}>Pricing</div>
        <div className={styles.MenuItem}>Resources</div>
        <div className={styles.MenuItem}>Contact Us</div>
      </div>
      <div className={styles.ButtonsGroup}>
        {/* Login and Demo Buttons */}
        <div className={styles.Button}>
          <div className={styles.TextContainer}>
            <div className={styles.LogIn}>Log In</div>
          </div>
        </div>
        <div className={styles.Button} style={{ background: '#334155', border: '1px #475569 solid' }}>
          <div className={styles.TextContainer}>
            <div className={styles.RequestADemo}>Request a demo</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
