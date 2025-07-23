import React from 'react';
import { motion } from 'framer-motion';

const SustainabilityHero = () => {
  const styles = {
    heroContainer: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      height: '100vh', // Set the height to 100% of the viewport
      margin: '0',
      padding: '0',
      gap: '40px',
      alignItems: 'center',
      backgroundImage: "url(" + require("./../../assets/global.jpg") + ")",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: '0', // Remove border radius for full screen background
    },
    heroContent: {
      flex: 1,
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      padding: '20px',
      borderRadius: '8px',
    },
    logoContainer: {
      marginBottom: '24px',
    },
    companyName: {
      color: 'green',
      fontWeight: 800,
      marginBottom: '8px',
      textAlign: 'center',
    },
    mainHeading: {
      fontSize: '35px',
      fontWeight: 700,
      color: '#111827',
      marginBottom: '16px',
      lineHeight: 1.2,
      textAlign: 'center',
    },
    coloredHeading: {
      marginBottom: '24px',
      fontSize: '42px',
      fontWeight: 700,
      lineHeight: 1.2,
      textAlign: 'center',
    },
    greenText: {
      color: 'green',
    },
    orangeText: {
      color: '#fb923c',
    },
    description: {
      color: '#4b5563',
      marginBottom: '32px',
      maxWidth: '450px',
      lineHeight: 1.5,
      textAlign: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    ctaButton: {
      backgroundColor: '#fb923c',
      color: 'white',
      fontWeight: 700,
      padding: '12px 24px',
      borderRadius: '8px',
      border: 'none',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    heroImageContainer: {
      flex: 1,
    },
    heroImage: {
      height: '500px',
      width: '500px',
      borderRadius: '20px',
    },
  };

  return (
    <div style={{ position: 'relative' }}>
      {/* Logo - fixed outside the container on the left */}
      <div
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          zIndex: 10,
        }}
      >
    
      </div>
  
      {/* Main Hero Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        style={styles.heroContainer}
      >
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          style={styles.heroContent}
        >
          <p style={styles.companyName}>We Are Madzenga Consulting</p>
          <h1 style={styles.mainHeading}>Advancing</h1>
          <h1 style={styles.mainHeading}> Sustainability Through</h1>
  
          <div style={styles.coloredHeading}>
            <motion.span style={styles.greenText} 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, staggerChildren: 0.1 }}
            >
              {"Global ".split("").map((char, index) => (
                <motion.span key={index} 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.span>
            <motion.span style={styles.orangeText} 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, staggerChildren: 0.1 }}
            >
              <br />
              {"Collaboration".split("").map((char, index) => (
                <motion.span key={index} 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.span>
          </div>
  
          <p style={styles.description}>
            At Madzenga Consulting, we provide strategic environmental management services with a focus on climate change, research, and regulatory impact assessment.
          </p>
        </motion.div>
      </motion.div>
  
      {/* Optional: Responsive style for smaller screens */}
      <style>
        {`
          @media (max-width: 768px) {
            div[style*='position: absolute'] img {
              height: 60px !important;
              width: 60px !important;
              top: 10px !important;
              left: 10px !important;
            }
          }
        `}
      </style>
    </div>
  );
  
  
};

export default SustainabilityHero;
