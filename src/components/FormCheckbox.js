import React from 'react';
import typography from '../styles/Type.module.css';
import styles from '../styles/FormCheckbox.module.css';

const FormCheckbox = ({ label, onChange, value }) => {
  return (
    <div className={styles.checkboxGroup}>
      <input onChange={onChange} type="checkbox" checked={value} />
      <label className={`${typography.textSmall} ${typography.textGray}`}>{label}</label>
    </div>
  );
};

export default FormCheckbox;
