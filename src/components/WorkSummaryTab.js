import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import styles from '../styles/SummaryTab.module.css';
import typography from '../styles/Type.module.css';
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';

const WorkSummaryTab = ({ title, company, start, end, city, state, id, switchItem, deleteItem }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.tab}>
      <h3 className={styles.h3}>
        <span className={typography.bold}>
          {title}, {company}
        </span>{' '}
        | {city}, {state} | {start} - {end}
      </h3>
      <div>
        <IconButton
          onClick={() => {
            switchItem(id);
            navigate('/work');
          }}
        >
          <EditIcon className={styles.icons} fontSize="small" />
        </IconButton>
        <IconButton onClick={() => deleteItem(id)} sx={{ ml: 2 }}>
          <DeleteIcon className={styles.icons} fontSize="small" />
        </IconButton>
      </div>
    </div>
  );
};

export default WorkSummaryTab;
