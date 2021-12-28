import React from 'react';
import typography from '../styles/Type.module.css';
import styles from '../styles/FormField.module.css';

const FormField = ({ label, type, placeholder }) => {
  return (
    <div className={styles.fieldGroup}>
      <label className={typography.labelType}>{label}</label>
      <input className={styles.inputField} type={type} placeholder={placeholder} />
    </div>
  );
};

export default FormField;
