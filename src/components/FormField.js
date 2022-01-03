import React, { useState } from 'react';
import typography from '../styles/Type.module.css';
import styles from '../styles/FormField.module.css';

const FormField = ({ label, type, placeholder, handleChange, name, value: init_value }) => {
  const [value, setValue] = useState(init_value);
  const onInputChange = (e) => {
    setValue(e.target.value);
    handleChange(name, e.target.value);
  };
  const disabled = type === 'month' && init_value === 'Present';
  return (
    <div className={styles.fieldGroup}>
      <label className={typography.labelType}>{label}</label>
      <input disabled={disabled} onChange={onInputChange} className={styles.inputField} name={name} type={type} placeholder={placeholder} value={value} />
    </div>
  );
};

export default FormField;
