import React, { useState } from 'react';
import typography from '../styles/Type.module.css';
import styles from '../styles/FormField.module.css';

const FormField = ({ label, type, placeholder, handleChange, name, value: init_value }) => {
  const [value, setValue] = useState(init_value);
  const onInputChange = (e) => {
    setValue(e.target.value);
    handleChange(name, e.target.value);
  };
  return (
    <div className={styles.fieldGroup}>
      <label className={typography.labelType}>{label}</label>
      <input onChange={onInputChange} className={styles.inputField} name={name} type={type} placeholder={placeholder} value={value} />
    </div>
  );
};

export default FormField;
