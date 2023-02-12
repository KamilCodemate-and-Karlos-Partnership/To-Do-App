import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import TaskContainer from '../components/Tasks/TaskContainer';
import axios from 'axios';
import '../assets/styles/HomePage.scss';
import { NavigateFunction, useNavigate } from 'react-router-dom';

enum PanelType {
  hidden,
  normalTask,
  importantTask,
  set,
}

const HomePage: React.FC<{}> = (): React.ReactElement => {
  const navigate: NavigateFunction = useNavigate();
  const authorizationToken = localStorage.getItem('authToken');
  // console.log(authorizationToken);

  // const [click, setClick] = useState<boolean>(false);
  const [formType, setFormType] = useState<PanelType>(PanelType.hidden);

  const handleFormSwitch = (e: EventTarget, typeName: PanelType) => {
    if (formType > 0) {
      setFormType(PanelType.hidden);
    } else setFormType(typeName);
  };

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
      <Sidebar handleChildrenClick={handleFormSwitch} />
      <TaskContainer childrenSwitchType={formType} />
    </div>
  );
};

export default HomePage;
