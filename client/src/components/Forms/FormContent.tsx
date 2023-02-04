import React from 'react';

const FormContent: React.FC<{ children: React.ReactNode }> = ({
  children,
}): React.ReactElement => {
  return <div className='form-collapse'>{children}</div>;
};

export default FormContent;
