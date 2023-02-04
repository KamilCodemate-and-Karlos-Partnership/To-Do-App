import React from 'react';
import '../assets/styles/FormHeader.scss';

const FormHeader: React.FC<{ title: string }> = ({ title }): React.ReactElement => {
    return (
        <div className='form-header'>
            <h1>{title}</h1>
        </div>
    )
}

export default FormHeader;