// src/components/AnimatedBackground.js
import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../util/ThemeContext';

const AnimatedBackground = ({children}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`relative  w-full h-screen bg-gradient-to-l from-purple-400 to-blue-600 overflow-hidden ${theme}`}>
     
      <ul className="absolute top-0 left-0  overflow-hidden circles">
        {Array.from({ length: 10 }, (_, index) => (
          <li key={index} className={`circle circle-${index + 1}`}></li>
        ))}
      </ul>
    
      <style>
        {`
          .circles {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }
          .circle {
            position: absolute;
            display: block;
            list-style: none;
            background: rgba(255, 255, 255, 0.2);
            animation: animate 25s linear infinite;
            bottom: -150px;
          }
          .circle-1 { left: 25%; width: 80px; height: 80px; animation-delay: 0s; }
          .circle-2 { left: 10%; width: 20px; height: 20px; animation-delay: 2s; animation-duration: 12s; }
          .circle-3 { left: 70%; width: 20px; height: 20px; animation-delay: 4s; }
          .circle-4 { left: 40%; width: 60px; height: 60px; animation-delay: 0s; animation-duration: 18s; }
          .circle-5 { left: 65%; width: 20px; height: 20px; animation-delay: 0s; }
          .circle-6 { left: 75%; width: 110px; height: 110px; animation-delay: 3s; }
          .circle-7 { left: 35%; width: 150px; height: 150px; animation-delay: 7s; }
          .circle-8 { left: 50%; width: 25px; height: 25px; animation-delay: 15s; animation-duration: 45s; }
          .circle-9 { left: 20%; width: 15px; height: 15px; animation-delay: 2s; animation-duration: 35s; }
          .circle-10 { left: 85%; width: 150px; height: 150px; animation-delay: 0s; animation-duration: 11s; }

          @keyframes animate {
            0% { transform: translateY(0) rotate(0deg); opacity: 1; border-radius: 0; }
            100% { transform: translateY(-1000px) rotate(720deg); opacity: 0; border-radius: 50%; }
          }
        `}
      </style>
    </div>
  );
};

export default AnimatedBackground;
