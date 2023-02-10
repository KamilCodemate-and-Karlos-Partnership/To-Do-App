import React from 'react';
import '../../assets/styles/HomePage.scss';

interface TaskDataStructure {
  taskData: {
    id: string;
    title: string;
    description: string | null;
    until: Date;
    important: boolean;
    subtasks: Array<string> | null;
  };
}

const Task: React.FC<TaskDataStructure> = ({ taskData }): React.ReactElement => {
  const formattedDate = taskData.until.toLocaleString('pl-PL', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });
  return (
    <div className='task'>
      <div className='menu'>
        <div className='task-context'></div>
        <div className='task-important'></div>
      </div>
      <div className='main-content'>
        <div className='task-title'>{taskData.title}</div>
        <div className='task-description'>{taskData.description}</div>
        <div className='task-until'>{formattedDate}</div>
      </div>
    </div>
  );
};

export default Task;
