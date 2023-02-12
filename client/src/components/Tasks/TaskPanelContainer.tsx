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
    case 2:
      return <TaskForm />;
    case 3:
      return <TaskForm />
    default:
      return null;
  }
};

interface AddTaskPanelProps {
  childrenSwitch: boolean;
  childrenSwitchType: PanelType;
}

const AddTaskPanel: React.FC<AddTaskPanelProps> = ({ childrenSwitch, childrenSwitchType }): React.ReactElement | null => {
  const [actualPanel, switchPanel] = useState<PanelType>(PanelType.hidden);

  if (childrenSwitch) {
    if (childrenSwitchType === PanelType.normalTask) switchPanel(PanelType.normalTask);
    else if (childrenSwitchType === PanelType.importantTask) switchPanel(PanelType.importantTask);
    else if (childrenSwitchType === PanelType.set) switchPanel(PanelType.set);
    else switchPanel(PanelType.hidden);
  } else {};

  return choosePicker(actualPanel);
};

export default AddTaskPanel;
