import React from 'react';
import FormHeader from '../components/Forms/FormHeader';
import FormContainer from '../components/Forms/FormContainer';
import '../assets/styles/SignUpForm.scss';

const SignUpForm: React.FC<{}> = (): React.ReactElement => {
  return (
    <div className='SignUpForm'>
        <FormContainer>
          <FormHeader title="Sign Up" />
        </FormContainer>
    </div>
  )
}

export default SignUpForm;