import httpService from './HttpService';

/**
 * Video API service for fetching videos from the backend
 */
class VideoService {
  /**
   * Fetch all videos from the API
   * @returns {Promise} Promise that resolves to the videos data
   */
  static async getAllVideos() {
    try {
      const response = await httpService.get('/api/videos');
      return response.data;
    } catch (error) {
      console.error('Error fetching videos:', error);
      throw error;
    }
  }

  /**
   * Transform video data from API format to component format
   * @param {Array} apiVideos - Videos from API response
   * @returns {Array} Transformed videos for component use
   */
  static transformVideosForComponent(apiVideos) {
    return apiVideos.map(video => ({
      id: video._id,
      title: video.title,
      url: video.videoData, // Base64 data URL
      description: `Watch ${video.title} - A demonstration of our services and approach.`
    }));
  }

  /**
   * Fetch and transform videos for component use
   * @returns {Promise} Promise that resolves to transformed videos
   */
  static async getVideosForComponent() {
    try {
      const response = await this.getAllVideos();
      if (response.videos && Array.isArray(response.videos)) {
        return this.transformVideosForComponent(response.videos);
      }
      return [];
    } catch (error) {
      console.error('Error getting videos for component:', error);
      return [];
    }
  }
}

export default VideoService;