import React, { useState } from 'react';
import FormField from '../components/FormField';
import FormCheckbox from '../components/FormCheckbox';

import layout from '../styles/Layout.module.css';

const WorkForm = ({ workList, handleChange, curr_id }) => {
  const curr_job = workList.find((job) => job.id === curr_id);

  const workUpdate = (name, data) => {
    let jobToUpdate = { ...curr_job, [name]: data };
    const workList_new = [...workList.filter((job) => job.id !== curr_id), jobToUpdate];
    handleChange('work', workList_new);
  };

  const [noEndDate, setNoEnd] = useState(curr_job.end === 'Present');

  return (
    <form>
      <div className={layout.couple}>
        <FormField handleChange={workUpdate} name="title" type="text" placeholder="e.g. Customer Service Representative" label="Job Title" value={curr_job.title} />
        <FormField handleChange={workUpdate} name="company" type="text" placeholder="e.g. Amazon" label="Employer" value={curr_job.company} />
      </div>
      <div className={layout.couple}>
        <FormField handleChange={workUpdate} name="city" type="text" placeholder="e.g. San Francisco" label="City" value={curr_job.city} />
        <FormField handleChange={workUpdate} name="state" type="text" placeholder="e.g. CA" label="State" value={curr_job.state} />
      </div>
      <div className={`${layout.couple} ${layout.p_relative}`}>
        <FormField handleChange={workUpdate} name="start" type="month" placeholder="Select" label="Start Date" value={curr_job.start} />
        <FormField handleChange={workUpdate} name="end" type="month" value={curr_job.end} placeholder="Select" label="End Date" />
        <FormCheckbox
          onChange={() => {
            if (!noEndDate) {
              workUpdate('end', 'Present');
            } else {
              workUpdate('end', '');
            }
            setNoEnd(!noEndDate);
          }}
          value={noEndDate}
          label="I currently work here"
        />
      </div>
    </form>
  );
};

export default WorkForm;
