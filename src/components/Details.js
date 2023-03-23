import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCountries } from '../redux/countries/countriesSlice';
import styles from '../styles/Details.module.css';

const Details = () => {
  const { countryId } = useParams();
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);

  useEffect(() => {
    if (countries.length === 0) {
      dispatch(fetchCountries());
    }
  }, [countries, dispatch]);

  const country = countries.find((c) => c.name === countryId);

  return (
    <>
      {country && (
      <div className={styles.Details}>
        <div className={styles.flagContainer}>
          <img src={country.flagSvg} alt={country.flagAlt} className={styles.flag} />
          <h1 className={styles.name}>{country.name}</h1>
        </div>
        <ul className={styles.details}>
          <li className={styles.detail}>
            <span className={styles.detailName}>Capital:</span>
            {' '}
            <span className={styles.detailValue}>{country.capital}</span>
          </li>
          <li className={styles.detail}>
            <span className={styles.detailName}>Subregion:</span>
            {' '}
            <span className={styles.detailValue}>{country.subregion}</span>
          </li>
          <li className={styles.detail}>
            <span className={styles.detailName}>Population:</span>
            {' '}
            <span className={styles.detailValue}>{country.population.toLocaleString()}</span>
          </li>
          <li className={styles.detail}>
            <span className={styles.detailName}>Area:</span>
            {' '}
            <span className={styles.detailValue}>
              {country.area}
              {' '}
              km²
            </span>
          </li>
          <li className={styles.detail}>
            <span className={styles.detailName}>Timezones:</span>
            {' '}
            <span className={styles.detailValue}>
              {country.timezones.map((timezone) => (
                <span key={timezone} className={styles.timezone}>{timezone}</span>
              ))}
            </span>
          </li>
          <li className={styles.detail}>
            <span className={styles.detailName}>Maps:</span>
            {' '}
            <span className={styles.detailValue}>{country.maps}</span>
          </li>
        </ul>
      </div>
      )}
    </>
  );
};

export default Details;
