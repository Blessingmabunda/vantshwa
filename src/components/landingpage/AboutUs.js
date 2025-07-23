import React, { useState, useEffect } from 'react';

const AboutUs = () => {
  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  // Prevent scroll when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Clean up on unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showModal]);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Us</h1>

      <p style={styles.text}>
        Madzenga Consulting is an African woman-led climate change and environmental management consultancy 
        dedicated to helping organizations transition to a low-carbon, sustainable future.
      </p>

      <p style={styles.text}>
        We specialize in delivering innovative, science-based strategies that address the pressing challenges 
        of climate change, environmental degradation, and resource inefficiency.
      </p>

      <p style={styles.text}>
        Madzenga Consulting Company is a South African Environmental Consulting firm headquartered in Pretoria. 
        This consulting firm was established in 2018 by Ms. Delani Mathevula.
      </p>

      <button style={styles.button} onClick={handleToggleModal}>Learn More</button>

      {/* MODAL */}
      {showModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <h2>Our Expertise</h2>
            <p>
              Our multidisciplinary team of climate scientists, environmental engineers, and sustainability consultants
              works with governments, private enterprises, and non-profits to develop and implement tailored solutions
              that reduce carbon footprints, enhance climate resilience, and ensure regulatory compliance.
            </p>
            <button style={styles.closeButton} onClick={handleToggleModal}>Close</button>
          </div>
        </div>
      )}

      {/* Keyframe style for animation */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}
      </style>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: 'white',
    padding: '40px 20px',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    position: 'relative',
    zIndex: 1,
  },
  heading: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#222',
  },
  text: {
    fontSize: '18px',
    lineHeight: '1.6',
    marginBottom: '20px',
    color: '#444',
  },
  button: {
    backgroundColor: 'orange',
    color: 'white',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
   
    '@media (max-width: 768px)': {
      width: '100%', 
    }
  },
  modalOverlay: {
    position: 'fixed',
    top: -1300,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
    animation: 'fadeIn 0.3s ease-in-out', // uncomment this if you have a fadeIn animation defined
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '12px',
    width: '80%',
    maxWidth: '600px',
    textAlign: 'left',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)',
  },
  closeButton: {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#eee',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
};

export default AboutUs;
