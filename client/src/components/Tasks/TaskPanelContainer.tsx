import React, { useEffect, useState } from 'react';
import TaskForm from './TaskForm';

import '../../assets/styles/HomePage.scss';
import '../../assets/styles/TaskContainer.scss';

interface TaskDataStruture {
  id: string;
  title: string;
  description: string | null;
  until: Date;
  important: boolean;
  subtasks: Array<string> | null;
}

enum PanelType {
  hidden,
  normalTask,
  importantTask,
  set,
}
const choosePicker = (panelType: PanelType): React.ReactElement | null => {
  switch (panelType) {
    case 0:
      return null;
    case 1:
      return <TaskForm />;
    /// Ramaining forms
    default:
      return null;
  }
};
const AddTaskPanel: React.FC<{}> = (): React.ReactElement | null => {
  const [actualPanel, switchPanel] = useState<PanelType>(PanelType.hidden);

  return choosePicker(actualPanel);
};

export default AddTaskPanel;
