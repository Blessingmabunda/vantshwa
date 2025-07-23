import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SplashPage = () => {
  const navigate = useNavigate();
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Set fadeIn state to true after a short delay to trigger the animation
    const timer = setTimeout(() => {
      setFadeIn(true); // Start fade-in and scale effect
    }, 300); // Delayed fade-in effect

    // Navigate to the landing page after 3 seconds
    setTimeout(() => {
      navigate('/Home');
    }, 3000);

    // Cleanup the timer on component unmount
    return () => {
      clearTimeout(timer);
    };
  }, [navigate]);

  const splashContainerStyle = {
    backgroundColor: 'white', // Background color
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    overflow: 'hidden',
  };

  const logosStyle = {
    width: '300px', // Set a professional logo size
    height: 'auto',
    opacity: fadeIn ? 1 : 0, // Fade-in effect
    transform: fadeIn ? 'scale(1)' : 'scale(0.8)', // Slight scaling for subtle entrance
    transition: 'opacity 1.5s ease, transform 1.5s ease', // Smooth transition
  };

  return (
    <div style={splashContainerStyle}>
      <img
        src={require('./../../assets/logo.png')}
        alt="logos"
        style={logosStyle}
      />
    </div>
  );
};

export default SplashPage;
