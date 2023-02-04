import React from 'react';
import FormSidebar from './FormSidebar';
import signupimage from '../../assets/img/signupimage.jpg';
import '../../assets/styles/FormContainer.scss';

const FormContainer: React.FC<{ children: React.ReactElement }> = ({
  children,
}): React.ReactElement => {
  return (
    <div className="form-container">
      {children}
      <div className='form-main'>
        <form method="post">
            <div className='form-main-title'>
                <h2>Hello!</h2>
                <p>Please sign up to continue</p>
            </div>
            <label>Full Name</label>
            <input type="text" />
            <label>Email Address</label>
            <input type="email" />
            <label>Password</label>
            <input type="password" />
            <label>Confirm Password</label>
            <input type="password" />
            <input type="submit" value="Sign Up" />
        </form>
        <FormSidebar img={signupimage}>
          <p>I'm already a <span>member</span>!</p>
          <button>Sign In</button>
        </FormSidebar>
      </div>
    </div>
  );
};

export default FormContainer;
