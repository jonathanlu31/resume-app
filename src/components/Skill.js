import React from 'react';

const Skill = ({ text, rating }) => {
  const outerBar = {
    width: '100%',
    height: '.6em',
    backgroundColor: '#02315C',
    marginBottom: '2em',
  };

  const innerBar = {
    width: `${20 * rating}%`,
    height: 'inherit',
    backgroundColor: 'white',
  };
  return (
    <div>
      <p
        style={{
          margin: '1em 0 .3em 0',
        }}
      >
        {text}
      </p>
      <div style={outerBar}>
        <div style={innerBar}></div>
      </div>
    </div>
  );
};

export default Skill;
