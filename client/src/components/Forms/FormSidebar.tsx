import React from 'react';
import '../../assets/styles/FormSidebar.scss';

const FormSidebar: React.FC<{ img: string, children: React.ReactNode }> = ({ img, children }): React.ReactElement => {
  const sidebarStyle: React.CSSProperties = {
    backgroundImage: `url(${img})`,
  };

  return <div className="form-sidebar" style={sidebarStyle}>{children}</div>;
};

export default FormSidebar;
