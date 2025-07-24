import React, { useState, useEffect, useRef } from "react";
import Header from "../../shared/header";
import Footer from "../../shared/footer"; // Added Footer import
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
      title: "Who We Are",
      content: [
        {
          heading: "Our Identity",
          text: "Vantshwa Va Namuntlha is a community-focused organization dedicated to sustainable development and empowerment."
        },
        {
          heading: "Established",
          text: "Founded in 2023 with a passion for social change"
        }
      ]
    },
    {
      title: "Our Purpose",
      content: [
        {
          heading: "Mission",
          text: "To transform communities through innovative solutions that address pressing social challenges."
        },
        {
          heading: "Vision",
          text: "A future where every individual has access to opportunities for growth and self-sufficiency."
        },
        {
          heading: "Core Values",
          text: "Integrity | Compassion | Innovation | Community | Sustainability"
        }
      ]
    },
    {
      title: "Our Approach",
      content: [
        {
          heading: "Methodology",
          text: "We combine evidence-based practices with local cultural understanding."
        },
        {
          heading: "Program Design",
          text: "Tailored interventions based on community needs assessments"
        },
        {
          heading: "Impact Measurement",
          text: "Rigorous monitoring and evaluation to ensure effectiveness"
        }
      ]
    },
    {
      title: "Leadership & Governance",
      content: [
        {
          heading: "Director: Clinton Makhubele",
          text: "20+ years experience in community development and social entrepreneurship"
        },
        {
          heading: "Registration",
          text: "Reg No.: 2025/212832/07 | Fully compliant with national regulations"
        },
        {
          heading: "Accountability",
          text: "Transparent financial reporting and ethical governance practices"
        }
      ]
    }
  ];

  return (
    <div style={{
      ...container,
      margin: 0, // Reset default margin
      padding: 0, // Reset default padding
      width: '100vw', // Ensure full viewport width
      overflowX: 'hidden', // Prevent horizontal scroll
      display: 'flex', // Enable flexbox for footer positioning
      flexDirection: 'column', // Stack children vertically
      minHeight: '100vh', // Ensure full height
    }}>
      {/* Header Container */}
      <div style={{
        width: '100vw', // Full viewport width
        position: 'fixed', // Keep header at top
        top: 0,
        left: 0,
        zIndex: 4, // Above other content
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
        flex: 1, // Allow main content to grow and push footer down
        paddingTop: '80px', // Adjust for header height
        paddingBottom: '80px', // Adjust for footer height
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
          
          <button
            style={{
              ...ctaButton,
              transform: isHovering ? "scale(1.05)" : "scale(1)",
              boxShadow: isHovering 
                ? "0 0 20px rgba(59, 130, 246, 0.5)" // Blue on hover
                : "0 0 10px rgba(59, 130, 246, 0.3)", // Blue default
            }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onClick={() => window.location.href = "/contact"}
          >
            Join Our Mission →
          </button>
        </div>
      </main>

      {/* Footer Container */}
      <div style={{
        width: '100vw', // Full viewport width
        position: 'relative', // Relative positioning to stay in flow
        zIndex: 3, // Above background
        marginTop: 'auto', // Push to bottom of flex container
        margin: 0,
        padding: 0,
      }}>
        <Footer />
      </div>

      <style jsx>{`
        /* CSS Reset for body and html */
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

// Styles (unchanged except where noted)
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
  background: 'linear-gradient(rgba(15, 23, 42, 0.7), rgba(249, 115, 22, 0.4), rgba(16, 185, 129, 0.4), rgba(59, 130, 246, 0.4))', // Mixed colors
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
  border: '1px solid rgba(59, 130, 246, 0.3)', // Blue
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
  color: '#f97316', // Orange
  fontSize: 'clamp(1.3rem, 2vw, 1.6rem)',
  marginBottom: '1.5rem',
  fontWeight: 600,
  display: 'flex',
  alignItems: 'center',
};

const titleDecorator = {
  color: 'rgba(16, 185, 129, 0.5)', // Green
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
  borderLeft: '3px solid #f97316', // Orange
};

const contentHeading = {
  color: '#f97316', // Orange
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
  background: 'linear-gradient(90deg, transparent, rgba(249, 115, 22, 0.3), rgba(16, 185, 129, 0.3), rgba(59, 130, 246, 0.3), transparent)', // Mixed colors
  margin: '3rem 0',
};

const ctaButton = {
  padding: '1rem 2.5rem',
  backgroundColor: 'rgba(16, 185, 129, 0.1)', // Green
  color: '#e2e8f0',
  border: '2px solid #f97316', // Orange
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