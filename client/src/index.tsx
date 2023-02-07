import React from 'react';
import ReactDOM from 'react-dom/client';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.scss';

import HomePage from './pages/HomePage';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <div className='app-container'>
      <Routes>
        <Route path="/login" element={<SignInForm />} />
        <Route path="/register" element={<SignUpForm />} />
      </Routes>
      <HomePage />
    </div>
  </BrowserRouter>
);
