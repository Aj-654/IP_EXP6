import React from 'react';
import profilepic from '../images/Screenshot_2023-07-25-13-50-38-487_com.instagram.android.png'
const Introduction = () => {
  return (
    <div>
      <div className="photo">
        <figure>
          <img src={profilepic} height="300" alt="Your Alt Text" />
        </figure>
        <figcaption>Keep smiling, as the world moves on..</figcaption>
      </div>

      <h3>Introduction:</h3>
      <p>Hello Everyone! My full name is <span id="name"><strong>Ajinkya Nilesh Jadhav</strong></span>. I am 19 years old. Keep scrolling to know more about me!</p>
    </div>
  );
};

export default Introduction;
