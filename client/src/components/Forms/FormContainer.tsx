import React from 'react';
import '../../assets/styles/FormContainer.scss';

interface FormContainerProps {
  children: React.ReactElement;
}

const FormContainer: React.FC<FormContainerProps> = ({ children }): React.ReactElement => {
  return (
    <div className='form-container'>
      {children}
    </div>
  );
};

export default FormContainer;
