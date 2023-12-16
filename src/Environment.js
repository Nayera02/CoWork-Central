// JoinedScreen.js

import React, { useState, useEffect } from 'react';
import './Environment.css';

const Environment = ({ userData }) => {
    const [manPosition, setManPosition] = useState({ x: 590, y: 540 });
    const [womanPosition, setWomanPosition] = useState({ x: 105, y: 155 });

    useEffect(() => {
        const handleWomanMovement = (event) => {
          const moveBy = 10;
    
          switch (event.key) {
            case 'w':
                setWomanPosition((prevPos) => ({ ...prevPos, y: prevPos.y - moveBy }));
              break;
            case 's':
                setWomanPosition((prevPos) => ({ ...prevPos, y: prevPos.y + moveBy }));
              break;
            case 'a':
                setWomanPosition((prevPos) => ({ ...prevPos, x: prevPos.x - moveBy }));
              break;
            case 'd':
                setWomanPosition((prevPos) => ({ ...prevPos, x: prevPos.x + moveBy }));
              break;
            default:
              break;
          }
        };
    
        const handleManMovement = (event) => {
          const moveBy = 10;
    
          switch (event.key) {
            case 'ArrowUp':
              setManPosition((prevPos) => ({ ...prevPos, y: prevPos.y - moveBy }));
              break;
            case 'ArrowDown':
                setManPosition((prevPos) => ({ ...prevPos, y: prevPos.y + moveBy }));
              break;
            case 'ArrowLeft':
                setManPosition((prevPos) => ({ ...prevPos, x: prevPos.x - moveBy }));
              break;
            case 'ArrowRight':
                setManPosition((prevPos) => ({ ...prevPos, x: prevPos.x + moveBy }));
              break;
            default:
              break;
          }
        };
    
        document.addEventListener('keydown', handleManMovement);
        document.addEventListener('keydown', handleWomanMovement);
    
        return () => {
          document.removeEventListener('keydown', handleManMovement);
          document.removeEventListener('keydown', handleWomanMovement);
        };
      }, []);

  return (
    <div className='environment-screen'>
        <div className='lunch-people'></div>
        <div className='woman'></div>
        <img
        src="woman6.png" // Replace with the path to your character image
        className="woman" // Add the CSS class name here
        style={{ left: `${womanPosition.x}px`, top: `${womanPosition.y}px` }}
        />

        <img
        src="man5.png" // Replace with the path to your character image
        className="man" // Add the CSS class name here
        style={{ left: `${manPosition.x}px`, top: `${manPosition.y}px` }}
        />
    </div>
  );
};

export default Environment;
