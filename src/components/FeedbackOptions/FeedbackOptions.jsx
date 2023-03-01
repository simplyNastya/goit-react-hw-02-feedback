// import PropTypes from 'prop-types';
import styles from './feedbackOptions.module.css';

const FeedbackOptions = ({ leaveVote }) => {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <button
          onClick={() => leaveVote('good')}
          type="button"
          className={styles.btn}
        >
          Good
        </button>
      </li>
      <li className={styles.item}>
        <button
          onClick={() => leaveVote('neutral')}
          type="button"
          className={styles.btn}
        >
          Neutral
        </button>
      </li>
      <li className={styles.item}>
        <button
          onClick={() => leaveVote('bad')}
          type="button"
          className={styles.btn}
        >
          Bad
        </button>
      </li>
    </ul>
  );
};

export default FeedbackOptions;
