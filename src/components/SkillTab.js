import DeleteIcon from '@mui/icons-material/Delete';
import { Rating, IconButton } from '@mui/material';
import React, { useState } from 'react';

import styles from '../styles/SkillTab.module.css';

const SkillTab = ({ text, rating, id, deleteSkill, handleChange }) => {
  const [value, setValue] = useState(rating);
  return (
    <div className={styles.tab}>
      <div className={styles.group}>
        <h4 className={styles.h4}>{text}</h4>
        <Rating
          sx={{ color: '#3983fa' }}
          className={styles.rating}
          value={value}
          onChange={(e, newValue) => {
            setValue(newValue);
            handleChange(newValue, id);
          }}
        />
      </div>
      <IconButton onClick={() => deleteSkill(id)} sx={{ ml: 1 }}>
        <DeleteIcon fontSize="small" />
      </IconButton>
    </div>
  );
};

export default SkillTab;
