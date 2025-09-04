import httpService from './HttpService';

class AnalyticsService {
  /**
   * Record a website visit
   * @param {string} visitorId - Unique identifier for the visitor
   * @param {string} path - The path/route being visited
   * @returns {Promise} - API response
   */
  async recordVisit(visitorId, path) {
    try {
      const response = await httpService.post('/api/analytics/visit', {
        visitorId,
        path
      });
      return response.data;
    } catch (error) {
      console.error('Failed to record visit:', error);
      // Don't throw error to prevent breaking the app if analytics fails
      return null;
    }
  }

  /**
   * Generate or retrieve visitor ID from localStorage
   * @returns {string} - Visitor ID
   */
  getVisitorId() {
    let visitorId = localStorage.getItem('visitorId');
    
    if (!visitorId) {
      // Generate a simple unique ID
      visitorId = 'visitor_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
      localStorage.setItem('visitorId', visitorId);
    }
    
    return visitorId;
  }

  /**
   * Track a page visit with automatic visitor ID generation
   * @param {string} path - The path/route being visited
   */
  async trackPageVisit(path) {
    const visitorId = this.getVisitorId();
    return await this.recordVisit(visitorId, path);
  }
}

const analyticsService = new AnalyticsService();
export default analyticsService;