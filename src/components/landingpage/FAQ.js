import React from 'react';

const CTA = () => {
  return (
    <>
      <section className="cta-section">
        <div className="cta-content">
          <div className="cta-text">
            <h1 className="cta-title">Take the Next Step</h1>
            <p className="cta-subtitle">Get started with our services today!</p>
          </div>
          <div className="cta-buttons">
            <a href="mailto:blessie999@gmail.com?subject=Schedule%20a%20Consultation&body=Hi%20Team,%20I%27m%20interested%20in%20scheduling%20a%20consultation.%20Please%20let%20me%20know%20the%20next%20steps."
              target="_blank"
              rel="noreferrer"
            >
              <button className="cta-button">Schedule a Consultation</button>
            </a>
            <a href="mailto:blessie999@gmail.com?subject=Get%20a%20Free%20Quote&body=Hi%20Team,%20I%27m%20interested%20in%20getting%20a%20free%20quote.%20Please%20let%20me%20know%20the%20next%20steps."
              target="_blank"
              rel="noreferrer"
            >
              <button className="cta-button">Get a Free Quote</button>
            </a>
            <a href="mailto:blessie999@gmail.com?subject=Start%20a%20Project&body=Hi%20Team,%20I%27m%20interested%20in%20starting%20a%20project.%20Please%20let%20me%20know%20the%20next%20steps."
              target="_blank"
              rel="noreferrer"
            >
              <button className="cta-button">Start a Project</button>
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        .cta-section {
          padding: 80px 20px;
          background-color: #00183d; 
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }

        .cta-content {
          max-width: 1200px;
          text-align: center;
        }

        .cta-title {
          color: white;
          font-size: 3rem;
          margin-bottom: 10px;
        }

        .cta-subtitle {
          color: white;
          font-size: 1.5rem;
          margin-bottom: 40px;
        }

        .cta-buttons {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }

        .cta-button {
          background-color: #01224a;
          color: white;
          border: none;
          padding: 15px 30px;
          border-radius: 10px;
          cursor: pointer;
          margin: 10px;
          font-size: 1rem;
          transition: background-color 0.3s ease;
        }

        .cta-button:hover {
          background-color: #00183d;
        }

        @media (max-width: 768px) {
          .cta-title {
            font-size: 2.5rem;
          }

          .cta-subtitle {
            font-size: 1.2rem;
          }

          .cta-button {
            padding: 12px 20px;
            font-size: 0.9rem;
          }
        }

        @media (max-width: 480px) {
          .cta-title {
            font-size: 2rem;
          }

          .cta-subtitle {
            font-size: 1rem;
          }

          .cta-button {
            padding: 10px 15px;
            font-size: 0.8rem;
          }
        }
      `}</style>
    </>
  );
};

export default CTA;