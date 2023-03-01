// import PropTypes from 'prop-types';
import styles from './feedbackOptions.module.css';

const FeedbackOptions = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <button type="button" className={styles.btn}>
          Good
        </button>
      </li>
      <li className={styles.item}>
        <button type="button" className={styles.btn}>
          Neutral
        </button>
      </li>
      <li className={styles.item}>
        <button type="button" className={styles.btn}>
          Bad
        </button>
      </li>
    </ul>
  );
};

export default FeedbackOptions;
