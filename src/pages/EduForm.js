import React, { useState } from 'react';
import FormField from '../components/FormField';
import FormCheckbox from '../components/FormCheckbox';
import FormSelect from '../components/FormSelect';
import { dateSort } from '../utilities';

import layout from '../styles/Layout.module.css';

const degreeOptions = ['High School Diploma', 'Bachelor of Arts', 'Bachelor of Science', 'Master of Arts', 'Master of Science', 'MBA', 'J.D.', 'M.D.', 'Ph.D.', 'No Degree'];

const EduForm = ({ eduList, handleChange, curr_id }) => {
  const currEdu = eduList.find((edu) => edu.id === curr_id);

  const eduUpdate = (name, data) => {
    let jobToUpdate = { ...currEdu, [name]: data };
    const eduList_new = [...eduList.filter((job) => job.id !== curr_id), jobToUpdate];
    eduList_new.sort(dateSort);
    handleChange('edu', eduList_new);
  };

  const [noEndDate, setNoEnd] = useState(currEdu.end === 'Present');

  return (
    <form>
      <div className={layout.couple}>
        <FormField handleChange={eduUpdate} type="text" placeholder="e.g. UC Berkeley" label="School Name" name="uni" value={currEdu.uni} />
        <FormField handleChange={eduUpdate} type="text" placeholder="e.g. Berkeley" label="School Location" name="location" value={currEdu.location} />
      </div>
      <FormSelect options={degreeOptions} handleChange={eduUpdate} label="Degree" name="degree" value={currEdu.degree} />
      <div className={`${layout.triple} ${layout.p_relative}`}>
        <FormField handleChange={eduUpdate} type="text" placeholder="e.g. Accountant" label="Field of Study" name="major" value={currEdu.major} />
        <FormField handleChange={eduUpdate} type="month" placeholder="" label="Graduation Start Date" name="start" value={currEdu.start} />
        <FormField handleChange={eduUpdate} type="month" placeholder="" label="Graduation End Date" name="end" value={currEdu.end} />
        <FormCheckbox
          onChange={() => {
            if (!noEndDate) {
              eduUpdate('end', 'Present');
            } else {
              eduUpdate('end', '');
            }
            setNoEnd(!noEndDate);
          }}
          value={noEndDate}
          label="I currently attend here"
        />
      </div>
    </form>
  );
};

export default EduForm;
