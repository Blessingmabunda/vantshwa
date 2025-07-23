import React, { useState, useEffect } from 'react';
import Icon from '@mdi/react';
import { mdiMenu, mdiClose } from '@mdi/js';

const NavigationMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState('Home');

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Set active page based on hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1) || 'home';
      const formattedHash = hash
        .replace('-', '')
        .replace(/(^\w|\s\w)/g, m => m.toUpperCase());
      setActivePage(formattedHash);
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Reset mobile menu state on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Animation styles
  const animations = {
    slideIn: `
      @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
    `,
    fadeIn: `
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `,
    pulse: `
      @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
      }
    `
  };

  // Inline styles for elements
  const styles = {
    header: {
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      transition: 'background-color 0.3s ease',
    },
    container: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 16px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '60px',
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
      transition: 'transform 0.2s ease',
    },
    logoCircle: {
      width: '50px',
      height: '50px',
      backgroundColor: '#ffffff', // Changed to white
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: '8px',
      transition: 'transform 0.3s ease, background-color 0.3s ease',
    },
    
    logoText: {
      fontSize: '20px',
      fontWeight: 600,
      color: 'white',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
      transition: 'transform 0.3s ease',
    },
    desktopNav: {
      display: 'flex',
      gap: '32px',
      alignItems: 'center',
    },
    desktopNavLink: {
      color: 'white',
      textDecoration: 'none',
      fontSize: '16px',
      transition: 'all 0.3s ease',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
      position: 'relative',
      padding: '8px 0',
    },
    desktopNavLinkActive: {
      color: '#93c5fd',
      fontWeight: 'bold',
    },
    desktopNavLinkHover: {
      color: '#93c5fd',
    },
    desktopNavLinkUnderline: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '2px',
      backgroundColor: '#93c5fd',
      transform: 'scaleX(0)',
      transformOrigin: 'left',
      transition: 'transform 0.3s ease',
    },
    bookingButton: {
      backgroundColor: '#f97316',
      color: 'white',
      padding: '8px 16px',
      borderRadius: '6px',
      textDecoration: 'none',
      fontSize: '16px',
      transition: 'all 0.3s ease',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    },
    bookingButtonHover: {
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    },
    bookingButtonActive: {
      animation: 'pulse 1.5s infinite',
    },
    mobileMenuButton: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '8px',
      fontSize: '24px',
      color: 'white',
      filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.8))',
      transition: 'transform 0.3s ease',
    },
    mobileMenuButtonHover: {
      transform: 'rotate(90deg)',
    },
    mobileMenu: {
      backgroundColor: 'white',
      position: 'fixed',
      top: '60px',
      right: 0,
      width: '250px',
      height: 'calc(100vh - 60px)',
      boxShadow: '-2px 0 10px rgba(0, 0, 0, 0.2)',
      padding: '20px',
      zIndex: 1000,
      overflowY: 'auto',
      display: isMobileMenuOpen ? 'block' : 'none',
      animation: 'slideIn 0.3s ease-out',
    },
    mobileNav: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
    },
    mobileNavLink: {
      color: '#1f2937',
      textDecoration: 'none',
      fontSize: '18px',
      padding: '12px 16px',
      display: 'block',
      transition: 'all 0.3s ease',
      borderRadius: '4px',
      animation: 'fadeIn 0.4s ease-out',
    },
    mobileNavLinkActive: {
      color: '#2563eb',
      backgroundColor: '#eff6ff',
      fontWeight: '600',
      transform: 'translateX(8px)',
    },
    mobileNavLinkHover: {
      color: '#2563eb',
      backgroundColor: '#f3f4f6',
    },
    mobileBookingButton: {
      backgroundColor: '#2563eb',
      color: 'white',
      padding: '12px 16px',
      borderRadius: '6px',
      textDecoration: 'none',
      textAlign: 'center',
      marginTop: '24px',
      fontSize: '18px',
      transition: 'all 0.3s ease',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
      animation: 'fadeIn 0.5s ease-out',
    },
    mobileBookingButtonHover: {
      backgroundColor: '#1d4ed8',
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    },
  };

  return (
    <>
      <style>
        {animations.slideIn}
        {animations.fadeIn}
        {animations.pulse}
        {`
          @media (min-width: 768px) {
            .desktop-nav {
              display: flex !important;
            }
            .mobile-menu-button {
              display: none !important;
            }
            .mobile-menu {
              display: none !important;
            }
          }
          @media (max-width: 767px) {
            .desktop-nav {
              display: none !important;
            }
            .mobile-menu-button {
              display: block !important;
            }
          }
          .logo-container:hover .logo-circle {
            transform: rotate(15deg) scale(1.1);
            background-color: #1d4ed8;
          }
          .logo-container:hover .logo-text {
            transform: translateX(4px);
          }
          .mobile-menu-button:hover {
            transform: scale(1.1);
          }
        `}
      </style>

      <header style={styles.header}>
        <div style={styles.container}>
          <div 
            className="logo-container" 
            style={styles.logoContainer}
            onClick={() => {
              window.location.hash = 'home';
              setActivePage('Home');
            }}
          >
            <div style={styles.logoCircle}>
              <img
                src={require('./../assets/logo.png')}
                alt="Logo"
                style={{
                  width: '80%',
                  height: '80%',
                  objectFit: 'contain',
                  borderRadius: '50%',
                }}
              />
            </div>
          </div>

          <nav className="desktop-nav" style={styles.desktopNav}>
            {['Home', 'AboutUs', 'Services', 'Pricing', 'Contact'].map((item) => {
              const isActive = activePage === item;
              return (
                <div key={item} style={{ position: 'relative' }}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    style={{
                      ...styles.desktopNavLink,
                      ...(isActive ? styles.desktopNavLinkActive : {}),
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.color = styles.desktopNavLinkHover.color;
                      e.currentTarget.querySelector('.underline').style.transform = 'scaleX(1)';
                    }}
                    onMouseOut={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = styles.desktopNavLink.color;
                      }
                      if (!isActive) {
                        e.currentTarget.querySelector('.underline').style.transform = 'scaleX(0)';
                      }
                    }}
                  >
                    {item}
                    <span 
                      className="underline" 
                      style={{
                        ...styles.desktopNavLinkUnderline,
                        ...(isActive ? { transform: 'scaleX(1)' } : {}),
                      }}
                    />
                  </a>
                </div>
              );
            })}
            <a
              href="#bookings"
              style={{
                ...styles.bookingButton,
                ...(activePage === 'Bookings' ? styles.bookingButtonActive : {}),
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = styles.bookingButtonHover.backgroundColor;
                e.currentTarget.style.transform = styles.bookingButtonHover.transform;
                e.currentTarget.style.boxShadow = styles.bookingButtonHover.boxShadow;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = styles.bookingButton.backgroundColor;
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = styles.bookingButton.boxShadow;
              }}
            >
              Bookings
            </a>
          </nav>

          <button
            className="mobile-menu-button"
            style={styles.mobileMenuButton}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            onMouseOver={(e) => {
              e.currentTarget.style.transform = styles.mobileMenuButtonHover.transform;
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'none';
            }}
          >
            <Icon path={isMobileMenuOpen ? mdiClose : mdiMenu} size={1} />
          </button>
        </div>

        <div className="mobile-menu" style={styles.mobileMenu}>
          <nav style={styles.mobileNav}>
            {['Home', 'AboutUs', 'Services', 'Pricing', 'Contact'].map((item, index) => {
              const isActive = activePage === item;
              return (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  style={{
                    ...styles.mobileNavLink,
                    ...(isActive ? styles.mobileNavLinkActive : {}),
                    animationDelay: `${index * 0.1}s`,
                  }}
                  onClick={() => {
                    toggleMobileMenu();
                    setActivePage(item);
                  }}
                  onMouseOver={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = styles.mobileNavLinkHover.color;
                      e.currentTarget.style.backgroundColor = styles.mobileNavLinkHover.backgroundColor;
                    }
                  }}
                  onMouseOut={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = styles.mobileNavLink.color;
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  {item}
                </a>
              );
            })}
            <a
              href="#bookings"
              style={styles.mobileBookingButton}
              onClick={() => {
                toggleMobileMenu();
                setActivePage('Bookings');
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = styles.mobileBookingButtonHover.backgroundColor;
                e.currentTarget.style.transform = styles.mobileBookingButtonHover.transform;
                e.currentTarget.style.boxShadow = styles.mobileBookingButtonHover.boxShadow;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = styles.mobileBookingButton.backgroundColor;
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = styles.mobileBookingButton.boxShadow;
              }}
            >
              Bookings
            </a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default NavigationMenu;