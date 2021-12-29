import React from 'react';
import styles from '../styles/EduHistory.module.css';

const EduHistory = ({ degree, uni, major }) => {
  return (
    <div className={styles.group}>
      <h4>{uni}</h4>
      <p className={styles.details}>
        {degree}: {major}
      </p>
    </div>
  );
};

export default EduHistory;
