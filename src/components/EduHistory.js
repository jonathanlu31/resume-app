import React from 'react';
import styles from '../styles/History.module.css';

const EduHistory = ({ degree, uni, major, location, start, end }) => {
  return (
    <div className={styles.group}>
      <p className={styles.date}>
        {start} - {end}
      </p>
      <div>
        <h4>{uni}</h4>
        <p className={styles.details}>
          {degree}: {major}
        </p>
      </div>
    </div>
  );
};

export default EduHistory;
