import React, { useState, useEffect } from 'react';

const SustainabilityHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  // Inline CSS styles (keeping your original style structure)
  const styles = {
    heroContainer: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      height: '100vh',
      margin: '0 auto',
      padding: '40px',
      gap: '60px',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFF9E5',
      position: 'relative',
      borderRadius: '8px',
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
    },
    heroContent: {
      flex: 1,
      zIndex: 2,
      position: 'relative',
      color: 'black',
      textAlign: 'center',
      padding: '0 40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    logoContainer: {
      marginBottom: '40px',
      display: 'flex',
      justifyContent: 'flex-start',
      width: '100%',
    },
    smallImage: {
      height: '60px',
      width: 'auto',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
    },
    companyName: {
      color: '#22c55e',
      fontWeight: 700,
      marginBottom: '16px',
    },
    mainHeading: {
      fontSize: '60px',
      fontWeight: 700,
      color: '#111827',
      marginBottom: '24px',
      lineHeight: 1.2,
    },
    coloredHeading: {
      marginBottom: '40px',
      fontSize: '50px',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    greenText: {
      color: '#22c55e',
    },
    orangeText: {
      color: '#fb923c',
    },
    description: {
      color: 'black',
      marginBottom: '48px',
      maxWidth: '550px',
      lineHeight: 1.8,
      textAlign: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    additionalContent: {
      color: 'black',
      marginTop: '20px',
      maxWidth: '550px',
      marginLeft: 'auto',
      marginRight: 'auto',
      lineHeight: 1.8,
      fontSize: '18px',
      textAlign: 'left',
      width: '100%',
    },
    heroImageContainer: {
      flex: 1,
    },
    heroImage: {
      width: '100%',
      height: 'auto',
      borderRadius: '8px',
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
    },
    ctaButtonBounce: {
      animation: 'bounce 1s infinite',
      backgroundColor: '#fb923c',
      color: 'white',
      fontWeight: 700,
      padding: '16px 32px',
      borderRadius: '8px',
      border: 'none',
      cursor: 'pointer',
      fontSize: '18px',
      transition: 'background-color 0.3s',
      marginBottom: '20px', // Reduced margin to bring button closer
    },
    sustainabilitySection: {
      marginTop: '20px', // Reduced margin to bring sections closer to button
      textAlign: 'left',
      width: '100%',
    },
    sectionHeading: {
      fontSize: '24px',
      fontWeight: 600,
      color: '#22c55e',
      margin: '20px 0 10px',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    sectionContent: {
      color: '#555',
      lineHeight: 1.8,
      marginBottom: '20px',
      textAlign: 'left',
      paddingLeft: '20px',
    },
    servicesList: {
      listStyleType: 'none',
      padding: 0,
      textAlign: 'left',
    },
    serviceItem: {
      marginBottom: '12px',
      display: 'flex',
      alignItems: 'flex-start',
    },
    serviceIcon: {
      color: '#fb923c',
      marginRight: '10px',
    },
    chevronIcon: {
      marginLeft: '8px',
      transition: 'transform 0.3s ease',
    },
    expandedChevron: {
      transform: 'rotate(90deg)',
    },
    '@keyframes bounce': {
      '0%, 20%, 50%, 80%, 100%': {
        transform: 'translateY(0)',
      },
      '40%': {
        transform: 'translateY(-10px)',
      },
      '60%': {
        transform: 'translateY(-5px)',
      },
    },
    ctaButtonHover: {
      backgroundColor: '#f97316',
    },
  };

  // Media query simulation for mobile
  const isMobile = window.innerWidth <= 768;
  if (isMobile) {
    styles.heroContainer.flexDirection = 'column';
    styles.heroContainer.height = 'auto';
    styles.heroContainer.padding = '20px';
    styles.mainHeading.fontSize = '36px';
    styles.coloredHeading.fontSize = '28px';
    styles.description.maxWidth = '100%';
    styles.description.fontSize = '16px';
    styles.coloredHeading.marginBottom = '20px';
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div style={styles.heroContainer}>
      <div style={styles.heroContent}>
        <div style={styles.logoContainer}>
          <img
            src={require("./../../assets/global2.jpg")}
            alt="Logo"
            style={styles.smallImage}
          />
        </div>

        <div style={styles.coloredHeading}>
          <span style={styles.greenText}>QUALITY</span>
          <br />
          <span style={styles.orangeText}>ASSURANCE</span>
        </div>

        <p style={styles.description}>
          We are committed to meeting the needs of our customers, staff, and stakeholders to ensure that services are carried out to client satisfaction and maintain the integrity and sustainability of the environment.
        </p>

        <button
          style={styles.ctaButtonBounce}
          onClick={() => setIsVisible(!isVisible)}
          onMouseOver={(e) => e.target.style.backgroundColor = styles.ctaButtonHover.backgroundColor}
          onMouseOut={(e) => e.target.style.backgroundColor = styles.ctaButtonBounce.backgroundColor}
        >
          {isVisible ? 'Show Less' : 'Our Sustainability Solutions'}
        </button>

        {isVisible && (
          <div style={styles.additionalContent}>
            <div style={styles.sustainabilitySection}>
              <h2 
                style={styles.sectionHeading}
                onClick={() => toggleSection('vision')}
              >
                Our Vision
                <span 
                  style={{
                    ...styles.chevronIcon,
                    ...(activeSection === 'vision' && styles.expandedChevron)
                  }}
                >
                  ›
                </span>
              </h2>
              {activeSection === 'vision' && (
                <p style={styles.sectionContent}>
                  To be the leading consultancy driving sustainable transformation, where businesses, governments, and communities actively shape a resilient, low-carbon future.
                </p>
              )}

              <h2 
                style={styles.sectionHeading}
                onClick={() => toggleSection('mission')}
              >
                Our Mission
                <span 
                  style={{
                    ...styles.chevronIcon,
                    ...(activeSection === 'mission' && styles.expandedChevron)
                  }}
                >
                  ›
                </span>
              </h2>
              {activeSection === 'mission' && (
                <p style={styles.sectionContent}>
                  We provide expert guidance and innovative strategies to help our clients navigate the challenges of climate change and environmental sustainability. Through data-driven analysis, policy support, and tailored solutions, we empower decision-makers to reduce environmental impact, meet regulatory goals, and create long-term value for both people and the planet.
                </p>
              )}

              <h2 
                style={styles.sectionHeading}
                onClick={() => toggleSection('services')}
              >
                Our Services
                <span 
                  style={{
                    ...styles.chevronIcon,
                    ...(activeSection === 'services' && styles.expandedChevron)
                  }}
                >
                  ›
                </span>
              </h2>
              {activeSection === 'services' && (
                <ul style={styles.servicesList}>
                  <li style={styles.serviceItem}>
                    <span style={styles.serviceIcon}>•</span>
                    Climate risk analysis and adaptation strategy development
                  </li>
                  <li style={styles.serviceItem}>
                    <span style={styles.serviceIcon}>•</span>
                    Greenhouse gas (GHG) emissions audits and carbon footprint assessments
                  </li>
                  <li style={styles.serviceItem}>
                    <span style={styles.serviceIcon}>•</span>
                    Environmental Impact Assessments (EIA) and sustainability reporting
                  </li>
                  <li style={styles.serviceItem}>
                    <span style={styles.serviceIcon}>•</span>
                    Renewable energy integration and energy efficiency optimization
                  </li>
                  <li style={styles.serviceItem}>
                    <span style={styles.serviceIcon}>•</span>
                    ESG (Environmental, Social & Governance) consulting
                  </li>
                  <li style={styles.serviceItem}>
                    <span style={styles.serviceIcon}>•</span>
                    Corporate sustainability training and stakeholder engagement
                  </li>
                </ul>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SustainabilityHero;