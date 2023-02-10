import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FormHeader from '../components/Forms/FormHeader';
import FormContainer from '../components/Forms/FormContainer';
import FormContent from '../components/Forms/FormContent';
import FormSidebar from '../components/Forms/FormSidebar';
import signinimage from '../assets/img/signinimage.jpg';
import { Link, useNavigate } from 'react-router-dom';

import '../assets/styles/SignUpForm.scss';

const SignInForm: React.FC<{}> = (): React.ReactElement => {
  const navigate = useNavigate();
  const [inputValues, setInputValues] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState<any | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
    e.preventDefault();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<any> => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/login', inputValues);
      if (response.data.success) {
        localStorage.setItem('authToken', response.data.authorizationToken);
        navigate('/home');
      }
    } catch (err: any) {
      if (err.response.data) {
        setError(err.response.data.errorContent);
      } else setError('Something went wrong');
    }
  };

  useEffect(() => {
    if (error) console.log(error);
  }, [error]);

  return (
    <div className='SignInForm'>
      <FormContainer>
        <>
          <FormHeader title='Sign In' />
          <div className='form-main'>
            <FormContent>
              <form onSubmit={handleSubmit}>
                <div className='form-main-title'>
                  <h2>Hello!</h2>
                  <p>Please sign in to continue</p>
                </div>
                <label>Email Address</label>
                <input type='email' name='email' onChange={handleChange} />
                <label>Password</label>
                <input type='password' name='password' onChange={handleChange} />
                <input type='submit' value='Sign In' />
              </form>
            </FormContent>
            <FormSidebar img={signinimage}>
              <p>
                You're not <span>sign up</span> yet?
              </p>
              <Link to={'/register'}>Sign Up</Link>
            </FormSidebar>
          </div>
        </>
      </FormContainer>
    </div>
  );
};

export default SignInForm;
