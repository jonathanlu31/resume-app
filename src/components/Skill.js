import React from 'react';

const Skill = ({ text, rating }) => {
  return (
    <div>
      <p>
        {text} {rating}
      </p>
    </div>
  );
};

export default Skill;
