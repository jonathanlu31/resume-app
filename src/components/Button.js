import React from 'react';
import styles from '../styles/Button.module.css';

const Button = ({ text, color }) => {
  return <button className={styles[color]}>{text}</button>;
};

export default Button;
