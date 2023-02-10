import React from 'react';
import { FcPlus } from 'react-icons/fc';

const AddTask: React.FC<{}> = (): React.ReactElement => {
  return (
    <div className='sc-add-task'>
        <FcPlus />
    </div>
  )
}

export default AddTask;