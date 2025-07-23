import React from 'react';

const ContactUsDialog = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/27660521477', '_blank');
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+27660521477';
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:makhubeleclinton16@gmail.com';
  };

  return (
    <div style={modalOverlay}>
      <div style={modalContent}>
        <button style={closeButton} onClick={onClose}>
          <svg style={closeIcon} viewBox="0 0 24 24">
            <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
          </svg>
        </button>
        <h2 style={modalTitle}>Contact Us</h2>
        <div style={contactInfo}>
          <p style={companyName}>
           
         CHOOSE ANY OPTION YOU WANNA USE
          </p>
          
          <div style={contactItemContainer} onClick={handleCallClick}>
            <svg style={contactIcon} viewBox="0 0 24 24">
              <path fill="currentColor" d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
            </svg>
            <div style={contactText}>
              <div style={contactLabel}>Phone</div>
              <div style={contactValue}>066 052 1477</div>
            </div>
          </div>

          <div style={contactItemContainer} onClick={handleWhatsAppClick}>
            <svg style={contactIcon} viewBox="0 0 24 24">
              <path fill="currentColor" d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.35 4.53 17.94 6.12C19.53 7.71 20.38 9.81 20.38 12C20.38 16.54 16.58 20.33 12.04 20.33C10.56 20.33 9.11 19.89 7.85 19.06L7.55 18.88L4.43 19.65L5.23 16.61L5.02 16.29C4.15 14.94 3.67 13.46 3.67 11.91C3.67 7.37 7.46 3.58 12 3.58L12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.34 13.3C14.19 13.55 13.82 14.11 13.7 14.27C13.57 14.44 13.43 14.46 13.18 14.34C12.94 14.22 12.27 13.95 11.49 13.28C10.87 12.78 10.45 12.15 10.32 11.91C10.18 11.66 10.3 11.5 10.41 11.39C10.5 11.29 10.63 11.12 10.74 10.96C10.85 10.8 10.9 10.68 10.97 10.5C11.05 10.32 11.01 10.17 10.95 10.04C10.89 9.91 10.33 8.57 10.12 8.05C9.92 7.54 9.71 7.62 9.56 7.62C9.41 7.62 9.24 7.59 9.07 7.59C8.9 7.59 8.68 7.65 8.5 7.87C8.31 8.09 7.81 8.57 7.81 9.54C7.81 10.5 8.58 11.42 8.68 11.56C8.77 11.7 10.06 13.62 12.36 14.66C13.1 14.99 13.7 15.18 14.17 15.31C14.78 15.47 15.33 15.42 15.74 15.34C16.2 15.25 16.96 14.86 17.17 14.44C17.38 14 17.38 13.65 17.34 13.56C17.3 13.47 17.23 13.42 17.13 13.39C17.04 13.35 16.5 13.16 15.85 12.89C15.14 12.59 14.61 12.26 14.5 12.16C14.4 12.06 14.33 12.03 14.22 11.17C14.21 11.13 14.21 11.08 14.2 11.04C14.2 10.96 14.21 10.9 14.21 10.84C14.22 10.8 14.22 10.76 14.22 10.72C14.23 10.59 14.23 10.5 14.2 10.42C14.17 10.35 14.1 10.28 14 10.23C13.9 10.18 13.72 10.09 13.5 10C12.76 9.71 11.58 9.25 11.31 9.16C11.04 9.07 10.84 9.02 10.68 9.28C10.52 9.54 10.05 10.14 9.93 10.29C9.82 10.44 9.7 10.46 9.56 10.43C9.42 10.4 9 10.27 8.7 10.15C8.28 9.99 7.96 9.83 7.74 9.63C7.5 9.42 7.7 9.27 7.81 9.17C7.91 9.07 8.09 8.87 8.19 8.73C8.3 8.59 8.35 8.48 8.41 8.38C8.47 8.28 8.42 8.19 8.38 8.13C8.33 8.07 8.21 7.92 8.09 7.8C7.96 7.67 7.81 7.55 7.68 7.66C7.54 7.77 7.35 7.9 7.2 8C7.05 8.11 6.89 8.21 6.74 8.3C6.58 8.4 6.42 8.53 6.6 8.82C6.77 9.12 7.34 9.89 7.73 10.36C8.62 11.43 9.29 11.89 9.56 12.06C9.84 12.23 10.05 12.18 10.2 12.09C10.36 12 11.17 11.52 11.37 11.32C11.56 11.12 11.6 11 11.64 10.92C11.68 10.85 11.64 10.8 11.59 10.76C11.49 10.68 11.22 10.48 11 10.31C10.78 10.14 10.6 10.15 10.5 10.16C10.38 10.18 10.24 10.2 10.09 10.22C9.94 10.24 9.76 10.19 9.62 10.14C9.48 10.09 9.3 10 9.16 9.91C8.85 9.7 8.59 9.42 8.41 9.19C8.23 8.96 8.05 8.7 8.03 8.6C8 8.5 7.99 8.4 8 8.32C8 8.24 8.04 8.16 8.07 8.09C8.11 8.02 8.2 7.91 8.28 7.83C8.36 7.75 8.44 7.67 8.5 7.62C8.56 7.57 8.6 7.5 8.62 7.45C8.65 7.4 8.63 7.36 8.6 7.33C8.58 7.3 8.55 7.3 8.53 7.3V7.33Z" />
            </svg>
            <div style={contactText}>
              <div style={contactLabel}>WhatsApp</div>
              <div style={contactValue}>Message us directly</div>
            </div>
          </div>

          <div style={contactItemContainer} onClick={handleEmailClick}>
            <svg style={contactIcon} viewBox="0 0 24 24">
              <path fill="currentColor" d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z" />
            </svg>
            <div style={contactText}>
              <div style={contactLabel}>Email</div>
              <div style={contactValue}>makhubeleclinton16@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Styles
const modalOverlay = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(15, 23, 42, 0.9)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
  animation: 'fadeInModal 0.3s ease-out',
};

const modalContent = {
  backgroundColor: 'rgba(15, 23, 42, 0.95)',
  padding: '2rem',
  borderRadius: '15px',
  maxWidth: '500px',
  width: '90%',
  position: 'relative',
  border: '1px solid rgba(59, 130, 246, 0.3)',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
  backdropFilter: 'blur(10px)',
  color: '#e2e8f0',
  animation: 'fadeInModal 0.3s ease-out',
};

const closeButton = {
  position: 'absolute',
  top: '1rem',
  right: '1rem',
  background: 'none',
  border: 'none',
  color: '#f97316',
  fontSize: '1.5rem',
  cursor: 'pointer',
  transition: 'color 0.3s ease',
  padding: '0.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const closeIcon = {
  width: '24px',
  height: '24px',
};

const modalTitle = {
  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
  fontWeight: 700,
  marginBottom: '1.5rem',
  textAlign: 'center',
  color: '#f1f5f9',
  textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)',
};

const contactInfo = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
};

const companyName = {
  fontSize: '1.1rem',
  fontWeight: '600',
  margin: '0 0 1rem 0',
  color: '#f1f5f9',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',
  paddingBottom: '1rem',
  borderBottom: '1px solid rgba(255,255,255,0.1)',
};

const companyIcon = {
  width: '20px',
  height: '20px',
  color: '#f97316',
};

const contactItemContainer = {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  padding: '0.8rem 1rem',
  borderRadius: '10px',
  backgroundColor: 'rgba(30, 41, 59, 0.5)',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  border: '1px solid rgba(255,255,255,0.05)',
  ':hover': {
    backgroundColor: 'rgba(249, 115, 22, 0.1)',
    borderColor: 'rgba(249, 115, 22, 0.3)',
    transform: 'translateY(-2px)',
  },
};

const contactIcon = {
  width: '24px',
  height: '24px',
  color: '#f97316',
  flexShrink: 0,
};

const contactText = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.2rem',
};

const contactLabel = {
  fontSize: '0.8rem',
  color: '#94a3b8',
  fontWeight: '500',
};

const contactValue = {
  fontSize: '1rem',
  color: '#f1f5f9',
  fontWeight: '500',
};

export default ContactUsDialog;