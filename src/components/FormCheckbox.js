import React from 'react';
import typography from '../styles/Type.module.css';
import styles from '../styles/FormCheckbox.module.css';

const FormCheckbox = ({ label }) => {
  return (
    <div className={styles.checkboxGroup}>
      <input type="checkbox" value="false" />
      <label className={`${typography.textSmall} ${typography.textGray}`}>{label}</label>
    </div>
  );
};

export default FormCheckbox;
