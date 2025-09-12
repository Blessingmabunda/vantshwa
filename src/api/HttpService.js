import axios from "axios";

const httpService = axios.create({

  baseURL: "https://vantshwa-backend.onrender.com",
  headers: {
    "Content-Type": "application/json",
    
  },
});


  
  export default httpService;