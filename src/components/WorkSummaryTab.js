import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import styles from '../styles/WorkSummaryTab.module.css';
import typography from '../styles/Type.module.css';
import layout from '../styles/Layout.module.css';

const WorkSummaryTab = ({ title, company, start, end, city, state }) => {
  return (
    <div className={styles.tab}>
      <h3 className={styles.h3}>
        <span className={typography.bold}>
          {title}, {company}
        </span>{' '}
        | {city}, {state} | {start} - {end}
      </h3>
      <div className={styles.icons}>
        <EditIcon fontSize="small" />
        <DeleteIcon fontSize="small" />
      </div>
    </div>
  );
};

export default WorkSummaryTab;
