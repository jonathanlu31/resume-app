import React from 'react';
import typography from '../styles/Type.module.css';
import layout from '../styles/Layout.module.css';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const Header = (props) => {
  return (
    <div className={layout.header}>
      <div className={layout.mb_med}>
        <h2 className={typography.headerTitle}>{props.title}</h2>
        <p className={typography.headerContent}>{props.content}</p>
      </div>
      <div className={layout.preview} onClick={props.previewClick}>
        <RemoveRedEyeIcon sx={{ color: '#3983fa' }} fontSize="small" />
        <p className={typography.previewText}>Preview</p>
      </div>
    </div>
  );
};

export default Header;
