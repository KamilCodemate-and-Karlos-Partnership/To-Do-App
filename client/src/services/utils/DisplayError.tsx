import React from 'react';

const DisplayError: React.FC <{ content: string }> = ({ content }) => {
  return (
    <span style={{ color: 'red', fontWeight: 'bold' }}>{content}</span>
  )
}

export default DisplayError;