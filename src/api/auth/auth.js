import httpService from "../HttpService";

const apiService = {
  async registerUser(data) {
    try {
      const response = await httpService.post("/api/register-user", data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async loginUser(data) {
    try {
      // Send username and password as query parameters
      const response = await httpService.post(
        "/api/login",
        null, // No body data, just query parameters
        {
          params: {
            username: data.username,
            password: data.password,
          },
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default apiService;
