import React from 'react';
import FormSidebar from './FormSidebar';
import signupimage from '../../assets/img/signupimage.jpg';
import '../../assets/styles/FormContainer.scss';

interface FormContainerProps {
  children: React.ReactElement;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const FormContainer: React.FC<FormContainerProps> = ({ children, ...props }): React.ReactElement => {
  return (
    <div className='form-container'>
      {children}
      <div className='form-main'>
        <form onSubmit={props.handleSubmit}>
          <div className='form-main-title'>
            <h2>Hello!</h2>
            <p>Please sign up to continue</p>
          </div>
          <label>Full Name</label>
          <input type='text' name='fullName' onChange={props.handleChange} />
          <label>Email Address</label>
          <input type='email' name='email' onChange={props.handleChange} />
          <label>Password</label>
          <input type='password' name='password' onChange={props.handleChange} />
          <label>Confirm Password</label>
          <input type='password' name='passwordConfirm' onChange={props.handleChange} />
          <input type='submit' value='Sign Up' />
        </form>
        <FormSidebar img={signupimage}>
          <p>
            I'm already a <span>member</span>!
          </p>
          <button>Sign In</button>
        </FormSidebar>
      </div>
    </div>
  );
};

export default FormContainer;
