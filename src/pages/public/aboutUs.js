import React, { useState, useEffect, useRef } from "react";
import Header from "../../shared/header";
import Footer from "../../shared/footer";
import youthImage from "../../assets/youth.jpg";

const AboutUsPage = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ 
        x: (e.clientX / window.innerWidth - 0.5) * 15,
        y: (e.clientY / window.innerHeight - 0.5) * 10 
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
      <div style={{
        position: 'fixed',
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: randomColor,
        borderRadius: '50%',
        left: `${left}%`,
        top: `${top}%`,
        animation: `float 6s ease-in-out ${delay}s infinite`,
        filter: 'blur(1px)',
        zIndex: 2,
        pointerEvents: 'none'
      }} />
    );
  };

  const aboutSections = [
    {
      title: "Our Purpose",
      content: [
        {
          heading: "Vision",
          text: "To raise a generation of strong, empowered individuals who will lead with wisdom, courage, and faith."
        }
      ]
    },
    {
      title: "Core Objectives",
      content: [
        {
          heading: "Support Vulnerable People & Orphans",
          text: "Providing food parcels, clothes, emotional support, access to counseling, referral services, and partnering with churches and families to build safe spaces."
        },
        {
          heading: "Protecting the Community from Crime",
          text: "Reporting criminal activities to law enforcement, running crime awareness campaigns in schools and villages, offering conflict resolution, responding to gender-based violence, and planning to establish a security company."
        },
        {
          heading: "Learner Empowerment & School Support",
          text: "Empowering learners and supporting schools to foster education and personal development."
        }
      ]
    }
  ];

  return (
    <div style={{
      ...container,
      margin: 0,
      padding: 0,
      width: '100vw',
      overflowX: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    }}>
      <div style={{
        width: '100vw',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 4,
        margin: 0,
        padding: 0,
      }}>
        <Header />
      </div>
      
      {Array.from({ length: 10 }).map((_, i) => (
        <Particle 
          key={i}
          size={Math.random() * 5 + 2}
          left={Math.random() * 100}
          top={Math.random() * 100}
          delay={Math.random() * 5}
        />
      ))}
      
      <div style={{
        ...backgroundImage,
        backgroundImage: `url(${youthImage})`,
        transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
      }}>
        <div style={darkOverlay} />
      </div>

      <main style={{
        ...contentContainer,
        flex: 1,
        paddingTop: '80px',
        paddingBottom: '80px',
      }}>
        <div ref={contentRef} style={contentWrapper}>
          <h1 style={pageTitle}>
            ABOUT VANTSHWA VA NAMUNTLHA
          </h1>
          
          <p style={pageSubtitle}>
            Transforming communities through sustainable solutions and empowerment initiatives
          </p>
          
          <div style={sectionsContainer}>
            {aboutSections.map((section, index) => (
              <div key={index} style={sectionWrapper}>
                <h2 style={sectionTitle}>
                  <span style={titleDecorator}>//</span> {section.title}
                </h2>
                
                <div style={sectionContent}>
                  {section.content.map((item, idx) => (
                    <div key={idx} style={contentBlock}>
                      <h3 style={contentHeading}>{item.heading}</h3>
                      <p style={contentText}>{item.text}</p>
                    </div>
                  ))}
                </div>
                
                {index < aboutSections.length - 1 && <div style={divider} />}
              </div>
            ))}
          </div>
          
          {/* <button
            style={{
              ...ctaButton,
              transform: isHovering ? "scale(1.05)" : "scale(1)",
              boxShadow: isHovering 
                ? "0 0 20px rgba(59, 130, 246, 0.5)"
                : "0 0 10px rgba(59, 130, 246, 0.3)",
            }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onClick={() => window.location.href = "/Contact"}
          >
            Join Our Mission →
          </button> */}
        </div>
      </main>

      <div style={{
        width: '100vw',
        position: 'relative',
        zIndex: 3,
        marginTop: 'auto',
        margin: 0,
        padding: 0,
      }}>
        <Footer />
      </div>

      <style jsx>{`
        body, html {
          margin: 0;
          padding: 0;
          width: 100%;
          overflow-x: hidden;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
      `}</style>
    </div>
  );
};

const container = {
  color: "#e2e8f0",
  backgroundColor: "#0f172a",
  position: 'relative',
  overflowX: 'hidden'
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
  background: 'linear-gradient(rgba(15, 23, 42, 0.7), rgba(249, 115, 22, 0.4), rgba(16, 185, 129, 0.4), rgba(59, 130, 246, 0.4))',
  zIndex: 2,
};

const contentContainer = {
  position: 'relative',
  zIndex: 3,
  padding: '100px 20px 40px',
  maxWidth: '1000px',
  margin: '0 auto',
};

const contentWrapper = {
  backgroundColor: 'rgba(15, 23, 42, 0.4)',
  padding: '2.5rem',
  borderRadius: '20px',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(59, 130, 246, 0.3)',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
  opacity: 0,
  transform: 'translateY(20px)',
  transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
};

const pageTitle = {
  fontSize: 'clamp(1.8rem, 4vw, 3rem)',
  fontWeight: 700,
  marginBottom: '1rem',
  textAlign: 'center',
  color: '#f1f5f9',
  textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)',
};

const pageSubtitle = {
  fontSize: 'clamp(1rem, 1.5vw, 1.3rem)',
  textAlign: 'center',
  color: '#cbd5e1',
  marginBottom: '3rem',
  maxWidth: '700px',
  marginLeft: 'auto',
  marginRight: 'auto',
  lineHeight: 1.6,
};

const sectionsContainer = {
  margin: '2rem 0',
};

const sectionWrapper = {
  marginBottom: '3rem',
};

const sectionTitle = {
  color: '#f97316',
  fontSize: 'clamp(1.3rem, 2vw, 1.6rem)',
  marginBottom: '1.5rem',
  fontWeight: 600,
  display: 'flex',
  alignItems: 'center',
};

const titleDecorator = {
  color: 'rgba(16, 185, 129, 0.5)',
  marginRight: '0.8rem',
  fontSize: '1.1em',
};

const sectionContent = {
  display: 'grid',
  gap: '1.5rem',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
};

const contentBlock = {
  backgroundColor: 'rgba(30, 41, 59, 0.3)',
  padding: '1.5rem',
  borderRadius: '10px',
  borderLeft: '3px solid #f97316',
};

const contentHeading = {
  color: '#f97316',
  fontSize: '1.1rem',
  marginBottom: '0.8rem',
  fontWeight: 500,
};

const contentText = {
  color: '#cbd5e1',
  lineHeight: 1.6,
  fontSize: '0.95rem',
};

const divider = {
  height: '1px',
  background: 'linear-gradient(90deg, transparent, rgba(249, 115, 22, 0.3), rgba(16, 185, 129, 0.3), rgba(59, 130, 246, 0.3), transparent)',
  margin: '3rem 0',
};

const ctaButton = {
  padding: '1rem 2.5rem',
  backgroundColor: 'rgba(16, 185, 129, 0.1)',
  color: '#e2e8f0',
  border: '2px solid #f97316',
  borderRadius: '50px',
  fontSize: '1.1rem',
  fontWeight: 600,
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  backdropFilter: 'blur(5px)',
  outline: 'none',
  display: 'block',
  margin: '4rem auto 0',
};

export default AboutUsPage;