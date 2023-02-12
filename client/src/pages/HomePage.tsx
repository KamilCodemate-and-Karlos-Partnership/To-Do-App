import React, { useEffect } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import TaskContainer from '../components/Tasks/TaskContainer';
import axios from 'axios';
import '../assets/styles/HomePage.scss';
import { NavigateFunction, useNavigate } from 'react-router-dom';
const HomePage: React.FC<{}> = (): React.ReactElement => {
  const navigate: NavigateFunction = useNavigate();
  const authorizationToken = localStorage.getItem('authToken');
  // console.log(authorizationToken);
  useEffect(() => {
    const autoGetRequest = async () => {
      try {
        const axiosInstance = axios.create({
          headers: {
            authorization: `Bearer ${authorizationToken}`,
          },
        });
        const response = await axiosInstance.get('/api/homeRequests');

        if (!response.data.success) {
          navigate('/login');
        }
      } catch (err) {
        navigate('/login');
      }
    };

    autoGetRequest();
  }, []);

  return (
    <div className='HomePage'>
      <Sidebar />
      <TaskContainer />
    </div>
  );
};

export default HomePage;
