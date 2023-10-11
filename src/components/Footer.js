import React, { useState } from 'react';
import Thankyou from './Thankyou';


const Footer = () => {
  
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setSubmitted(true);
  };

  return (
    <footer>
      <p>Contact me:</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
      {submitted && <Thankyou name={name} /> }
    </footer>
  );
};

export default Footer;
