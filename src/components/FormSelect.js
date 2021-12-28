import React from 'react';

import styling from '../styles/FormField.module.css';
import typography from '../styles/Type.module.css';

const FormSelect = ({ label }) => {
  return (
    <div className={styling.fieldGroup}>
      <label className={typography.labelType}>{label}</label>
      <select className={styling.inputField}>
        <option value="High School Diploma">High School Diploma</option>
        <option value="Bachelors">Bachelors</option>
      </select>
    </div>
  );
};

export default FormSelect;
