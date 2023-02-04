import React, { useState } from 'react';
import FormHeader from '../components/Forms/FormHeader';
import FormContainer from '../components/Forms/FormContainer';
import '../assets/styles/SignUpForm.scss';
import axios from 'axios';
const SignUpForm: React.FC<{}> = (): React.ReactElement => {
  const [inputValues, setInputValues] = useState({
    fullName: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
    e.preventDefault();
    console.log('Change');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    console.log('Handle Submit');

    const response = axios.post('/api/users', inputValues);
    console.log(response);
  };

  return (
    <div className='SignUpForm'>
      <FormContainer handleChange={handleChange} handleSubmit={handleSubmit}>
        <FormHeader title='Sign Up' />
      </FormContainer>
    </div>
  );
};

export default SignUpForm;
