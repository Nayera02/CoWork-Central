import './App.css';


import React, { useState } from 'react';
import WelcomeScreen from './WelcomeScreen';
import Environment from './Environment';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [userData, setUserData] = useState(null);

  const handleJoin = (userData) => {
    setUserData(userData);
    setCurrentScreen('joined');
  };

  return (
    <div className="App">
      {currentScreen === 'welcome' && <WelcomeScreen onJoinClick={handleJoin} />}
      {currentScreen === 'joined' && <Environment userData={userData} />}
    </div>
  );
};

export default App;