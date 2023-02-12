import React from 'react';
import '../../assets/styles/Sidebar.scss';
import logo from '../../assets/img/logo.svg';
import { FcMenu, FcInspection, FcOpenedFolder, FcHighPriority, FcSettings, FcCheckmark, FcCancel } from 'react-icons/fc';
import AddTask from '../Tasks/AddTask';

enum PanelType {
  hidden,
  normalTask,
  importantTask,
  set,
}

interface SidebarProps {
  handleChildrenClick: Function;
}

const Sidebar: React.FC<SidebarProps> = ({ handleChildrenClick }): React.ReactElement => {
  return (
    <div className='Sidebar'>
      <div className='sidebar-logo'>
        <img src={logo} alt='todoapp logo' />
        <p>ToDo-App</p>
      </div>
      <div className='sidebar-content'>
        <div className='sidebar-content-links'>
          <div className='sc-link'>
            <div className='sc-link-main'>
              <FcInspection />
              <span className='sc-name'>All tasks</span>
            </div>
            <AddTask handleClick={handleChildrenClick} typeName={PanelType.normalTask} />
          </div>
          <div className='sc-link'>
            <div className='sc-link-main'>
              <FcHighPriority />
              <span className='sc-name'>Important tasks</span>
            </div>
            <AddTask handleClick={handleChildrenClick} typeName={PanelType.importantTask} />
          </div>
          <div className='sc-link'>
            <div className='sc-link-main'>
              <FcOpenedFolder />
              <span className='sc-name'>Sets</span>
            </div>
            <AddTask handleClick={handleChildrenClick} typeName={PanelType.set} />
          </div>
        </div>
        <div className='sidebar-content-footer'>
          <p className='sc-link' id='sc-link-settings'>
            <FcSettings />
            <span className='sc-name'>Settings</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
