import React, { useState } from 'react';
import FormComponent from './Form';

const NameFunction = () => {
  const [name, setName] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleNameSubmission = (newName) => {
    setName(newName);
  };

  return (
    <div>
      <h2 style={{textAlign: 'center'}}>HI, {name || 'Guest'}!</h2>

      <button style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} onClick={() => setIsFormVisible(!isFormVisible)}>
        {isFormVisible ? 'Hide Form' : 'Show Form'}
      </button>

      {isFormVisible && <FormComponent onSubmit={handleNameSubmission} />}
    </div>
  );
};

export default NameFunction;
