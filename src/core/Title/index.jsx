import PropTypes from 'prop-types';

import styles from './styles.module.css';

function Title({ children }) {
  return <h1 className={styles.title}>{children}</h1>;
}

Title.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default Title;
