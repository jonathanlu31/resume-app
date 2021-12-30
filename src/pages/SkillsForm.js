import React from 'react';
import FormField from '../components/FormField';
import Button from '../components/Button';

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
