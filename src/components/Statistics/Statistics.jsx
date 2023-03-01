import PropTypes from 'prop-types';
import styles from './statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <p className={styles.text}>
          Good:
          <span className={styles.value}> {good}</span>
        </p>
      </li>
      <li className={styles.item}>
        <p className={styles.text}>
          Neutral:
          <span className={styles.value}> {neutral}</span>
        </p>
      </li>
      <li className={styles.item}>
        <p className={styles.text}>
          Bad:
          <span className={styles.value}> {bad}</span>
        </p>
      </li>
      <li className={styles.item}>
        <p className={styles.text}>
          Total:
          <span className={styles.value}> {total}</span>
        </p>
      </li>
      <li className={styles.item}>
        <p className={styles.text}>
          Positive Feedback:
          <span className={styles.value}> {positivePercentage}%</span>
        </p>
      </li>
    </ul>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.string.isRequired,
  neutral: PropTypes.string.isRequired,
  bad: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
