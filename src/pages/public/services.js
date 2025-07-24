import React, { useState, useEffect, useRef, useMemo } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { throttle } from "lodash";
import Header from "../../shared/header";
import Footer from "../../shared/footer"; // Added Footer import
import youthImage from "../../assets/youth.jpg";

// Global CSS Reset
const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    width: 100%;
    overflow-x: hidden;
  }
`;

// Styled Components
const Container = styled.div`
  min-height: 100vh;
  color: #e2e8f0;
  background-color: #0f172a;
  position: relative;
  overflow-x: hidden;
  display: flex; /* Enable flexbox for footer positioning */
  flex-direction: column; /* Stack children vertically */
  width: 100vw; /* Ensure full viewport width */
`;

const HeaderContainer = styled.div`
  width: 100vw; /* Full viewport width */
  position: fixed; /* Keep header at top */
  top: 0;
  left: 0;
  z-index: 4; /* Above other content */
  margin: 0;
  padding: 0;
`;

const FooterContainer = styled.div`
  width: 100vw; /* Full viewport width */
  position: relative; /* Stay in document flow */
  z-index: 3; /* Above background */
  margin-top: auto; /* Push to bottom of flex container */
  margin: 0;
  padding: 0;
`;

const BackgroundImage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${youthImage});
  z-index: 1;
  will-change: transform;
  transition: transform 0.1s ease-out;
`;

const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    rgba(15, 23, 42, 0.7),
    rgba(249, 115, 22, 0.4),
    rgba(16, 185, 129, 0.4),
    rgba(59, 130, 246, 0.4)
  );
  z-index: 2;
`;

const ContentContainer = styled.main`
  position: relative;
  z-index: 3;
  padding: 80px 20px 80px; /* Adjusted for header and footer height */
  max-width: 1200px;
  margin: 0 auto;
  flex: 1; /* Grow to push footer down */
`;

const ContentWrapper = styled.div`
  background-color: rgba(15, 23, 42, 0.4);
  padding: 2rem;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(59, 130, 246, 0.3);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
`;

const PageTitle = styled.h1`
  font-size: clamp(1.8rem, 4vw, 3rem);
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
  color: #f1f5f9;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.8);
`;

const HighlightText = styled.span`
  color: #f97316; // Orange
`;

const PageSubtitle = styled.p`
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  text-align: center;
  color: #cbd5e1;
  margin-bottom: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`;

const ServiceCard = styled.div`
  background-color: rgba(30, 41, 59, 0.5);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid ${({ active }) => (active ? "rgba(16, 185, 129, 0.7)" : "rgba(16, 185, 129, 0.2)")};
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const ServiceTitle = styled.h3`
  color: #10b981; // Green
  font-size: 1.3rem;
  margin-bottom: 1rem;
  font-weight: 600;
  text-align: center;
`;

const ServiceDetails = styled.div`
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(16, 185, 129, 0.2);
  animation: fadeIn 0.5s ease-out;
`;

const DetailSection = styled.div`
  margin-bottom: 1.5rem;
`;

const DetailTitle = styled.h4`
  color: #f1f5f9;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const DetailList = styled.ul`
  padding-left: 1.2rem;
  margin: 0.5rem 0;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
  line-height: 1.5;
  position: relative;
  padding-left: 1rem;
  &:before {
    content: "•";
    color: #10b981; // Green
    position: absolute;
    left: 0;
  }
`;

const DetailText = styled.p`
  line-height: 1.5;
  color: #cbd5e1;
  padding-left: 1rem;
`;

const ServiceFooter = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const ToggleButton = styled.span`
  color: #10b981; // Green
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  &:hover {
    text-decoration: underline;
  }
`;

const CtaButton = styled.button`
  padding: 1rem 2.5rem;
  background-color: rgba(16, 185, 129, 0.1); // Green
  color: #e2e8f0;
  border: 2px solid #10b981; // Green
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
  outline: none;
  display: block;
  margin: 3rem auto 0;
  &:hover {
    background-color: rgba(16, 185, 129, 0.3);
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.5); // Blue
  }
`;

const Particle = styled.div`
  position: fixed;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background-color: ${({ color }) => color};
  border-radius: 50%;
  left: ${({ left }) => left}%;
  top: ${({ top }) => top}%;
  animation: float 6s ease-in-out ${({ delay }) => delay}s infinite;
  filter: blur(1px);
  z-index: 2;
  pointer-events: none;

  @keyframes float {
    0%,
    100% {
      transform: translateY(0) translateX(0);
    }
    50% {
      transform: translateY(-20px) translateX(10px);
    }
  }
`;

const ServicesPage = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const contentRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    const handleMouseMove = throttle((e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 15,
        y: (e.clientY / window.innerHeight - 0.5) * 10,
      });
    }, 16); // ~60fps

    window.addEventListener("mousemove", handleMouseMove);

    const timer = setTimeout(() => {
      if (contentRef.current) {
        contentRef.current.style.opacity = "1";
        contentRef.current.style.transform = "translateY(0)";
      }
    }, 100);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  const particles = useMemo(
    () =>
      Array.from({ length: 10 }).map((_, i) => ({
        id: i,
        size: Math.random() * 5 + 2,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 5,
        color: [
          "rgba(249, 115, 22, 0.6)", // Orange
          "rgba(16, 185, 129, 0.6)", // Green
          "rgba(59, 130, 246, 0.6)", // Blue
        ][Math.floor(Math.random() * 3)],
      })),
    []
  );

  const toggleCategory = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  const handleKeyDown = (e, category) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleCategory(category);
    }
  };

  const services = [
    {
      title: "Marriage Counseling",
      sessions: [
        "Pre-marital counseling programs",
        "Marriage restoration sessions",
        "Relationship coaching for dating or engaged couples",
        "Conflict management workshops",
        "Couples therapy (60-90 mins)",
      ],
      duration: "4-12 week programs",
      benefits: [
        "Stronger emotional bonds",
        "Improved communication skills",
        "Effective conflict resolution",
        "Rebuilt trust and commitment",
        "Healthier relationship dynamics",
      ],
    },
    {
      title: "Financial Counseling",
      sessions: [
        "Budgeting and saving workshops",
        "Debt recovery guidance with financial advisors",
        "Youth financial literacy programs",
        "Personal finance assessments",
        "Savings and investment planning",
      ],
      duration: "Single sessions or 6-8 week programs",
      benefits: [
        "Reduced financial stress",
        "Practical budgeting skills",
        "Improved financial literacy",
        "Long-term financial stability",
        "Confidence in money management",
      ],
    },
    {
      title: "Learner Counseling",
      sessions: [
        "Academic stress management",
        "Bullying and peer pressure support",
        "Mental health counseling",
        "One-on-one mentorship sessions",
        "Ongoing emotional and behavioral check-ins",
      ],
      duration: "Ongoing or semester-based",
      benefits: [
        "Improved academic performance",
        "Enhanced emotional resilience",
        "Better coping mechanisms",
        "Increased self-confidence",
        "Stronger decision-making skills",
      ],
    },
    {
      title: "Church and Bible-Based Counseling",
      sessions: [
        "Biblical restoration counseling",
        "Forgiveness and identity workshops",
        "Family enrichment programs with churches",
        "Faith-based individual sessions",
        "Group spiritual guidance",
      ],
      duration: "Varies by program (typically 6-12 weeks)",
      benefits: [
        "Spiritual growth and renewal",
        "Strengthened family bonds",
        "Healing through forgiveness",
        "Deeper connection to faith",
        "Community and church support",
      ],
    },
    {
      title: "Case Navigation in the Community",
      sessions: [
        "Social and personal challenge guidance",
        "Legal issue navigation support",
        "Family mediation services",
        "Access to professional resources",
        "Government resource assistance",
      ],
      duration: "Varies by need",
      benefits: [
        "Effective problem resolution",
        "Access to necessary resources",
        "Improved family communication",
        "Empowerment through guidance",
        "Community support connections",
      ],
    },
    {
      title: "Community Workshops",
      sessions: [
        "Conflict resolution training",
        "Parenting skills workshops",
        "Grief recovery sessions",
        "Substance abuse awareness programs",
        "Gender-based violence (GBV) support",
      ],
      duration: "Varies by program (typically 4-8 weeks)",
      benefits: [
        "Enhanced community resilience",
        "Improved parenting techniques",
        "Healing from grief and trauma",
        "Increased awareness of social issues",
        "Stronger community networks",
      ],
    },
  ];

  return (
    <>
      <GlobalStyle />
      <Container>
        <HeaderContainer>
          <Header />
        </HeaderContainer>
        {particles.map((particle) => (
          <Particle
            key={particle.id}
            size={particle.size}
            left={particle.left}
            top={particle.top}
            delay={

particle.delay}
            color={particle.color}
          />
        ))}
        <BackgroundImage style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}>
          <DarkOverlay />
        </BackgroundImage>
        <ContentContainer>
          <ContentWrapper ref={contentRef}>
            <PageTitle>
              OUR <HighlightText>SERVICES</HighlightText>
            </PageTitle>
            <PageSubtitle>
              Structured, faith-based, and practical counseling programs to empower learners, couples, individuals, families, churches, and communities. Available privately, in schools, churches, or community venues.
            </PageSubtitle>
            <ServicesGrid>
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  active={activeCategory === index}
                  onClick={() => toggleCategory(index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  tabIndex={0}
                  role="button"
                  aria-expanded={activeCategory === index}
                  aria-label={`Toggle details for ${service.title}`}
                >
                  <ServiceTitle>{service.title}</ServiceTitle>
                  {activeCategory === index && (
                    <ServiceDetails>
                      <DetailSection>
                        <DetailTitle>Session Types:</DetailTitle>
                        <DetailList>
                          {service.sessions.map((session, i) => (
                            <ListItem key={i}>{session}</ListItem>
                          ))}
                        </DetailList>
                      </DetailSection>
                      <DetailSection>
                        <DetailTitle>Duration:</DetailTitle>
                        <DetailText>{service.duration}</DetailText>
                      </DetailSection>
                      <DetailSection>
                        <DetailTitle>Benefits:</DetailTitle>
                        <DetailList>
                          {service.benefits.map((benefit, i) => (
                            <ListItem key={i}>{benefit}</ListItem>
                          ))}
                        </DetailList>
                      </DetailSection>
                    </ServiceDetails>
                  )}
                  <ServiceFooter>
                    <ToggleButton>
                      {activeCategory === index ? "▲ Hide Details" : "▼ Learn More"}
                    </ToggleButton>
                  </ServiceFooter>
                </ServiceCard>
              ))}
            </ServicesGrid>
            <CtaButton
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              onClick={() => window.location.href = "/contact"}
              aria-label="Get started with our services"
            >
              Get Started Today →
            </CtaButton>
          </ContentWrapper>
        </ContentContainer>
        <FooterContainer>
          <Footer />
        </FooterContainer>
      </Container>
    </>
  );
};

export default ServicesPage;