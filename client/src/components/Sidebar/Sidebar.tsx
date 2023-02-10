import React from 'react'
import '../../assets/styles/Sidebar.scss';
import logo from '../../assets/img/logo.svg';
import { FcMenu, FcInspection, FcOpenedFolder, FcHighPriority, FcSettings, FcCheckmark, FcCancel } from 'react-icons/fc';
import AddTask from '../Tasks/AddTask';

const Sidebar: React.FC<{}> = (): React.ReactElement => {
  return (
    <div className='Sidebar'>
        <div className="sidebar-logo">
            <img src={logo} alt="todoapp logo" />
            <p>ToDo-App</p>
        </div>
        <div className="sidebar-content">
            <div className="sidebar-content-links">
                <a className='sc-link' href="/home">
                    <div className="sc-link-main">
                        <FcInspection />
                        <span className='sc-name'>All tasks</span>
                    </div>
                    <AddTask />
                </a>
                <a className='sc-link' href="/home">
                    <div className="sc-link-main">
                        <FcHighPriority />
                        <span className='sc-name'>Important tasks</span>
                    </div>
                    <AddTask />
                </a>
                <a className='sc-link' href="/home">
                    <div className="sc-link-main">
                        <FcOpenedFolder />
                        <span className='sc-name'>Sets</span>
                    </div>
                    <AddTask />
                </a>
            </div>
            <div className="sidebar-content-footer">
                <a className='sc-link' id='sc-link-settings' href="/home">
                    <FcSettings />
                    <span className='sc-name'>Settings</span>
                </a>
            </div>
        </div>
    </div>
  )
}


export default Sidebar