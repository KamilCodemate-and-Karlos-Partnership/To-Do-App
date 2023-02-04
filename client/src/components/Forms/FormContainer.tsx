import React from 'react';
import '../../assets/styles/FormContainer.scss';

const FormContainer: React.FC<{ children: React.ReactElement }> = ({
  children,
}): React.ReactElement => {
  return <div className="form-container">{children}</div>;
};

export default FormContainer;
