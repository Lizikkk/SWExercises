import React, { useState } from 'react'
import '../styles/Form.css'

const Form = ({onSubmit}) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name.trim() || !email.trim()) {
      setError('Both fields are required!');
      return;
    }

    if (!email.includes('@')) {
      setError('Enter a valid email!');
      return;
    }

    setError(''); 
    onSubmit(name) 
    setName('') 
    setEmail('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)} 
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
        />
      </label>
      <br />
      {error && <p style={{ color: 'red' }}>{error}</p>} 
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form
