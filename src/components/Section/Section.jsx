import PropTypes from 'prop-types';
import styles from './section.module.css';

const Section = ({ title }) => {
  return (
    <section>
      <div className={styles.container}>
        <h1>{title}</h1>
      </div>
    </section>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string,
};
