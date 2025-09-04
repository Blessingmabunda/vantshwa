import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import analyticsService from '../api/analyticsService';

/**
 * Custom hook to track page visits automatically
 */
const useAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Track the current page visit
    const trackVisit = async () => {
      try {
        await analyticsService.trackPageVisit(location.pathname);
        console.log(`Visit tracked for: ${location.pathname}`);
      } catch (error) {
        console.error('Analytics tracking failed:', error);
      }
    };

    // Small delay to ensure page has loaded
    const timer = setTimeout(trackVisit, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return {
    trackCustomEvent: analyticsService.trackPageVisit.bind(analyticsService)
  };
};

export default useAnalytics;