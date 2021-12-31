import React from 'react';
import WorkSummaryTab from '../components/WorkSummaryTab';
import Button from '../components/Button';

const WorkSummary = ({ addWork, workHistory, switchWork, deleteWork }) => {
  return (
    <div>
      {workHistory.map((job) => (
        <WorkSummaryTab {...job} switchWork={switchWork} deleteWork={deleteWork} />
      ))}
      <Button addWork={addWork} text="Add Another Position" color="blue_outline" />
    </div>
  );
};

export default WorkSummary;
