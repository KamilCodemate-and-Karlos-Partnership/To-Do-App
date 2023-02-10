import React, { useEffect, useState } from 'react';
import Task from './Task';
import axios from 'axios';
import '../../assets/styles/HomePage.scss';
import '../../assets/styles/TaskContainer.scss';
import uniqid from 'uniqid';

interface TaskDataStruture {
  id: string;
  title: string;
  description: string | null;
  until: Date;
  important: boolean;
  subtasks: Array<string> | null;
}

const TaskContainer: React.FC<{}> = (): React.ReactElement => {
  // const [taskData, modifyTasks] = useState<null | Array<object>>([]);
  const [taskData, modifyTasks] = useState<null | Array<TaskDataStruture>>([
    {
      id: uniqid(),
      title: 'Clean the room',
      description: 'I have to clean my room',
      until: new Date('February 19, 2023 13:00:00'),
      important: false,
      subtasks: ['dust', 'vacuum the floor', 'clan the table'],
    },
  ]);

  const Tasks = taskData?.map((element) => {
    return <Task taskData={element} />;
  });
  return <div className='task-container'>{Tasks}</div>;
};

export default TaskContainer;
