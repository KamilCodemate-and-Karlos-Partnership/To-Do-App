import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FormHeader from '../components/Forms/FormHeader';
import FormContainer from '../components/Forms/FormContainer';
import FormContent from '../components/Forms/FormContent';
import FormSidebar from '../components/Forms/FormSidebar';
import DisplayError from '../services/utils/DisplayError';
import signupimage from '../assets/img/signupimage.jpg';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/styles/SignUpForm.scss';

const SignUpForm: React.FC<{}> = (): React.ReactElement => {
  const [inputValues, setInputValues] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });
  const [error, setError] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
    e.preventDefault();
    console.log('Change');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<any> => {
    e.preventDefault();
    // setError(false);
    setLoading(true);

    try {
      await axios.post('/api/signup', inputValues);
    } catch (err: any) {
      if (err.response.data) {
        setError(err.response.data.errorContent);
      } else setError('Something went wrong');
    }
  };

  // useEffect(() => {
  //   if (!error && loading) {
  //     navigate('/login');
  //   }
  // });

  return (
    <div className='SignUpForm'>
      <FormContainer>
        <>
          <FormHeader title='Sign Up' />
          <div className='form-main'>
            <FormContent>
              <form onSubmit={handleSubmit}>
                <div className='form-main-title'>
                  <h2>Hello!</h2>
                  <p>Please sign up to continue</p>
                  {error ? <DisplayError content={error} /> : null}
                </div>
                <label>Username</label>
                <input type='text' name='username' onChange={handleChange} />
                <label>Email Address</label>
                <input type='email' name='email' onChange={handleChange} />
                <label>Password</label>
                <input type='password' name='password' onChange={handleChange} />
                <label>Confirm Password</label>
                <input type='password' name='passwordConfirm' onChange={handleChange} />
                <input type='submit' value='Sign Up' />
              </form>
            </FormContent>
            <FormSidebar img={signupimage}>
              <p>
                I'm already a <span>member</span>!
              </p>
              <Link to={'/login'}>Sign In</Link>
            </FormSidebar>
          </div>
        </>
      </FormContainer>
    </div>
  );
};

export default SignUpForm;
