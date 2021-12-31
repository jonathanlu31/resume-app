import React from 'react';
import Button from '../components/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useNavigate } from 'react-router-dom';

const SummaryPage = ({ addItem, itemHistory, switchItem, deleteItem, to, displayText, Component }) => {
  const navigate = useNavigate();
  return (
    <div>
      {itemHistory.map((item) => (item.title || item.uni) && <Component key={item.id} {...item} switchItem={switchItem} deleteItem={deleteItem} />)}
      <Button
        icon={<AddCircleIcon fontSize="small" sx={{ mr: 1 }} />}
        onClick={() => {
          const new_id = addItem();
          switchItem(new_id);
          navigate(to);
        }}
        text={displayText}
        color="blue_outline"
      />
    </div>
  );
};

export default SummaryPage;
