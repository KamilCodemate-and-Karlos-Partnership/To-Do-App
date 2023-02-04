import React from 'react';
import FormHeader from '../components/Forms/FormHeader';
import FormContainer from '../components/Forms/FormContainer';
import FormContent from '../components/Forms/FormContent';
import FormSidebar from '../components/Forms/FormSidebar';
import signinimage from '../assets/img/signinimage.jpg';
import '../assets/styles/SignUpForm.scss';

const SignInForm: React.FC<{}> = (): React.ReactElement => {
  return (
    <div className="SignInForm">
      {/* <FormContainer>
      <>
        <FormHeader title="Sign In" />
        <div className="form-main">
          <FormContent>
            <form method="post">
              <div className="form-main-title">
                <h2>Hello!</h2>
                <p>Please sign in to continue</p>
              </div>
              <label>Email Address</label>
              <input type="email" />
              <label>Password</label>
              <input type="password" />
              <input type="submit" value="Sign In" />
            </form>
          </FormContent>
          <FormSidebar img={signinimage}>
            <p>You're not <span>sign up</span> yet?</p>
            <button>Sign Up</button>
          </FormSidebar>
        </div>
      </>
      </FormContainer> */}
    </div>
  );
};

export default SignInForm;
