import React from 'react';
import { Link } from 'react-router-dom';

const NavButton = (props) => {
  return (
    <Link className={props.styling} to={props.link}>
      {props.text}
    </Link>
  );
};

export default NavButton;