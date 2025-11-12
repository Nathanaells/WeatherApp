import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL || "http://localhost:3000";

console.log("🔧 API Config:", {
  VITE_API_URL: import.meta.env.VITE_API_URL,
  baseURL: baseURL,
  env: import.meta.env.MODE,
});

const api = axios.create({
  baseURL,
  // Removed withCredentials: true since weather endpoints are public and don't require auth
  // withCredentials will only be set for authenticated endpoints (user-weather, etc)
});

// Debug interceptor to log all requests
api.interceptors.request.use((config) => {
  console.log(`📡 API Request: ${config.method?.toUpperCase()} ${config.url}`);
  return config;
});

api.interceptors.response.use(
  (response) => {
    console.log(`✅ API Response: ${response.status} ${response.config.url}`);
    return response;
  },
  (error) => {
    // 401 errors on user-weather are expected when not logged in, so suppress those logs
    if (
      error.response?.status === 401 &&
      error.config?.url?.includes("user-weather")
    ) {
      return Promise.reject(error);
    }
    console.error(`❌ API Error: ${error.message}`, error.config?.url);
    return Promise.reject(error);
  }
);

export default api;
