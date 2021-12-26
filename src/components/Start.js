import React from 'react';
import NavButton from './NavButton';

const Start = () => {
  return (
    <div>
      <h2>Let's build an awesome resume!</h2>
      <NavButton to="/ctnt" styling="btn btn-block blue" text="Start" />
    </div>
  );
};

export default Start;
