import React, { useState } from 'react';
import Thankyou from './Thankyou';


const Footer = () => {
  
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can perform actions to record the user's name or send it to a backend.
    // For simplicity, we'll just display a "Thank You" message with the name.
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
