import React from 'react';
import FormField from './FormField';
import Button from './Button';

const SkillsForm = () => {
  return (
    <form>
      <div>
        <FormField label="Add relevant skills" placeholder="Ex: JavaScript" type="text" />
        <Button text="Add" color="blue" />
      </div>
    </form>
  );
};

export default SkillsForm;
