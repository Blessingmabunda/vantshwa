import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-content">
        <p className="footer-text">&copy; 2018 Madzenga Consulting. Powered by Mabunda Tech</p>
      </div>

      <style jsx>{`
      .footer {
  background-color: #ff9900;  /* Green background */
  color: white;  /* White text color */
  padding: 40px;  /* Increased padding for more height */
  text-align: center;
  width: 100%;
  font-family: Arial, sans-serif;
}


        .footer-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .footer-text {
          font-size: 15px;
          font-weight: bold;
          margin: 0;
          padding: 5px 0;
        }

        .contact-info {
          font-size: 12px;
          margin: 5px 0;
        }

        .footer-link {
          color: white;
          text-decoration: none;
          font-weight: bold;
          transition: color 0.3s;
        }

        .footer-link:hover {
          color: #ffcc00;  /* Light yellow for hover effect */
        }
      `}</style>
    </footer>
  );
};

export default Footer;
