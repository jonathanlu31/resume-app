import React from 'react';
import typography from '../styles/Type.module.css';
import layout from '../styles/Layout.module.css';

const Header = (props) => {
  return (
    <div className={layout.mb_med}>
      <h2 className={typography.headerTitle}>{props.title}</h2>
      <p className={typography.headerContent}>{props.content}</p>
    </div>
  );
};

export default Header;
