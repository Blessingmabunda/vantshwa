import React, { useEffect, useState } from 'react';

const ContactForm = () => {
  useEffect(() => {
    const contactInfo = document.querySelector('.contact-info');
    const formSection = document.querySelector('.form-section');

    setTimeout(() => {
      contactInfo.classList.add('fade-in');
      formSection.classList.add('zoom-in');
    }, 100);
  }, []);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // This would typically connect to a backend service
    // For now, we'll open the email client with the form data
    const subject = `Contact Form Submission from ${formData.fullName}`;
    const body = `Name: ${formData.fullName}%0D%0AEmail: ${formData.email}%0D%0AMessage: ${formData.message}`;
    window.location.href = `mailto:delimathevula@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <section className="contact-section">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>We would love to hear from you! Whether you have questions about our services, need expert environmental consulting, or want to discuss a potential project, feel free to reach out. Our team is ready to assist you with sustainable solutions tailored to your needs.</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <div className="icon-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C8.134 2 5 5.134 5 9c0 4.418 4.268 9.37 6.197 11.318a1 1 0 001.606 0C14.732 18.37 19 13.418 19 9c0-3.866-3.134-7-7-7zm0 10a3 3 0 110-6 3 3 0 010 6z" />
                </svg>
              </div>
              <div className="info-text">
                <p>Location: <span className="location-text">BOUGAINVILLEA DR MONTANA TUINE PRETORIA,0182</span></p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="info-text">
                <p>Email: <a href="mailto:delimathevula@gmail.com" className="email-link">delimathevula@gmail.com</a></p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="info-text">
                <p>Phone: <a href="tel:+27836731454" className="phone-link">083 673 1454</a></p>
              </div>
            </div>
          </div>

          <div className="form-section">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input 
                  type="text" 
                  id="fullName" 
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className="submit-container">
                <button type="submit" className="submit-button">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <style jsx>{`
        .contact-section {
          width: 100%;
          padding: 0;
          overflow: hidden;
          background-color: #f8faf7;
          color: #2c3e2d;
        }

        .contact-header {
          padding: 60px 20px;
          text-align: left;
          max-width: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%);
          border-bottom: 2px solid #a5d6a7;
        }

        .contact-header h1 {
          font-size: 4rem;
          font-weight: bold;
          margin: 0 0 20px 0;
          text-align: center;
          color: #2e7d32;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
        }

        .contact-header p {
          font-size: 1.1rem;
          max-width: 800px;
          margin: 0;
          text-align: center;
          color: #455a44;
          line-height: 1.6;
        }

        .contact-content {
          display: flex;
          justify-content: space-between;
          max-width: 1200px;
          margin: 40px auto;
          padding: 0 20px;
        }

        .contact-info {
          flex: 1;
          opacity: 0;
          animation: fadeInText 1.5s forwards;
          color: #2c3e2d;
          padding: 30px;
          background-color: #ffffff;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(46, 125, 50, 0.1);
          margin-right: 20px;
        }

        .info-item {
          display: flex;
          align-items: center;
          margin-bottom: 30px;
        }

        .icon-circle {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #66bb6a 0%, #43a047 100%);
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 20px;
          box-shadow: 0 3px 6px rgba(0,0,0,0.1);
        }

        .icon {
          width: 30px;
          height: 30px;
          color: white;
        }

        .info-text {
          flex: 1;
        }

        .info-text p {
          margin: 0;
          font-size: 1.1rem;
          color: #455a44;
        }

        .location-text {
          color: #2e7d32;
          font-weight: 600;
        }

        .website-link, .email-link, .phone-link {
          color: #2e7d32;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.3s ease;
        }

        .website-link:hover, .email-link:hover, .phone-link:hover {
          color: #1b5e20;
          text-decoration: underline;
        }

        .form-section {
          flex: 1;
          padding: 0 0 0 20px;
          opacity: 0;
          transform: scale(0.95);
          animation: zoomIn 1.5s forwards;
        }

        form {
          background-color: #ffffff;
          padding: 40px;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(46, 125, 50, 0.1);
          border: 1px solid #e0e0e0;
        }

        .form-group {
          margin-bottom: 25px;
        }

        .form-group label {
          display: block;
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 8px;
          color: #2e7d32;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          border: 2px solid #c8e6c9;
          padding: 12px 15px;
          font-size: 1rem;
          background: #f8faf7;
          color: #2c3e2d;
          outline: none;
          border-radius: 6px;
          transition: all 0.3s ease;
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          border-color: #66bb6a;
          background-color: #ffffff;
          box-shadow: 0 0 0 3px rgba(102, 187, 106, 0.2);
        }

        .submit-container {
          display: flex;
          justify-content: flex-end;
          margin-top: 30px;
        }

       .submit-button {
        background: linear-gradient(135deg, #FFA726 0%, #FB8C00 100%); /* Orange gradient */
        color: white;
        font-size: 1.1rem;
        font-weight: 600;
        padding: 12px 40px;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
      }


        .submit-button:hover {
          background: linear-gradient(135deg, #5cb860 0%, #388e3c 100%);
          box-shadow: 0 5px 15px rgba(46, 125, 50, 0.3);
          transform: translateY(-2px);
        }

        .fade-in {
          animation: fadeInText 1.5s forwards;
        }

        .zoom-in {
          animation: zoomIn 1.5s forwards;
        }

        @keyframes fadeInText {
          to { opacity: 1; }
        }

        @keyframes zoomIn {
          to { opacity: 1; transform: scale(1); }
        }

        @media (max-width: 768px) {
          .contact-content {
            flex-direction: column;
            margin: 20px auto;
          }

          .contact-info {
            margin-bottom: 30px;
            margin-right: 0;
            padding: 20px;
          }

          .form-section {
            padding: 0;
          }

          .contact-header {
            padding: 40px 20px;
          }

          .contact-header h1 {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </>
  );
};

export default ContactForm;