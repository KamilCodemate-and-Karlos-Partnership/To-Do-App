import React from 'react'
import '../../assets/styles/Sidebar.scss';
import logo from '../../assets/img/logo.svg';
import { FcCalendar, FcList, FcMenu, FcHighPriority, FcSettings, FcPlanner } from 'react-icons/fc';

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
                    <FcPlanner />
                    <span className='sc-name'>My day</span>
                </a>
                <a className='sc-link' href="/home">
                    <FcCalendar />
                    <span className='sc-name'>Calendar</span>
                </a>
                <a className='sc-link' href="/home">
                    <FcList />
                    <span className='sc-name'>All my tasks</span>
                </a>
                <a className='sc-link' href="/home">
                    <FcHighPriority />
                    <span className='sc-name'>Important tasks</span>
                </a>
            </div>
            <div className="sidebar-content-footer">
                <a className='sc-link' href="/home">
                    <FcSettings />
                    <span className='sc-name'>Settings</span>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Sidebar