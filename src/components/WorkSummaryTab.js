import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import styles from '../styles/WorkSummaryTab.module.css';
import typography from '../styles/Type.module.css';
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';

const WorkSummaryTab = ({ title, company, start, end, city, state, id, switchWork, deleteWork }) => {
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
        <IconButton>
          <EditIcon
            className={styles.icons}
            onClick={() => {
              switchWork(id);
              navigate('/work');
            }}
            fontSize="small"
          />
        </IconButton>
        <IconButton sx={{ ml: 2 }}>
          <DeleteIcon onClick={() => deleteWork(id)} className={styles.icons} fontSize="small" />
        </IconButton>
      </div>
    </div>
  );
};

export default WorkSummaryTab;
