import React from 'react';
import FormField from './FormField';
import FormCheckbox from './FormCheckbox';
import FormSelect from './FormSelect';

import layout from '../styles/Layout.module.css';

const EduForm = () => {
  return (
    <form>
      <div className={layout.couple}>
        <FormField type="text" placeholder="e.g. UC Berkeley" label="School Name" />
        <FormField type="text" placeholder="e.g. Berkeley" label="School Location" />
      </div>
      <FormSelect label="Degree" />
      <div className={`${layout.triple} ${layout.p_relative}`}>
        <FormField type="text" placeholder="e.g. Accountant" label="Field of Study" />
        <FormField type="date" placeholder="" label="Graduation Start Date" />
        <FormField type="date" placeholder="" label="Graduation End Date" />
        <FormCheckbox label="I currently attend here" />
      </div>
    </form>
  );
};

export default EduForm;
