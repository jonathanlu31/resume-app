import React from 'react';
import NavButton from '../components/NavButton';
import Typography from '../styles/Type.module.css';

const Start = () => {
  return (
    <div>
      <h2 style={{ marginBottom: '3rem' }} className={Typography.headerTitle}>
        Let's build an awesome resume!
      </h2>
      <NavButton color="red" fill="block" link="/ctnt/" text="Start" />
    </div>
  );
};

export default Start;
