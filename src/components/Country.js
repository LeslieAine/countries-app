import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from '../styles/Country.module.css';

const Country = ({ name, flagEmoji, continent }) => (
  <Link to={`/country/${name}`} className={styles.link}>
    <li className={styles.country}>
      <h2 className={styles.countryName}>
        {name}
        <br />
        {flagEmoji}
      </h2>
      <p>
        {continent}
      </p>
    </li>
  </Link>
);

Country.propTypes = {
  name: PropTypes.string.isRequired,
  flagEmoji: PropTypes.string.isRequired,
  continent: PropTypes.string.isRequired,
};

export default Country;
