import React from 'react'
import '../../assets/styles/Sidebar.scss';
import logo from '../../assets/img/logo.svg';

const Sidebar: React.FC<{}> = (): React.ReactElement => {
  return (
    <div className='Sidebar'>
        <div className="sidebar-logo">
            <img src={logo} alt="todoapp logo" />
            <p>ToDo-App</p>
        </div>
        <div className="sidebar-content">
            <a className='sc-link' href="/">
                <span className='sc-name'>Dashboard</span>
            </a>
            <a className='sc-link' href="/">
                <span className='sc-name'>Dashboard</span>
            </a>
            <a className='sc-link' href="/">
                <span className='sc-name'>Dashboard</span>
            </a>
            <a className='sc-link' href="/">
                <span className='sc-name'>Dashboard</span>
            </a>
            <a className='sc-link' href="/">
                <span className='sc-name'>Settings</span>
            </a>
        </div>
    </div>
  )
}

export default Sidebar