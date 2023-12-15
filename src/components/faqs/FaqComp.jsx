
import styles from "./FaqComp.module.css";

export default function FaqComp() {
  return (
    <>
      <div className={styles.FAqs}>
        <div className={styles.faqTitle}>Frequently Asked Questions</div>
        <div className={styles.faqList}>
          <div className={styles.faqQuestion}>
            <div className={styles.questionIcon}>+</div>
            <p className={styles.questionText}>What is ONE STOP Hospitality Management Solution?</p>
          </div>
          <div className={styles.faqQuestion}>
            <div className={styles.questionIcon}>+</div>
            <p className={styles.questionText}>What are the benefits of using ONE STOP?</p>
          </div>
          <div className={styles.faqQuestion}>
            <div className={styles.questionIcon}>+</div>
            <p className={styles.questionText}>Is ONE STOP right for my property?</p>
          </div>
          <div className={styles.faqQuestion}>
            <div className={styles.questionIcon}>+</div>
            <p className={styles.questionText}>What features does ONE STOP offer?</p>
          </div>
          <div className={styles.faqQuestion}>
            <div className={styles.questionIcon}>+</div>
            <p className={styles.questionText}>How much does ONE STOP cost?</p>
          </div>
          <div className={styles.faqQuestion}>
            <div className={styles.questionIcon}>+</div>
            <p className={styles.questionText}>What kind of support does ONE STOP offer?</p>
          </div>
        </div>
      </div>
    </>
  );
}
