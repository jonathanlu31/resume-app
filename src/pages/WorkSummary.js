import React from 'react';
import WorkSummaryTab from '../components/WorkSummaryTab';
import Button from '../components/Button';

const WorkSummary = ({ addWork, workHistory }) => {
  return (
    <div>
      {workHistory.map((job) => (
        <WorkSummaryTab {...job} />
      ))}
      <Button text="Add Another Position" color="blue_outline" />
    </div>
  );
};

export default WorkSummary;
