import React from 'react';
import { Link } from 'react-router-dom';
import btn from '../styles/NavButton.module.css';

const NavButton = ({ color, fill, link, text }) => {
  return (
    <Link className={`${btn[`${color}_${fill}`]} ${btn.btnBlock}`} to={link}>
      {text}
    </Link>
  );
};

export default NavButton;
