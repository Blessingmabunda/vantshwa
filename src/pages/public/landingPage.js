import React, { useState, useEffect, useRef } from "react";
import Header from "../../shared/header";
import ContactUsDialog from "../../shared/contactUsDialog";
import youthImage from "../../assets/youth.jpg";
import Footer from "../../shared/footer";

const DarkLandingPage = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const heroRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ 
        x: (e.clientX / window.innerWidth - 0.5) * 15,
        y: (e.clientY / window.innerHeight - 0.5) * 10 
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    // Initial animation trigger
    const timer = setTimeout(() => {
      if (heroRef.current) {
        heroRef.current.style.opacity = '1';
        heroRef.current.style.transform = 'translateY(0)';
      }
    }, 100);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  // Animated floating particles with mixed colors
  const Particle = ({ size, left, top, delay }) => {
    const colors = [
      'rgba(249, 115, 22, 0.6)', // Orange
      'rgba(16, 185, 129, 0.6)', // Green
      'rgba(59, 130, 246, 0.6)', // Blue
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return (
      <div style={{
        position: 'absolute',
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: randomColor,
        borderRadius: '50%',
        left: `${left}%`,
        top: `${top}%`,
        animation: `float 6s ease-in-out ${delay}s infinite`,
        filter: 'blur(1px)',
        zIndex: 2,
      }} />
    );
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      color: "#e2e8f0",
      backgroundColor: "#0f172a",
    }}>
      {/* Background Container */}
      <div style={darkContainer}>
        {/* Animated floating particles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <Particle 
            key={i}
            size={Math.random() * 5 + 2}
            left={Math.random() * 100}
            top={Math.random() * 100}
            delay={Math.random() * 5}
          />
        ))}
        
        {/* Background Image with Parallax */}
        <div style={{
          ...backgroundImage,
          backgroundImage: `url(${youthImage})`,
          transform: `translate(${mousePos.x}px, ${mousePos.y}px) scale(${1 + scrollY * 0.0005})`,
          transition: 'transform 0.1s ease-out'
        }}>
          <div style={darkOverlay} />
        </div>
      </div>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main style={{ 
        flex: 1,
        position: 'relative',
        zIndex: 3,
        paddingTop: '70px',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <section style={heroSection}>
          <div ref={heroRef} style={{
            ...heroContent,
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
          }}>
            <h1 style={{
              ...heroTitle,
              animation: 'textGlow 3s ease-in-out infinite alternate'
            }}>
              VANTSHWA VA NAMUNTLHA (PTY) LTD
              <span style={{ 
                color: "#f97316",
                animation: 'pulse 2s ease-in-out infinite'
              }}> - Youth of Today</span>
            </h1>
            <p style={{
              ...heroDescription,
              animation: 'fadeIn 1.5s ease-out forwards',
              animationDelay: '0.3s',
              opacity: 0
            }}>
              Empowering the Youth. Healing Families. Restoring Hope in Mpumalanga. Together, we rise and heal.
            </p>
            <div style={{
              ...divider,
              animation: 'grow 0.8s ease-out forwards',
              transform: 'scaleX(0)',
              transformOrigin: 'left'
            }} />
            <h2 style={{
              ...heroSubtitle,
              animation: 'fadeIn 1.5s ease-out forwards',
              animationDelay: '0.6s',
              opacity: 0
            }}>
              "Transforming lives with faith and action."
            </h2>
            <button
              style={{
                ...ctaButton,
                transform: isHovering ? "scale(1.05)" : "scale(1)",
                boxShadow: isHovering 
                  ? "0 0 20px rgba(59, 130, 246, 0.5)"
                  : "0 0 10px rgba(59, 130, 246, 0.3)",
                animation: 'fadeIn 1.5s ease-out forwards',
                animationDelay: '0.9s',
                opacity: 0
              }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              onClick={() => setIsDialogOpen(true)}
            >
              Contact Us →
            </button>
          </div>
        </section>
      </main>

      {/* Footer - Now properly positioned at the bottom */}
      <div style={{ 
        position: 'relative', 
        zIndex: 3,
        marginTop: 'auto' // This pushes it to the bottom
      }}>
        <Footer />
      </div>

      {/* Contact Us Dialog */}
      <ContactUsDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
        
        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
        
        @keyframes grow {
          to {
            transform: scaleX(1);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
        
        @keyframes textGlow {
          from {
            text-shadow: 0 0 5px rgba(249, 115, 22, 0.5);
          }
          to {
            text-shadow: 0 0 15px rgba(249, 115, 22, 0.8);
          }
        }
      `}</style>
    </div>
  );
};

// Styles
const darkContainer = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 1,
  overflow: 'hidden',
};

const backgroundImage = {
  position: 'absolute',
  top: '-10%',
  left: '-10%',
  width: '120%',
  height: '120%',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  zIndex: 1,
  willChange: 'transform',
};

const darkOverlay = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'linear-gradient(rgba(15, 23, 42, 0.9), rgba(30, 58, 138, 0.8), rgba(59, 130, 246, 0.6))',
  zIndex: 2,
};

const heroSection = {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
  boxSizing: 'border-box',
  flex: 1,
};

const heroContent = {
  maxWidth: '800px',
  width: '100%',
  textAlign: 'center',
  backgroundColor: 'rgba(15, 23, 42, 0.4)',
  padding: '3rem 2rem',
  borderRadius: '20px',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(59, 130, 246, 0.3)',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
  position: 'relative',
};

const heroTitle = {
  fontSize: 'clamp(1.5rem, 4vw, 3rem)',
  fontWeight: 700,
  marginBottom: '1.5rem',
  lineHeight: 1.2,
  textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)',
  color: '#f1f5f9',
};

const heroDescription = {
  fontSize: 'clamp(1rem, 2vw, 1.2rem)',
  opacity: 0.9,
  lineHeight: 1.6,
  marginBottom: '1.5rem',
  maxWidth: '600px',
  marginLeft: 'auto',
  marginRight: 'auto',
  color: 'white',
};

const divider = {
  width: '80px',
  height: '3px',
  background: 'linear-gradient(90deg, #f97316, #10b981, #3b82f6, transparent)',
  margin: '1.5rem auto',
};

const heroSubtitle = {
  fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
  fontWeight: 300,
  opacity: 0.8,
  marginBottom: '2rem',
  color: 'white',
};

const ctaButton = {
  padding: '1rem 2.5rem',
  backgroundColor: 'rgba(16, 185, 129, 0.1)',
  color: '#e2e8f0',
  border: '2px solid #f97316',
  borderRadius: '50px',
  fontSize: '1rem',
  fontWeight: 600,
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  backdropFilter: 'blur(5px)',
  outline: 'none',
};

export default DarkLandingPage;