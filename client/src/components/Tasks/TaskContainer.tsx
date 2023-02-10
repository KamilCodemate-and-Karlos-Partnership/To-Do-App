import React, { useEffect, useState } from 'react';
import TaskForm from './TaskForm';
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
    {
      id: uniqid(),
      title: 'Clean the room',
      description: 'I have to clean my room',
      until: new Date('February 19, 2023 13:00:00'),
      important: false,
      subtasks: ['dust', 'vacuum the floor', 'clan the table'],
    },
    {
      id: uniqid(),
      title: 'Clean the room',
      description: 'I have to clean my room',
      until: new Date('February 19, 2023 13:00:00'),
      important: false,
      subtasks: ['dust', 'vacuum the floor', 'clan the table'],
    },
    {
      id: uniqid(),
      title: 'Clean the room',
      description: 'I have to clean my room',
      until: new Date('February 19, 2023 13:00:00'),
      important: false,
      subtasks: ['dust', 'vacuum the floor', 'clan the table'],
    },
    {
      id: uniqid(),
      title: 'Clean the room',
      description: 'I have to clean my room',
      until: new Date('February 19, 2023 13:00:00'),
      important: false,
      subtasks: ['dust', 'vacuum the floor', 'clan the table'],
    },
    {
      id: uniqid(),
      title: 'Clean the room',
      description: 'I have to clean my room',
      until: new Date('February 19, 2023 13:00:00'),
      important: false,
      subtasks: ['dust', 'vacuum the floor', 'clan the table'],
    },
    {
      id: uniqid(),
      title: 'Clean the room',
      description: 'I have to clean my room',
      until: new Date('February 19, 2023 13:00:00'),
      important: false,
      subtasks: ['dust', 'vacuum the floor', 'clan the table'],
    },
    {
      id: uniqid(),
      title: 'Clean the room',
      description: 'I have to clean my room',
      until: new Date('February 19, 2023 13:00:00'),
      important: false,
      subtasks: ['dust', 'vacuum the floor', 'clan the table'],
    },
    {
      id: uniqid(),
      title: 'Clean the room',
      description: 'I have to clean my room',
      until: new Date('February 19, 2023 13:00:00'),
      important: false,
      subtasks: ['dust', 'vacuum the floor', 'clan the table'],
    },
   
  ]);

  const handleAddTask = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    // const title = e.target.title.value;
    // const description = e.target.description.value;
    // const until = new Date(e.target.until.value);
    // const important = e.target.important.checked;
    // const subtasks = e.target.subtasks.value.split(',').map(subtask => subtask.trim());
  
    // modifyTasks(prevTasks => [
    //   ...prevTasks,
    //   {
    //     id: uniqid(),
    //     title,
    //     description,
    //     until,
    //     important,
    //     subtasks,
    //   },
    // ]);
  };
 
  const Tasks = taskData?.map((element) => {
    return <Task taskData={element} />;
  });
  return (
    <div className='task-container'>
      <TaskForm />
      {Tasks}
    </div>
  );
};

export default TaskContainer;
