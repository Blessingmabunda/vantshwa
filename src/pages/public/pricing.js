import React, { useState, useEffect, useRef } from "react";
import Header from "../../shared/header";
import Footer from "../../shared/footer"; // Added Footer import
import youthImage from "../../assets/youth.jpg";

const PricingPage = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
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

  const pricingData = [
    {
      category: "Marriage & Relationship Counseling",
      plans: [
        {
          name: "Private Couple Session",
          price: "R150",
          duration: "1 hour",
          features: [
            "One-on-one consultation",
            "Personalized relationship guidance",
            "Conflict resolution strategies"
          ],
          transport: "Varies by location"
        },
        {
          name: "Group Workshop",
          price: "R100 per couple",
          duration: "2–3 hours",
          features: [
            "Interactive group setting",
            "Relationship building exercises",
            "Communication tools"
          ],
          transport: "Varies by location"
        },
        {
          name: "3-Day Coaching Package",
          price: "R350 total",
          duration: "3 sessions",
          features: [
            "One session per day",
            "Tailored relationship plan",
            "Follow-up support"
          ],
          transport: "Varies by location"
        }
      ]
    },
    {
      category: "Financial Counseling & Budget Support",
      plans: [
        {
          name: "Individual or Family Session",
          price: "R100",
          duration: "1 hour",
          features: [
            "Personalized budget review",
            "Financial goal setting",
            "Debt management advice"
          ],
          transport: "Varies by location"
        },
        {
          name: "Group Budgeting Workshop",
          price: "R250",
          duration: "2 hours",
          features: [
            "Group financial education",
            "Budgeting techniques",
            "Savings strategies"
          ],
          transport: "Varies by location"
        },
        {
          name: "2-Day Course",
          price: "R400 total",
          duration: "2 sessions",
          features: [
            "Comprehensive financial planning",
            "Debt reduction strategies",
            "Long-term savings plan"
          ],
          transport: "Varies by location"
        }
      ]
    },
    {
      category: "Youth Mentorship & School Support",
      plans: [
        {
          name: "Group Talk",
          price: "R200",
          duration: "1 hour",
          features: [
            "School or church setting",
            "Motivational guidance",
            "Group engagement activities"
          ],
          transport: "Varies by location"
        },
        {
          name: "One-on-One Mentorship",
          price: "R80 per learner",
          duration: "45 mins",
          features: [
            "Personalized mentorship",
            "Academic and career guidance",
            "Goal setting support"
          ],
          transport: "Varies by location"
        },
        {
          name: "3-Day Support Program",
          price: "R200 total",
          duration: "3 sessions",
          features: [
            "Structured mentorship plan",
            "Skill-building activities",
            "Progress tracking"
          ],
          transport: "Varies by location"
        }
      ]
    },
    {
      category: "GBV Awareness & Family Restoration",
      plans: [
        {
          name: "Family Session",
          price: "R150",
          duration: "1 hour",
          features: [
            "Family-focused support",
            "Conflict resolution",
            "Restoration strategies"
          ],
          transport: "Varies by location"
        },
        {
          name: "Awareness Talk",
          price: "R300",
          duration: "1–2 hours",
          features: [
            "School or community setting",
            "GBV education and prevention",
            "Community engagement"
          ],
          transport: "Varies by location"
        },
        {
          name: "2-Day Restoration Program",
          price: "R400 total",
          duration: "2 sessions",
          features: [
            "In-depth family restoration",
            "Trauma support",
            "Resource connection"
          ],
          transport: "Varies by location"
        }
      ]
    }
  ];

  const additionalFees = [
    {
      name: "Transport Fees",
      description: "Added based on location (distance & fuel costs)"
    },
    {
      name: "Time Allowance",
      description: "R50–R100 for extra waiting or extended sessions"
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
        flex: 1, // Grow to push footer down
        padding: '80px 15px 80px', // Adjusted for header and footer
        '@media (min-width: 768px)': {
          padding: '100px 20px 80px', // Adjusted for header and footer
        }
      }}>
        <div ref={contentRef} style={contentWrapper}>
          <h1 style={pageTitle}>
            TRANSPARENT <span style={highlightText}>PRICING</span>
          </h1>
          
          <p style={pageSubtitle}>
            Affordable rates with flexible options to meet your needs. All prices include VAT.
          </p>
          
          {/* Service Category Tabs */}
          <div style={tabsContainer}>
            {pricingData.map((service, index) => (
              <button
                key={index}
                style={{
                  ...tabButton,
                  backgroundColor: activeTab === index ? 'rgba(16, 185, 129, 0.2)' : 'transparent', // Green
                  borderColor: activeTab === index ? '#10b981' : 'rgba(16, 185, 129, 0.2)' // Green
                }}
                onClick={() => setActiveTab(index)}
              >
                {service.category}
              </button>
            ))}
          </div>
          
          {/* Pricing Cards */}
          <div style={pricingGrid}>
            {pricingData[activeTab].plans.map((plan, idx) => (
              <div key={idx} style={pricingCard}>
                <div style={pricingHeader}>
                  <h3 style={planName}>{plan.name}</h3>
                  <div style={priceTag}>
                    <span style={priceAmount}>{plan.price}</span>
                    <span style={priceDuration}>/{plan.duration}</span>
                  </div>
                </div>
                
                <div style={featuresList}>
                  {plan.features.map((feature, i) => (
                    <div key={i} style={featureItem}>
                      <span style={featureIcon}>✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div style={transportNote}>
                  <strong>Transport:</strong> {plan.transport}
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional Fees Section */}
          <div style={feesSection}>
            <h2 style={feesTitle}>Additional Charges</h2>
            <div style={feesGrid}>
              {additionalFees.map((fee, index) => (
                <div key={index} style={feeCard}>
                  <h4 style={feeName}>{fee.name}</h4>
                  <p style={feeDescription}>{fee.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div style={disclaimer}>
            * Sliding scale fees available for qualifying individuals. Contact us for payment plans.
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
            Get Custom Quote →
          </button>
        </div>
      </main>

      {/* Footer Container */}
      <div style={{
        width: '100vw', // Full viewport width
        position: 'relative', // Stay in document flow
        zIndex: 3, // Above background
        marginTop: 'auto', // Push to bottom of flex container
        margin: 0,
        padding: 0,
      }}>
        <Footer />
      </div>

      <style jsx global>{`
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
        
        @media (max-width: 768px) {
          html {
            font-size: 14px;
          }
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
  overflowX: 'hidden',
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
  '@media (min-width: 768px)': {
    padding: '100px 20px 40px'
  }
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
  '@media (max-width: 768px)': {
    padding: '1.5rem 1rem',
  }
};

const pageTitle = {
  fontSize: 'clamp(1.5rem, 4vw, 3rem)',
  fontWeight: 700,
  marginBottom: '1rem',
  textAlign: 'center',
  color: '#f1f5f9',
  textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)',
};

const pageSubtitle = {
  fontSize: 'clamp(0.9rem, 3vw, 1.2rem)',
  textAlign: 'center',
  color: '#cbd5e1',
  marginBottom: '3rem',
  maxWidth: '800px',
  marginLeft: 'auto',
  marginRight: 'auto',
  lineHeight: 1.6,
};

const highlightText = {
  color: "#f97316", // Orange
};

const tabsContainer = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.8rem',
  justifyContent: 'center',
  marginBottom: '2.5rem',
  overflowX: 'auto',
  paddingBottom: '10px',
  '@media (max-width: 768px)': {
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
  }
};

const tabButton = {
  padding: '0.8rem 1.5rem',
  borderRadius: '50px',
  border: '1px solid',
  color: '#e2e8f0',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  fontSize: '0.95rem',
  fontWeight: 500,
  backdropFilter: 'blur(5px)',
  whiteSpace: 'nowrap',
  flexShrink: 0,
  ':hover': {
    backgroundColor: 'rgba(16, 185, 129, 0.1)' // Green
  }
};

const pricingGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '1.5rem',
  marginBottom: '3rem',
  '@media (max-width: 768px)': {
    gridTemplateColumns: '1fr',
  }
};

const pricingCard = {
  backgroundColor: 'rgba(30, 41, 59, 0.3)',
  borderRadius: '12px',
  padding: '2rem',
  border: '1px solid rgba(16, 185, 129, 0.2)', // Green
  transition: 'all 0.3s ease',
  ':hover': {
    borderColor: 'rgba(16, 185, 129, 0.5)', // Green
    transform: 'translateY(-5px)'
  },
  '@media (max-width: 768px)': {
    padding: '1.5rem 1rem',
  }
};

const pricingHeader = {
  marginBottom: '1.5rem',
  paddingBottom: '1rem',
  borderBottom: '1px solid rgba(16, 185, 129, 0.2)' // Green
};

const planName = {
  color: '#10b981', // Green
  fontSize: '1.3rem',
  marginBottom: '0.5rem',
  fontWeight: 600
};

const priceTag = {
  display: 'flex',
  alignItems: 'baseline',
  gap: '0.3rem'
};

const priceAmount = {
  color: '#f1f5f9',
  fontSize: '1.8rem',
  fontWeight: 700
};

const priceDuration = {
  color: '#94a3b8',
  fontSize: '0.9rem'
};

const featuresList = {
  marginBottom: '1.5rem',
  minHeight: '180px',
  '@media (max-width: 768px)': {
    minHeight: 'auto'
  }
};

const featureItem = {
  display: 'flex',
  gap: '0.7rem',
  marginBottom: '0.8rem',
  alignItems: 'flex-start',
  color: '#cbd5e1',
  fontSize: '0.95rem',
  lineHeight: 1.5
};

const featureIcon = {
  color: '#10b981', // Green
  fontWeight: 'bold'
};

const transportNote = {
  backgroundColor: 'rgba(30, 58, 138, 0.3)',
  padding: '0.8rem',
  borderRadius: '8px',
  marginBottom: '1.5rem',
  color: '#e2e8f0',
  fontSize: '0.9rem'
};

const feesSection = {
  margin: '3rem 0'
};

const feesTitle = {
  color: '#10b981', // Green
  fontSize: '1.4rem',
  marginBottom: '1.5rem',
  textAlign: 'center',
  fontWeight: 600
};

const feesGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '1.2rem'
};

const feeCard = {
  backgroundColor: 'rgba(30, 41, 59, 0.3)',
  padding: '1.2rem',
  borderRadius: '8px',
  borderLeft: '3px solid #10b981' // Green
};

const feeName = {
  color: '#10b981', // Green
  fontSize: '1rem',
  marginBottom: '0.5rem',
  fontWeight: 500
};

const feeDescription = {
  color: '#cbd5e1',
  fontSize: '0.9rem',
  lineHeight: 1.5
};

const disclaimer = {
  textAlign: 'center',
  color: '#94a3b8',
  fontSize: '0.85rem',
  margin: '2rem 0',
  fontStyle: 'italic'
};

const ctaButton = {
  padding: '1rem 2.5rem',
  backgroundColor: 'rgba(16, 185, 129, 0.1)', // Green
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
  margin: '3rem auto 0',
  ':hover': {
    backgroundColor: 'rgba(16, 185, 129, 0.3)' // Green
  },
  '@media (max-width: 768px)': {
    width: '100%',
    padding: '1rem'
  }
};

export default PricingPage;