import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SustainabilityHero = () => {
  const contentSequence = [
    {
      type: 'slide',
      text: "B-BBEE COMPANY, LEVEL 1",
      subText: "100% OWNED BY BLACK FEMALE SOUTH AFRICANS",
    },
    {
      type: 'slide',
      text: "At Madzenga Consulting, we care for the environment",
      subText: "",
    },
    {
      type: 'slogan',
      text: "Advancing Sustainability Through Global Collaboration",
    },
    {
      type: 'description',
      text: "At Madzenga Consulting, we provide strategic environmental management services with a focus on climate change, research, and regulatory impact assessment.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (isHovering) return; // Pause animation when hovering
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % contentSequence.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [contentSequence.length, isHovering]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const styles = {
    heroWrapper: {
      position: 'relative',
      width: '100%',
      height: '100vh',
      overflow: 'hidden',
    },
    heroBackground: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundImage: "url(" + require("./../../assets/global.jpg") + ")",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      zIndex: 0,
    },
    heroContainer: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      height: '100vh',
      margin: '0',
      padding: '0',
      gap: '40px',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '0',
      overflow: 'hidden',
      zIndex: 1,
    },
    heroContent: {
      backgroundColor: 'rgba(255, 255, 255, 0.85)',
      padding: '40px',
      borderRadius: '8px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
      margin: '0 40px',
      backdropFilter: 'blur(5px)',
      width: 'auto',
      height: 'auto',
    },
    logoContainer: {
      marginBottom: '24px',
    },
    companyName: {
      color: 'green',
      fontWeight: 800,
      marginBottom: '8px',
      textAlign: 'center',
      fontSize: '32px',
    },
    mainHeading: {
      fontSize: '48px',
      fontWeight: 700,
      color: '#111827',
      marginBottom: '16px',
      lineHeight: 1.2,
      textAlign: 'center',
    },
    coloredHeading: {
      marginBottom: '24px',
      fontSize: '56px',
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
      maxWidth: '600px',
      lineHeight: 1.5,
      textAlign: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
      fontSize: '24px',
      fontWeight: 'bold', // Added bold for the last paragraph
    },
    ctaButton: {
      backgroundColor: '#fb923c',
      color: 'white',
      fontWeight: 700,
      padding: '16px 32px',
      borderRadius: '8px',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontSize: '18px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    },
    heroImageContainer: {
      flex: 1,
    },
    heroImage: {
      height: '500px',
      width: '500px',
      borderRadius: '20px',
    },
    slideText: {
      fontSize: '36px',
      fontWeight: 700,
      color: '#111827',
      marginBottom: '8px',
      textAlign: 'center',
      textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
    },
    slideSubText: {
      fontSize: '24px',
      color: '#4b5563',
      fontWeight: 500,
      textAlign: 'center',
    },
    dotsContainer: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '12px',
      width: '100%',
    },
    dot: {
      width: '14px',
      height: '14px',
      borderRadius: '50%',
      backgroundColor: '#d1d5db',
      margin: '0 8px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    activeDot: {
      backgroundColor: '#fb923c',
      transform: 'scale(1.2)',
    },
  };

  const renderContent = (item) => {
    switch (item.type) {
      case 'slide':
        return (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div style={styles.slideText}>{item.text}</div>
            {item.subText && <div style={styles.slideSubText}>{item.subText}</div>}
          </motion.div>
        );
      case 'slogan':
        return (
          <div style={styles.coloredHeading}>
            <motion.span style={styles.greenText}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {"Advancing Sustainability Through "}
            </motion.span>
            <motion.span style={styles.orangeText}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {"Global Collaboration"}
            </motion.span>
          </div>
        );
      case 'description':
        return (
          <motion.p 
            style={styles.description}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {item.text}
          </motion.p>
        );
      default:
        return null;
    }
  };

  return (
    <div style={styles.heroWrapper}>
      <div style={styles.heroBackground}></div>
      <div style={styles.heroContainer}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          style={styles.heroContent}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center' }}
          >
            {renderContent(contentSequence[currentIndex])}
          </motion.div>

          <div style={styles.dotsContainer}>
            {contentSequence.map((_, index) => (
              <motion.div
                key={index}
                style={{
                  ...styles.dot,
                  ...(currentIndex === index ? styles.activeDot : {}),
                }}
                onClick={() => handleDotClick(index)}
                whileHover={{ scale: 1.3 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      <style>
        {`
          @media (max-width: 768px) {
            div[style*='position: absolute'] img {
              height: 60px !important;
              width: 60px !important;
              top: 10px !important;
              left: 10px !important;
            }
            div[style*='font-size: 36px'] {
              font-size: 24px !important;
            }
            div[style*='font-size: 24px'] {
              font-size: 16px !important;
            }
            div[style*='font-size: 48px'] {
              font-size: 30px !important;
            }
            div[style*='font-size: 56px'] {
              font-size: 32px !important;
            }
            div[style*='backgroundColor: rgba(255, 255, 255, 0.85)'] {
              width: 80% !important;
              margin: 0 !important;
              padding: 15px !important;
              height: auto !important;
              min-height: unset !important;
              max-height: unset !important;
            }
            div[style*='dotsContainer'] {
              position: relative !important;
              bottom: 0 !important;
              margin-top: 10px !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default SustainabilityHero;