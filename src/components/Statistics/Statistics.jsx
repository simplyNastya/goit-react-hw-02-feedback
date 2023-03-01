// import PropTypes from 'prop-types';
import styles from './statistics.module.css';

const Statistics = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <p className={styles.text}>
          Good
          <span className={styles.value}>3</span>
        </p>
      </li>
      <li className={styles.item}>
        <p className={styles.text}>
          Neutral
          <span className={styles.value}>2</span>
        </p>
      </li>
      <li className={styles.item}>
        <p className={styles.text}>
          Bad
          <span className={styles.value}>2</span>
        </p>
      </li>
    </ul>
  );
};

export default Statistics;
