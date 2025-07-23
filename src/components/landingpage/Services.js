import React, { useState } from 'react';

const Services = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Optionally, you can add a resize listener if you still want to adjust the layout for mobile
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768); // Check for mobile screens (less than or equal to 768px)
  };

  // Call it once on mount to check the screen size
  React.useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '24px', color: '#333', marginBottom: '40px', textAlign: 'center' }}>Our Services</h1>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
        {services.map((service, index) => (
          <div
            key={index}
            style={{
              flex: isMobile ? '1 0 100%' : '1 0 30%',
              maxWidth: isMobile ? '100%' : '30%',
              marginBottom: '20px',
              boxSizing: 'border-box',
            }}
          >
            <img
              src={require(`./../../assets/${service.icon}`)}
              alt={`Service ${index + 1}`}
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                display: 'block',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const services = [
  { icon: '1.png' },
  { icon: '2.png' },
  { icon: '3.png' },
];

export default Services;
