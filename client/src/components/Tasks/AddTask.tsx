import React from 'react';
import { FcPlus } from 'react-icons/fc';

enum PanelType {
  hidden,
  normalTask,
  importantTask,
  set,
}

interface AddTaskProps {
  handleClick: Function;
  typeName: PanelType;
}

const AddTask: React.FC<AddTaskProps> = ({ handleClick, typeName }): React.ReactElement => {
  return (
    <div className='sc-add-task'>
      <FcPlus onClick={e => handleClick(e, typeName)} />
    </div>
  );
};

export default AddTask;
