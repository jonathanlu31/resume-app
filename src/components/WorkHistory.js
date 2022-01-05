import React from 'react';
import styles from '../styles/History.module.css';

const WorkHistory = ({ title, company, city, state, start, end }) => {
  return (
    <div className={styles.group}>
      <p className={styles.date}>
        {start} - {end}
      </p>
      <div>
        <h4>{title}</h4>
        <p className={styles.details}>
          {company}, {city}, {state}
        </p>
      </div>
    </div>
  );
};

export default WorkHistory;
