import React, { useState } from 'react';
import './WelcomeScreen.css'; // Import the CSS file

const WelcomeScreen = ({ onJoinClick }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleJoinClick = () => {
    // Perform validation if needed
    // For now, simply pass name and email to the parent component
    onJoinClick({ name, email });
  };

  return (
    <div className="welcome-container"> {/* Use a wrapping container with a class */}
      <h2>Welcome to CoWork Central!</h2>
      <div className="input-container"> {/* Container for input fields */}
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          placeholder="Enter your name"
          className="input-field" // Add a class for input fields
        />
      </div>
      <div className="input-container"> {/* Container for input fields */}
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email"
          className="input-field" // Add a class for input fields
        />
      </div>
      <button className="join-button" onClick={handleJoinClick}>
        Join
      </button>
    </div>
  );
};

export default WelcomeScreen;
