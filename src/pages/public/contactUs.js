import React, { useState, useEffect, useRef } from "react";
import Header from "../../shared/header";
import youthImage from "../../assets/youth.jpg";

const ContactUs = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 15,
        y: (e.clientY / window.innerHeight - 0.5) * 10,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    const timer = setTimeout(() => {
      if (contentRef.current) {
        contentRef.current.style.opacity = '1';
        contentRef.current.style.transform = 'translateY(0)';
      }
    }, 100);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  const Particle = ({ size, left, top, delay }) => {
    const colors = [
      'rgba(249, 115, 22, 0.6)', // Orange
      'rgba(16, 185, 129, 0.6)', // Green
      'rgba(59, 130, 246, 0.6)', // Blue
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return (
      <div
        style={{
          position: 'fixed',
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: randomColor,
          borderRadius: '50%',
          left: `${left}%`,
          top: `${top}%`,
          animation: `float 6s ease-in-out ${delay}s infinite`,
          filter: 'blur(1px)',
          'z-index': 2,
          'pointer-events': 'none'
        }}
      />
    );
  };

  const contactData = {
    phone: "+27 66 052 1477",
    email: "makhubeleclinton16@gmail.com",
    address: "Stand Number 130042, Ludlow, Thulamahashe, Mpumalanga, 1365"
  };
  
  return (
    <div style={container}>
      <Header />
      {Array.from({ length: 10 }).map((_, i) => (
        <Particle
          key={i}
          size={Math.random() * 5 + 2}
          left={Math.random() * 100}
          top={Math.random() * 100}
          delay={Math.random() * 5}
        />
      ))}
  
      <div
        style={{
          ...backgroundImage,
          backgroundImage: `url(${youthImage})`,
          transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
        }}
      >
        <div style={darkOverlay} />
      </div>
  
      <main style={contentContainer}>
        <div ref={contentRef} style={contentWrapper}>
          <h1 style={pageTitle}>
            CONTACT <span style={highlightText}>US</span>
          </h1>
          <p style={pageSubtitle}>
            Reach out to us for bookings or inquiries. We're here to help you every step of the way.
          </p>
  
          <div style={contactSection}>
            <h2 style={sectionTitle}>Get in Touch</h2>
            <div style={contactGrid}>
              <div style={contactCard}>
                <h3 style={contactLabel}>Phone</h3>
                <p style={contactValue}>{contactData.phone}</p>
              </div>
              <div style={contactCard}>
                <h3 style={contactLabel}>Email</h3>
                <p style={contactValue}>
                  <a href={`mailto:${contactData.email}`} style={contactLink}>
                    {contactData.email}
                  </a>
                </p>
              </div>
              <div style={contactCard}>
                <h3 style={contactLabel}>Address</h3>
                <p style={contactValue}>{contactData.address}</p>
              </div>
            </div>
          </div>
  
          <div style={bookingSection}>
            <h2 style={sectionTitle}>Book Your Session</h2>
            <p style={bookingText}>
              Ready to start your journey with us? Contact us via phone or email to schedule your session. We offer flexible booking options to suit your needs, including in-person and virtual consultations. Reach out today to discuss how we can support you!
            </p>
            <button
              style={{
                ...ctaButton,
                transform: isHovering ? "scale(1.05)" : "scale(1)",
                boxShadow: isHovering
                  ? "0 0 20px rgba(59, 130, 246, 0.5)"
                  : "0 0 10px rgba(59, 130, 246, 0.3)",
              }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              onClick={() => window.location.href = `mailto:${contactData.email}?subject=Booking%20Inquiry`}
            >
              Book Now →
            </button>
          </div>
        </div>
      </main>
  
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
  
        @media (max-width: 768px) {
          html {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
};

// Styles
const container = {
  minHeight: '100vh',
  color: "#e2e8f0",
  backgroundColor: "#0f172a",
  position: 'relative',
  overflowX: 'hidden',
  width: '100%'
};

const backgroundImage = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  zIndex: 1,
  willChange: 'transform',
  transition: 'transform 0.1s ease-out'
};

const darkOverlay = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'linear-gradient(rgba(15, 23, 42, 0.7), rgba(249, 115, 22, 0.4), rgba(16, 185, 129, 0.4), rgba(59, 130, 246, 0.4))', // Mixed colors
  zIndex: 2,
};

const contentContainer = {
  position: 'relative',
  zIndex: 3,
  padding: '80px 15px 40px',
  maxWidth: '1200px',
  margin: '0 auto',
  '@media (min-width: 768px)': { padding: '100px 20px 40px' }
};

const contentWrapper = {
  backgroundColor: 'rgba(15, 23, 42, 0.4)',
  padding: 'clamp(1.5rem, 5vw, 2.5rem)',
  borderRadius: '20px',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(59, 130, 246, 0.3)', // Blue
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
  opacity: 0,
  transform: 'translateY(20px)',
  transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
  '@media (max-width: 480px)': { padding: '1.25rem 1rem', borderRadius: '16px' }
};

const pageTitle = {
  fontSize: 'clamp(1.8rem, 4vw, 3rem)',
  fontWeight: 700,
  marginBottom: '1rem',
  textAlign: 'center',
  color: '#f1f5f9',
  textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)',
  '@media (max-width: 480px)': { fontSize: '1.6rem' }
};

const pageSubtitle = {
  fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
  textAlign: 'center',
  color: '#cbd5e1',
  marginBottom: '2rem',
  maxWidth: '800px',
  marginLeft: 'auto',
  marginRight: 'auto',
  lineHeight: 1.6,
  '@media (max-width: 480px)': { fontSize: '0.95rem', marginBottom: '1.5rem' }
};

const highlightText = {
  color: "#f97316", // Orange
};

const contactSection = {
  marginBottom: '3rem',
  '@media (max-width: 480px)': { marginBottom: '2rem' }
};

const sectionTitle = {
  color: '#10b981', // Green
  fontSize: '1.4rem',
  marginBottom: '1.5rem',
  textAlign: 'center',
  fontWeight: 600,
  '@media (max-width: 480px)': { fontSize: '1.2rem', marginBottom: '1rem' }
};

const contactGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '1.5rem',
  '@media (max-width: 768px)': { gridTemplateColumns: '1fr', gap: '1.2rem' }
};

const contactCard = {
  backgroundColor: 'rgba(30, 41, 59, 0.3)',
  padding: '1.2rem',
  borderRadius: '8px',
  borderLeft: '3px solid #10b981', // Green
  textAlign: 'center',
  '@media (max-width: 480px)': { padding: '1rem' }
};

const contactLabel = {
  color: '#10b981', // Green
  fontSize: '1rem',
  marginBottom: '0.5rem',
  fontWeight: 500,
  '@media (max-width: 480px)': { fontSize: '0.9rem' }
};

const contactValue = {
  color: '#cbd5e1',
  fontSize: '0.9rem',
  lineHeight: 1.5,
  '@media (max-width: 480px)': { fontSize: '0.85rem' }
};

const contactLink = {
  color: '#10b981', // Green
  textDecoration: 'none',
  ':hover': { textDecoration: 'underline' }
};

const bookingSection = {
  marginBottom: '3rem',
  textAlign: 'center',
  '@media (max-width: 480px)': { marginBottom: '2rem' }
};

const bookingText = {
  color: '#cbd5e1',
  fontSize: '1rem',
  lineHeight: 1.6,
  maxWidth: '800px',
  margin: '0 auto 2rem',
  '@media (max-width: 480px)': { fontSize: '0.9rem', marginBottom: '1.5rem' }
};

const ctaButton = {
  padding: '1rem 2.5rem',
  backgroundColor: 'rgba(16, 185, 129, 0.1)', // Green
  color: '#e2e8f0',
  border: '2px solid #f97316', // Green
  borderRadius: '50px',
  fontSize: '1.1rem',
  fontWeight: 600,
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  backdropFilter: 'blur(5px)',
  outline: 'none',
  display: 'block',
  margin: '3rem auto 0',
  ':hover': { backgroundColor: 'rgba(16, 185, 129, 0.3)' }, // Green
  '@media (max-width: 768px)': { width: '100%', padding: '1rem' },
  '@media (max-width: 480px)': { fontSize: '1rem', margin: '2rem auto 0' }
};

export default ContactUs;