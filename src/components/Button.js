import React from 'react';
import styles from '../styles/Button.module.css';

const Button = ({ text, color, icon, onClick }) => {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[color]}`}>
      {icon}
      {text}
    </button>
  );
};

export default Button;
