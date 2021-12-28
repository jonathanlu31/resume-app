import React from 'react';
import FormField from './FormField';
import FormCheckbox from './FormCheckbox';

import layout from '../styles/Layout.module.css';

const WorkForm = () => {
  return (
    <form>
      <div className={layout.couple}>
        <FormField type="text" placeholder="e.g. Customer Service Representative" label="Job Title" />
        <FormField type="text" placeholder="e.g. Amazon" label="Employer" />
      </div>
      <div className={layout.couple}>
        <FormField type="text" placeholder="e.g. San Francisco" label="City" />
        <FormField type="text" placeholder="e.g. CA" label="State" />
      </div>
      <div className={`${layout.couple} ${layout.p_relative}`}>
        <FormField type="date" placeholder="Select" label="Start Date" />
        <FormField type="date" placeholder="Select" label="End Date" />
        <FormCheckbox label="I currently work here" />
      </div>
    </form>
  );
};

export default WorkForm;
