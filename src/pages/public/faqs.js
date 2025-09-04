import React, { useState, useEffect, useRef } from "react";
import Header from "../../shared/header";
import Footer from "../../shared/footer";
import youthImage from "../../assets/youth.jpg";
import analyticsService from "../../api/analyticsService";

const FAQsPage = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const contentRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);

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

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
    
    // Track FAQ interaction
    analyticsService.trackPageVisit(`/FAQs/question-${index + 1}`);
  };

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

  // FAQ data
  const faqItems = [
    {
      question: "What services does Vantshwa va Namuntlha offer?",
      answer: "Vantshwa va Namuntlha offers a range of counseling services including marriage counseling, financial counseling, learner counseling, church and Bible-based counseling, case navigation in the community, and community workshops."
    },
    {
      question: "How long do your counseling programs typically last?",
      answer: "The duration varies by program. Marriage counseling typically runs 4-12 weeks, financial counseling can be single sessions or 6-8 week programs, learner counseling is ongoing or semester-based, and community workshops typically run 4-8 weeks."
    },
    {
      question: "Do you offer virtual consultations?",
      answer: "Yes, we offer both in-person and virtual consultations to accommodate your needs and preferences."
    },
    {
      question: "How much do your services cost?",
      answer: "Our pricing varies based on the type of service and program duration. Please visit our Pricing page for detailed information or contact us directly for a personalized quote."
    },
    {
      question: "Do you work with schools and churches?",
      answer: "Yes, we partner with schools and churches to provide counseling services, workshops, and support programs tailored to their specific communities."
    },
    {
      question: "How can I schedule a session?",
      answer: "You can schedule a session by contacting us via phone or email. Visit our Contact page for our contact information."
    },
    {
      question: "What areas do you serve?",
      answer: "We primarily serve the Pretoria area, but our virtual consultations are available to clients regardless of location."
    },
    {
      question: "Do you offer support for gender-based violence?",
      answer: "Yes, we offer support programs and resources for those affected by gender-based violence through our community workshops and case navigation services."
    }
  ];

  // Styles
  const container = {
    color: '#e2e8f0',
    backgroundColor: '#0f172a',
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
    backgroundImage: `url(${youthImage})`,
    zIndex: 1,
    willChange: 'transform',
    transition: 'transform 0.1s ease-out',
  };

  const darkOverlay = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(rgba(15, 23, 42, 0.7), rgba(249, 115, 22, 0.4), rgba(15, 23, 42, 0.7))',
    zIndex: 2,
  };

  const contentContainer = {
    position: 'relative',
    zIndex: 3,
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  };

  const contentWrapper = {
    opacity: 0,
    transform: 'translateY(20px)',
    transition: 'opacity 0.5s ease, transform 0.5s ease',
  };

  const pageTitle = {
    fontSize: '2.5rem',
    fontWeight: 700,
    marginBottom: '1rem',
    textAlign: 'center',
    color: '#f1f5f9',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    '@media (max-width: 768px)': { fontSize: '2rem' },
    '@media (max-width: 480px)': { fontSize: '1.75rem' },
  };

  const highlightText = {
    color: '#f97316',
  };

  const pageSubtitle = {
    fontSize: '1.1rem',
    lineHeight: 1.6,
    marginBottom: '3rem',
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto 3rem',
    color: '#cbd5e1',
    '@media (max-width: 768px)': { fontSize: '1rem', marginBottom: '2rem' },
    '@media (max-width: 480px)': { fontSize: '0.9rem', marginBottom: '1.5rem' },
  };

  const faqContainer = {
    marginBottom: '3rem',
  };

  const faqItem = {
    backgroundColor: 'rgba(30, 41, 59, 0.7)',
    borderRadius: '8px',
    marginBottom: '1rem',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  const faqQuestion = {
    padding: '1.25rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
    fontWeight: 600,
    color: '#f1f5f9',
    fontSize: '1.1rem',
    transition: 'background-color 0.3s ease',
  };

  const faqAnswer = {
    padding: '0 1.25rem',
    maxHeight: '0',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    lineHeight: 1.6,
    color: '#cbd5e1',
  };

  const faqAnswerActive = {
    padding: '0 1.25rem 1.25rem',
    maxHeight: '500px',
  };

  const faqIcon = {
    fontSize: '1.5rem',
    transition: 'transform 0.3s ease',
  };

  const faqIconActive = {
    transform: 'rotate(180deg)',
  };

  const footerWrapper = {
    marginTop: 'auto',
    width: '100%',
    position: 'relative',
    zIndex: 3,
  };

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
            FREQUENTLY <span style={highlightText}>ASKED QUESTIONS</span>
          </h1>
          
          <p style={pageSubtitle}>
            Find answers to common questions about our services, programs, and approach to counseling and community support.
          </p>
          
          <div style={faqContainer}>
            {faqItems.map((item, index) => (
              <div key={index} style={faqItem}>
                <div 
                  style={faqQuestion} 
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{item.question}</span>
                  <span style={{
                    ...faqIcon,
                    ...(activeIndex === index ? faqIconActive : {}),
                  }}>▼</span>
                </div>
                <div style={{
                  ...faqAnswer,
                  ...(activeIndex === index ? faqAnswerActive : {}),
                }}>
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <div style={footerWrapper}>
        <Footer />
      </div>

      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
          }
        `}
      </style>
    </div>
  );
};

export default FAQsPage;