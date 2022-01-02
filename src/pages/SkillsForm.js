import React, { useState } from 'react';
import FormField from '../components/FormField';
import Button from '../components/Button';
import SkillTab from '../components/SkillTab';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const SkillsForm = ({ skills, handleChange, addSkill, deleteSkill }) => {
  const [text, setText] = useState('');

  const skillUpdate = (newRating, id) => {
    let skillToUpdate = skills.find((skill) => skill.id === id);
    let updated = { ...skillToUpdate, rating: newRating };
    const newSkills = [...skills.filter((skill) => skill.id !== id), updated];
    handleChange('skills', newSkills);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div>
        <FormField label="Add relevant skills" placeholder="Ex: JavaScript" type="text" handleChange={(_, val) => setText(val)} value={text} name="null" />
        <Button
          icon={<AddCircleIcon fontSize="small" sx={{ mr: 1 }} />}
          onClick={() => {
            addSkill(text);
            setText('');
          }}
          text="Add Skill"
          color="blue_outline_md"
        />
      </div>
      <div>{skills.map((skill) => skill.text && <SkillTab {...skill} deleteSkill={deleteSkill} handleChange={skillUpdate} key={skill.id} />)}</div>
    </form>
  );
};

export default SkillsForm;
