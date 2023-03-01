// import PropTypes from 'prop-types';
import styles from './notification.module.css';

Notification = ({ message }) => {
  return <h2 className={styles.text}>{message}</h2>;
};

export default Notification;

// Notification.propTypes = {
//   message: PropTypes.string.isRequired,
// };
