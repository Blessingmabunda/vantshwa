import React from 'react';

const Footer = () => {
  return (
    <>
      <style>
        {`
          .footer {
            background-color: #000;
            color: #fff;
            padding: 0.5rem 0;
            width: 100%;
            font-family: Arial, sans-serif;
            font-size: 0.6rem;
            text-align: center;
          }
          .logo {
            height: 1.2rem;
            margin-bottom: 0.2rem;
          }
          .company-name {
            font-weight: bold;
            margin: 0.1rem 0;
          }
          .tagline {
            margin: 0.1rem 0 0.3rem;
          }
          .reg-number {
            opacity: 0.7;
          }
          @media (min-width: 768px) {
            .footer {
              font-size: 0.7rem;
              padding: 0.8rem 0;
            }
            .logo {
              height: 1.5rem;
            }
          }
        `}
      </style>
      <footer className="footer">
        <img 
          src={require('./../assets/logo.png')} 
          alt="Vantshwa Va Namuntlha Logo" 
          className="logo"
        />
        <div className="company-name">VANTSHWA VA NAMUNTLHA (PTY) LTD</div>
        <div className="tagline">Marriage & Financial Counseling</div>
        <div className="reg-number">REG NO: 2025/212832/07</div>
      </footer>
    </>
  );
};

export default Footer;