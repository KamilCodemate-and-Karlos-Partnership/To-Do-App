import React, { useState } from 'react';
import '../../assets/styles/TaskForm.scss';

interface Subtask {
  value: string;
}

interface SubtasksArray extends Array<Subtask> {}

const TaskForm: React.FC<{}> = (): React.ReactElement => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [deadline, setDeadline] = useState<string>('');
  const [subtasks, setSubtasks] = useState<SubtasksArray>([]);
  const [newSubtask, setNewSubtask] = useState<string>('');

  const handleAddSubtask = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && newSubtask.length >= 1) {
      setSubtasks([...subtasks, { value: newSubtask }]);
      setNewSubtask('');
    }
  };

  return (
    <div className='TaskForm'>
      <form method='post' onSubmit={(e) => e.preventDefault()}>
        <h2>Add new task</h2>
        <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='title...' />
        <input type='text' value={description} onChange={(e) => setDescription(e.target.value)} placeholder='description...' />
        <input type='text' value={deadline} onChange={(e) => setDeadline(e.target.value)} placeholder='deadline...' />
        <input
          type='text'
          value={newSubtask}
          placeholder='add subtask...'
          onChange={(e) => setNewSubtask(e.target.value)}
          onKeyDown={handleAddSubtask}
        />
        <div className='subtasks-container'>
          {subtasks.map((subtask) => (
            <span>&gt; {subtask.value}</span>
          ))}
        </div>
        <div className='taskForm-buttons-container'>
          <input type='reset' value='Reset' />
          <input type='submit' value='Add' />
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
