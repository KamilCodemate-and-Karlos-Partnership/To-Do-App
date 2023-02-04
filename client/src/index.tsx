import React from 'react';
import ReactDOM from 'react-dom/client';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <div className='app-container'>
    {/* <SignInForm /> */}
    <SignUpForm />
  </div>
);
