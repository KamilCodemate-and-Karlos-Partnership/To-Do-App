import React from 'react';
import { FcPlus } from 'react-icons/fc';
enum PanelType {
  hidden,
  normalTask,
  importantTask,
  set,
}
interface AddTaskProps {
  handleClick: React.MouseEventHandler;
  name: PanelType;
}

const AddTask: React.FC<AddTaskProps> = ({ handleClick, name }): React.ReactElement => {
  return (
    <div className='sc-add-task'>
      <FcPlus onClick={handleClick} name={`${name}`} />
    </div>
  );
};

export default AddTask;
