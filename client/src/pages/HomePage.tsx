import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import '../assets/styles/HomePage.scss';

const HomePage: React.FC<{}> = (): React.ReactElement => {
  return (
    <div className='HomePage'>
        <Sidebar />
    </div>
  )
}

export default HomePage;