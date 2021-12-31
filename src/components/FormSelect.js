import React, { useState } from 'react';

import styling from '../styles/FormField.module.css';
import typography from '../styles/Type.module.css';

const FormSelect = ({ label, options, name, value, handleChange }) => {
  const [stateVal, setValue] = useState(value);
  return (
    <div className={styling.fieldGroup}>
      <label className={typography.labelType}>{label}</label>
      <select
        onChange={(e) => {
          setValue(e.target.value);
          handleChange(name, e.target.value);
        }}
        value={stateVal}
        className={styling.inputField}
        style={{ color: value === 'null' && '#868686' }}
      >
        <option disabled style={{ display: 'none' }} value="null">
          Select
        </option>
        {options.map((op) => (
          <option key={op} value={op}>
            {op}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormSelect;
